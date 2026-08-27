# Methodology

## Purpose

The Practical AI Tools Directory is a decision aid, not an exhaustive catalog. It prioritizes useful constraints, evidence, and reproducibility over the number of links.

## Entry states

### Source-reviewed

Required:

- Official product URL
- Official pricing or plan source
- Official privacy, security, or data-handling source
- A specific job-to-be-done
- At least one reason not to choose the tool
- Review date

A source-reviewed entry does **not** claim hands-on testing.

### Hands-on tested

In addition to the source-reviewed requirements:

- Named test outcome
- Reproducible steps designed to take 10–20 minutes
- Sanitized sample input
- Captured output or result summary
- Product/plan and test date
- Setup time and required skill level
- Measured strengths and observed failure modes
- A practical alternative
- Scheduled re-test date

### Stale

An entry becomes stale when:

- Its scheduled review date has passed;
- A linked source no longer supports a material claim;
- Pricing, ownership, terms, or product availability changed materially; or
- A maintainer cannot reproduce a previously published test.

## Editorial principles

1. **Start with outcomes.** Use plain-language jobs rather than technical categories alone.
2. **Separate evidence levels.** Vendor documentation, source review, and hands-on tests are different things.
3. **State constraints.** Include cost, privacy, platform, setup, and operational cautions when available.
4. **Say when not to use a tool.** Every recommendation needs an “avoid if” condition.
5. **Prefer primary sources.** Link official product, pricing, policy, security, and documentation pages.
6. **No hidden commercial influence.** Affiliate links, sponsorship, and paid placement must be disclosed and separated from editorial decisions.
7. **Protect sensitive data.** Test inputs must be synthetic, public, or explicitly authorized.

## Review cadence

- Pricing and availability: review at least every 90 days.
- Privacy and data-handling claims: review at least every 90 days and after material policy announcements.
- Hands-on test cards: re-run at least every 180 days or after a major product change.
- Automated link checks: run on each proposed change and on a schedule when automation is enabled.

## Proposed test-card template

```markdown
# Outcome: [specific job]

- Tool and plan:
- Test date:
- Tester:
- Setup time:
- Skill level:
- Platforms:
- Account/API requirements:
- Input sensitivity: public / synthetic / authorized private

## Goal

## Steps

## Sample input

## Result

## Strengths observed

## Failure modes observed

## Cost notes

## Privacy and data path

## Best alternative

## Avoid if

## Evidence

## Re-test by
```
