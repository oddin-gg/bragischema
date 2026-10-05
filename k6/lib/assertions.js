// Shared assertion guard for the Bragi k6 suite.
//
// The problem this solves: every test here gates its check() calls behind a
// stream 'data' handler or a successful unary response. When Bragi denies the
// RPC — PermissionDenied (code 7) on a stale or missing BRAGI_TOKEN — no
// handler ever fires, so ZERO checks run. `checks: ['rate==1.0']` is satisfied
// by an empty Rate, k6 exits 0, and the runner reports PASS for a test that
// verified nothing.
//
// k6 cannot express "at least one check ran" on the built-in `checks` metric.
// `checks` is a Rate, and Rate supports only the `rate` aggregation; asking for
// `checks: ['count>0']` is a config error, not a threshold (k6 v1.6.1):
//
//   unsupported aggregation method count on metric of type rate.
//   supported aggregation methods for this metric are: rate
//   $ echo $?  -> 104
//
// So the suite counts assertions itself in a Counter and thresholds that.
// Import `check` from this module instead of from 'k6' and every assertion is
// counted automatically — no per-call bookkeeping at the call sites.

import { check as k6check } from 'k6';
import { Counter } from 'k6/metrics';

export const assertionsRun = new Counter('assertions_run');

// Drop-in replacement for k6's check(): same signature, same return value, same
// pass/fail semantics. Additionally records how many conditions were evaluated,
// so a test that never reaches its assertions can be told apart from one whose
// assertions all passed.
export function check(target, conditions, tags) {
  const n = conditions ? Object.keys(conditions).length : 0;
  const result = k6check(target, conditions, tags);
  if (n > 0) assertionsRun.add(n);
  return result;
}

// The thresholds every test in this suite uses.
//
//   checks         every assertion that ran must have passed (unchanged)
//   assertions_run at least one assertion must have RUN, so a denied stream or
//                  an empty feed fails loudly instead of passing vacuously
//
// A test needing extra thresholds should spread these rather than replace them:
//   thresholds: { ...THRESHOLDS, grpc_req_duration: ['p(95)<2000'] }
export const THRESHOLDS = {
  checks: ['rate==1.0'],
  assertions_run: ['count>0'],
};
