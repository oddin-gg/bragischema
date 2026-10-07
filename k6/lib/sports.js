// Valid Sport enum names, read from the proto this suite already loads.
//
// The sport assertions used to compare against a hardcoded list of six sports.
// The enum has since grown (Rush Cricket, CS2 Duels, Table Tennis, ...), so a
// valid response containing a newer sport failed the check. Reading the names
// from proto/bragi/common.proto keeps the assertion in step with the schema in
// this repo: adding a sport to the enum is enough, and a value Bragi sends that
// is NOT in the enum still fails.
//
// open() only works in the init context, so this runs once at import time.

const COMMON_PROTO = open('../../proto/bragi/common.proto');

function parseEnum(protoText, enumName) {
  const block = protoText.match(new RegExp(`enum\\s+${enumName}\\s*\\{([^}]*)\\}`));
  if (!block) {
    throw new Error(`enum ${enumName} not found in proto/bragi/common.proto`);
  }
  const names = [];
  const entry = /^\s*([A-Z][A-Z0-9_]*)\s*=\s*\d+\s*;/gm;
  let m;
  while ((m = entry.exec(block[1])) !== null) names.push(m[1]);
  if (names.length === 0) {
    throw new Error(`enum ${enumName} in proto/bragi/common.proto has no values`);
  }
  return names;
}

// SPORT_UNSPECIFIED is the proto3 zero value, never a real sport in a response.
export const VALID_SPORTS = parseEnum(COMMON_PROTO, 'Sport').filter((s) => s !== 'SPORT_UNSPECIFIED');

export function isValidSport(sport) {
  return VALID_SPORTS.includes(sport);
}
