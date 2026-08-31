# Before You Paste: An AI Data-Safety Checklist

> A provider-neutral checklist for deciding what data belongs in an AI workflow—and what should stay out.

**Source review:** 2026-08-31  
**Audience:** Individuals, small teams, and builders using hosted or local AI tools

## The 60-second check

Before submitting text, files, images, recordings, code, or connected-app data to an AI system, answer these questions:

1. **Do I have the right to use this data?**
   - Check ownership, client agreements, workplace policy, licenses, and participant consent.
2. **What is the most sensitive thing in the input?**
   - Look for passwords, API keys, identity numbers, financial or health records, private conversations, source code, contracts, and unreleased business information.
3. **Can I remove or replace it?**
   - Use placeholders, synthetic examples, summaries, cropped screenshots, or the minimum necessary excerpt.
4. **Where will the data travel?**
   - Include the model provider, plugins, connectors, retrieval systems, logs, analytics, and human-review paths—not just the chat window.
5. **How long can copies remain?**
   - Check retention, deletion, backups, export history, and whether inputs may be used to improve models.
6. **Who can access the result?**
   - Review workspace sharing, link visibility, permissions, and whether the output could expose facts from the input.
7. **Would disclosure create real harm?**
   - If the answer is yes or unclear, stop and use an approved workflow or a sanitized substitute.

## A simple traffic-light rule

### Green: usually reasonable

- Public information
- Your own non-sensitive drafts
- Synthetic or deliberately fictional examples
- Data that has been minimized and checked for identifiers

Normal caution still applies: verify outputs and review the tool's current terms.

### Yellow: sanitize or use an approved workspace

- Internal documents
- Customer feedback
- Meeting notes
- Proprietary code
- Contracts and business plans
- Data covered by an employer, client, or platform policy

Remove unnecessary details, confirm the account and workspace controls, and limit connected sources.

### Red: do not paste into an unapproved tool

- Passwords, tokens, private keys, or recovery codes
- Government identity numbers
- Payment-card or bank details
- Protected health information
- Highly sensitive legal, personnel, or security material
- Another person's private data without permission

If a secret was exposed, treat it as compromised: revoke or rotate it rather than relying on chat deletion.

## Five controls that matter most

### 1. Minimize before upload

Send only the fields and excerpts needed for the task. Redaction is stronger when identifiers are replaced consistently—for example, `[CUSTOMER_A]`—instead of merely hidden visually in a document.

### 2. Separate secrets from prompts

Do not place credentials in prompts, examples, source files, screenshots, or retrieval indexes. Use a secrets manager and narrowly scoped runtime access where automation genuinely needs a credential.

### 3. Verify the full data path

A local model can reduce model-provider exposure, but the workflow may still send data through cloud storage, telemetry, web search, plugins, model-context servers, or remote APIs. Evaluate the whole path.

### 4. Apply least privilege to connectors

Grant an AI integration access only to the folders, repositories, mailboxes, or databases required for its job. Prefer read-only access when writes are unnecessary, and periodically remove stale connections.

### 5. Test outputs for leakage

Assume generated text can repeat or infer sensitive input. Before sharing an answer, search it for names, account numbers, credentials, confidential terms, and details belonging to other users or records.

## If sensitive data was already submitted

1. Stop sharing the conversation or generated output.
2. Revoke exposed credentials and tokens immediately.
3. Use the provider's deletion and privacy controls where available.
4. Notify the appropriate owner, security contact, or privacy lead.
5. Record what was exposed, where it went, who could access it, and what was rotated or deleted.
6. Preserve evidence if your incident process requires it; do not spread the sensitive content while documenting it.

Deletion can reduce exposure, but it is not a substitute for rotating a secret or following an incident-response process.

## Sources and further reading

- [NIST Privacy Framework](https://www.nist.gov/privacy-framework) — a voluntary framework for identifying and managing privacy risk.
- [OWASP LLM02:2025 — Sensitive Information Disclosure](https://genai.owasp.org/llmrisk/llm022025-sensitive-information-disclosure/) — risks and mitigations involving personal data, confidential information, credentials, access control, and sanitization.
- Review the AI tool's current privacy policy, retention terms, training controls, connector permissions, and account-specific settings before handling sensitive data.

## Scope

This is a practical risk-reduction checklist, not legal, compliance, or security advice. Requirements vary by jurisdiction, contract, industry, organization, account type, and product configuration.
