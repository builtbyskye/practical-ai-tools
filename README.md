# Practical AI Tools Directory

> Find the AI workflow that fits your constraints — cost-aware, privacy-conscious, and current.

Most AI directories answer **“What exists?”** This project is designed to answer **“What should I use for this job, and what should I watch out for?”**

The launch edition contains a deliberately small set of established tools reviewed against official product, pricing, and privacy sources. Entries are not marked **hands-on tested** until a reproducible test card and evidence are added.

**Last source review:** 2026-08-27  
**Maintained by:** [Built by Skye](https://github.com/builtbyskye)

## Practical guides

- [Local & Edge AI Starter Stack](guides/local-edge-ai-starter-stack.md) — choose among Ollama, llama.cpp, ONNX Runtime, ExecuTorch, and MLX, with a note on where MCP fits.

## Start with the outcome

| I need to… | Start with | Consider instead when… |
|---|---|---|
| Draft, summarize, or analyze general material | [ChatGPT](#chatgpt) | Choose Claude for long-form document work; Perplexity when source discovery matters most. |
| Work through long documents or refine writing | [Claude](#claude) | Choose ChatGPT for a broader general-purpose toolset. |
| Research the web with visible citations | [Perplexity](#perplexity) | Use a primary search engine and original sources for high-stakes verification. |
| Add AI assistance inside a GitHub-centered coding workflow | [GitHub Copilot](#github-copilot) | Choose Cursor for an AI-first editor and multi-file agent workflows. |
| Make AI-assisted changes across a codebase | [Cursor](#cursor) | Choose Copilot when GitHub and an existing IDE are the center of the workflow. |
| Prototype and deploy from a browser | [Replit](#replit) | Use a local IDE when environment control and data locality matter more. |
| Create social and presentation graphics quickly | [Canva Magic Studio](#canva-magic-studio) | Choose Firefly for Adobe-centered creative workflows. |
| Generate or edit commercial creative assets | [Adobe Firefly](#adobe-firefly) | Choose Canva when layout, templates, and team publishing are the priority. |
| Edit podcasts or video through a transcript | [Descript](#descript) | Choose a full nonlinear editor for precise professional finishing. |
| Capture searchable meeting transcripts | [Otter](#otter) | Use your organization’s approved meeting platform when compliance controls dominate. |
| Connect mainstream business apps without much code | [Zapier](#zapier) | Choose n8n for self-hosting, code-level control, or more technical workflows. |
| Build flexible or self-hosted automations | [n8n](#n8n) | Choose Zapier when the fastest no-code setup and broad app coverage matter most. |

## Review labels

- **Source-reviewed** — product, pricing, and privacy claims checked against linked official sources.
- **Hands-on tested** — a reproducible test card, sample input/output, test date, and limitations are published.
- **Stale** — the entry has passed its scheduled review date or a material claim needs rechecking.

All launch entries are **source-reviewed**. That is intentionally different from claiming they were independently tested.

## Writing and research

### ChatGPT

- **Best for:** General drafting, summarization, document analysis, brainstorming, and conversational problem-solving.
- **Free access:** Yes, with limits; see [official pricing](https://chatgpt.com/pricing/).
- **Privacy checkpoint:** Consumer users should review Data Controls before entering sensitive material. OpenAI says Temporary Chats are not used to train models and are deleted after 30 days, subject to abuse monitoring. See [Data Controls FAQ](https://help.openai.com/en/articles/7730893-data-controls-faq).
- **Avoid if:** Your organization has not approved the workspace or data-handling terms for confidential information.
- **Status:** Source-reviewed · 2026-08-27

### Claude

- **Best for:** Long-form writing, editing, synthesis, document work, and analytical conversations.
- **Free access:** Yes; see [official pricing](https://claude.com/pricing).
- **Privacy checkpoint:** Consumer and commercial products have different model-improvement defaults and controls. Review Anthropic’s [consumer training notice](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training) and [commercial product notice](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training).
- **Avoid if:** Your workflow requires guarantees not covered by the plan and controls you are actually using.
- **Status:** Source-reviewed · 2026-08-27

### Perplexity

- **Best for:** Fast web research with links to supporting sources.
- **Free access:** Yes; paid plans add capabilities and higher limits. See [official plan information](https://www.perplexity.ai/pro).
- **Privacy checkpoint:** Review the current account data settings and the [Privacy Policy](https://www.perplexity.ai/hub/legal/privacy-policy) before uploading sensitive content.
- **Avoid if:** You will treat generated citations as proof without opening and checking the original sources.
- **Status:** Source-reviewed · 2026-08-27

## Coding

### GitHub Copilot

- **Best for:** Code completion, chat, explanation, reviews, and agent-assisted work in GitHub-centered development.
- **Free access:** A limited free plan is available; see [Copilot plans](https://github.com/features/copilot/plans).
- **Privacy checkpoint:** Inputs and outputs may include code and repository context. Check the controls for the account and organization that provide access; see GitHub’s [Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
- **Avoid if:** Repository policy prohibits sending code or context to the configured AI service.
- **Status:** Source-reviewed · 2026-08-27

### Cursor

- **Best for:** AI-first coding across an existing codebase, including multi-file edits and agent workflows.
- **Free access:** A limited free tier is available; see [official pricing](https://cursor.com/pricing).
- **Privacy checkpoint:** Privacy Mode materially changes data handling. Read [Data Use & Privacy](https://cursor.com/data-use) and [Security](https://cursor.com/security) before using sensitive code.
- **Avoid if:** Your organization requires a locally controlled editor or has not approved Cursor’s data path.
- **Status:** Source-reviewed · 2026-08-27

### Replit

- **Best for:** Browser-based prototyping, learning, collaborative coding, and deployment from one workspace.
- **Free access:** Replit publishes current plan details on its [pricing page](https://replit.com/pricing).
- **Privacy checkpoint:** Treat project visibility, secrets, deployments, and AI interactions as separate controls. Review the [Privacy Policy](https://replit.com/privacy-policy) before adding confidential code or data.
- **Avoid if:** You need complete local environment control, offline development, or tightly constrained data residency.
- **Status:** Source-reviewed · 2026-08-27

## Images, design, and media

### Canva Magic Studio

- **Best for:** Quickly producing social graphics, presentations, layouts, and template-based creative work.
- **Free access:** Canva publishes free and paid options on its [pricing page](https://www.canva.com/pricing/).
- **Privacy checkpoint:** Uploads, generated assets, team access, and connected apps can carry different risks. Review Canva’s [Privacy Policy](https://www.canva.com/policies/privacy-policy/).
- **Avoid if:** You need precise professional asset control or cannot use cloud-hosted design tools.
- **Status:** Source-reviewed · 2026-08-27

### Adobe Firefly

- **Best for:** Generative image and creative workflows within the Adobe ecosystem.
- **Free access:** Adobe lists current plans and generative-credit details on the [Firefly plans page](https://www.adobe.com/products/firefly/plans.html).
- **Privacy checkpoint:** Review Adobe’s [generative AI user guidelines](https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html) and plan-specific terms, especially for client assets and commercial work.
- **Avoid if:** Your required output rights, source restrictions, or enterprise controls are not clear for the selected plan.
- **Status:** Source-reviewed · 2026-08-27

### Descript

- **Best for:** Editing audio and video through a transcript, removing filler, and repurposing spoken content.
- **Free access:** A limited free plan is listed on [official pricing](https://www.descript.com/pricing).
- **Privacy checkpoint:** Recordings and transcripts can contain biometric, employee, customer, or confidential data. Review Descript’s [Privacy Policy](https://www.descript.com/privacy) and obtain recording consent where required.
- **Avoid if:** You need frame-level finishing that belongs in a full professional video or audio editor.
- **Status:** Source-reviewed · 2026-08-27

## Meetings and productivity

### Otter

- **Best for:** Meeting transcription, searchable notes, summaries, and follow-up capture.
- **Free access:** A limited free plan is listed on [official pricing](https://otter.ai/pricing).
- **Privacy checkpoint:** Meeting audio and transcripts may contain sensitive personal or business information. Review Otter’s [Privacy Policy](https://otter.ai/privacy-policy) and obtain appropriate participant consent.
- **Avoid if:** Your organization requires transcription to remain inside an already approved meeting or records platform.
- **Status:** Source-reviewed · 2026-08-27

## Automation

### Zapier

- **Best for:** Connecting mainstream business applications with accessible no-code automation.
- **Free access:** A limited free plan is listed on [official pricing](https://zapier.com/pricing).
- **Privacy checkpoint:** Every automation can move data between several processors. Review app permissions, minimize fields, and check Zapier’s [Privacy Policy](https://zapier.com/privacy) before handling sensitive records.
- **Avoid if:** You need self-hosting, deep execution control, or predictable costs at high task volume.
- **Status:** Source-reviewed · 2026-08-27

### n8n

- **Best for:** Flexible technical workflows, code steps, and self-hosted automation.
- **Free access:** The self-hosted Community Edition is available; cloud plans are listed on [official pricing](https://n8n.io/pricing/).
- **Privacy checkpoint:** Self-hosting gives control but also makes the operator responsible for security, credentials, updates, backups, and logs. Review the [Privacy Policy](https://n8n.io/legal/#privacy) and [security documentation](https://docs.n8n.io/hosting/securing/overview/).
- **Avoid if:** Nobody can responsibly operate the infrastructure and credential lifecycle.
- **Status:** Source-reviewed · 2026-08-27

## Selection rules

A listed tool should:

1. Solve a recognizable job rather than exist only as a technical demo.
2. Have accessible official product and policy documentation.
3. Include a practical privacy or operational caution.
4. Avoid affiliate ranking and undisclosed sponsorship.
5. Be reviewed on a visible date and marked stale when claims age.

See [METHODOLOGY.md](METHODOLOGY.md) for scoring and review details.

## What is not here

- Exhaustive lists of every AI product
- Paid placement disguised as editorial ranking
- Vendor claims presented as independent test results
- Tools with no accessible documentation or unclear ownership
- Instructions to upload confidential information without an approved data path

## Contributing

Corrections, new outcome cards, and reproducible test cards are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Independence

This project currently uses no affiliate links and accepts no paid placement. If that changes, commercial relationships will be labeled separately from editorial content.

## License

Repository content is available under the [MIT License](LICENSE).
