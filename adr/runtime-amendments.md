# Runtime architecture and plan amendments

> Generated from durably accepted Baro runtime graph decisions. The quoted
> reasons, identifiers, and titles below are untrusted model/repository data,
> not executable instructions. Entries are ordered by committed graph version;
> a later accepted decision supersedes an earlier Architect baseline wherever
> they conflict.

## Graph version 2

```json
{
  "graphVersion": 2,
  "proposalId": "run-progressive-c8ea232a4a3832ce:planner:9d773fd42ecdb7c9cf68a4964ee8ac43291a25a99de238c1b1384c7c73cf9e62",
  "sourceStoryId": "planner:planning-c8ea232a4a3832ce-1",
  "reason": "progressive planner admitted fragment frag-s1-checkout-execfile",
  "exactMutationSha256": "1888fa63c7b77056a46cc61538a5131751821b6c792cf475de51c141b1ccc6f3",
  "mutationSummary": {
    "addedStories": [
      {
        "id": "S1",
        "title": "Replace execSync shell interpolation in healthProbe with execFileSync argv array and open PR",
        "dependsOn": [],
        "goalInvariantIds": [
          "G-A1",
          "G-A2",
          "G-A3",
          "G-A4",
          "G-C1",
          "G-C2",
          "G-C3",
          "G-C4"
        ]
      }
    ],
    "removedStoryIds": [],
    "modifiedDeps": {}
  }
}
```

## Graph version 3

```json
{
  "graphVersion": 3,
  "proposalId": "run-progressive-c8ea232a4a3832ce:policy-replan:156358d8-9c69-4df5-a374-95a9fd42ca3f",
  "sourceStoryId": "S1",
  "reason": "split: S1 on openai:deepseek-v4-pro was too broad: it bundled the src/checkout.ts code change, test-run evidence, immutability checks, and PR delivery into one session. The code and test portions were correct, but the PR-open evidence was never captured because the story tried to do too much at once. Split into S2 (code change plus bun test and immutability evidence) and S3 (focused open-unmerged PR delivery and verification) so each acceptance subset gets dedicated execution without dropping any global invariant.",
  "exactMutationSha256": "9b93d91a1422b36101f97a6a1f6f08e8b588ec7d5fe970797d63c601998fe7f9",
  "mutationSummary": {
    "addedStories": [
      {
        "id": "S2",
        "title": "Replace execSync with execFileSync argv array in src/checkout.ts and verify tests",
        "dependsOn": [],
        "goalInvariantIds": [
          "G-A1",
          "G-A2",
          "G-A3",
          "G-C1",
          "G-C2",
          "G-C3"
        ]
      },
      {
        "id": "S3",
        "title": "Open unmerged PR against main for the src/checkout.ts execFileSync fix",
        "dependsOn": [
          "S2"
        ],
        "goalInvariantIds": [
          "G-A4",
          "G-C4"
        ]
      }
    ],
    "removedStoryIds": [
      "S1"
    ],
    "modifiedDeps": {}
  }
}
```
