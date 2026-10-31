import { execFileSync } from "node:child_process";

/**
 * Deliberately vulnerable fixture for the CUSTODY handoff demo.
 *
 * Request-controlled text reaches a shell. The fix is an argument array, not a
 * WAF rule. Do not copy this pattern.
 */
export const healthProbe = (userAgent: string): string =>
  execFileSync("printf", ["%s", userAgent], { encoding: "utf8" });
