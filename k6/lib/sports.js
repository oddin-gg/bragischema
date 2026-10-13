// Is `sport` a real Sport enum value, as decoded by k6's gRPC client?
//
// The sport assertions used to compare against a hardcoded list of six sports.
// The enum has since grown (Rush Cricket, CS2 Duels, Table Tennis, ...), so a
// valid response containing a newer sport failed the check.
//
// No list is needed. k6 decodes responses with the same proto/bragi/common.proto
// this suite loads, so a value in the enum arrives as its name ('SPORT_CS2') and
// a value that is NOT in the enum arrives as a bare number. Checked against test
// by deleting SPORT_CS2 from a local copy of the proto: CS2 then came back as 1.
// So "is it a name" is the same check as "is it in the enum", and adding a sport
// to the proto is all it takes to accept it.
//
// SPORT_UNSPECIFIED is the proto3 zero value, never a real sport in a response.
export function isValidSport(sport) {
  return typeof sport === 'string' && sport.startsWith('SPORT_') && sport !== 'SPORT_UNSPECIFIED';
}
