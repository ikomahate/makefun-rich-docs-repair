# Strategy decision

Research date: 18 November 2026. These comparisons were developed independently in this session, without reading competitors' submitted entries. The official kit's disclosed house descriptions were read as part of the rules. The chosen service and wording are original.

The binding constraint is acquiring a buyer and receiving usable money within 30 days while doing all fulfillment autonomously. A signup page is not evidence that a new AI operator can pass identity checks, open a bank account, get distribution or withdraw receipts. Existing buyer activity is useful; it does not establish demand for this particular offer.

| Approach | Buyer, acquisition and offer | Collection and fulfillment | Competition, constraints and 30-day assessment |
| --- | --- | --- | --- |
| Automated website audits and technical repairs | Small developer-tool businesses; identify a reproducible onboarding failure and offer a specific fix through permitted vendor enquiry channels. $199 per bounded repair. | Demo before payment, USDC from buyers already using it; deliver a patch and regression test. Public source and sandbox tests suffice. | Generic audits are commoditized. A broken quickstart tied to a current SDK release gives a narrower, provable problem. Selected: one to three sales is a planning scenario, zero is plausible. |
| Paid niche data product | Sell a $29 version-compatibility dataset to SDK vendors or agencies; show a sample in allowed niche discussions. | Collect USDC for a static CSV/JSON with source links and timestamps; update with code. | Buyers can often reconstruct it; trust, licensing and discovery are unresolved. A scenario of zero to five sales gives $0-$145 gross, with no basis to assume five. |
| Micro-SaaS or automated utility | $19/month quickstart monitor for developer teams; acquire via a free demonstrator and relevant opt-in communities. | Run periodic sandbox tests and notifications; direct USDC or an already-approved processor. | Existing CI and free broken-link checkers compete. Hosting, support and recurring billing consume the month. Zero to five first-month customers means $0-$95 gross; annual prepayment is not assumed. |
| Marketplace digital product | $19 tested migration guide/template pack for a narrow SDK version, listed on Gumroad with useful samples in permitted channels. | Automated download delivery is feasible. Processor onboarding and payout eligibility are unresolved. | No audience or marketplace ranking; content is easy to imitate. Zero to ten sales means $0-$190 gross before fees and holds, possibly no withdrawable day-30 cash. |
| Specialized marketplace automation service | $99 catalog/feed cleanup or format migration for merchants, offered via Fiverr or relevant paid requests. | Parse the supplied export, validate and return an import-ready file; no store login required. | Real buyer intent, but new-seller discovery, identity verification and withdrawal controls are substantial. Zero to three orders gives $0-$297 gross before fees; a fully autonomous new account cannot assume payout access. |

The ranges above are scenario bounds for comparison, not measured forecasts. They do not assert that all outcomes are equally likely. The service is preferred because one paid repair can cover the entire $25 cost cap and public tests demonstrate value before the buyer trusts an unknown agent.

## Selected offer

Sell one $199 SDK quickstart repair to an active Solana infrastructure business already comfortable with USDC. Find candidate businesses in the official Solana ecosystem directory, then check their own current docs and repositories for recent releases, a public license and a reproducible onboarding failure. Exclude speculative tokens, abandoned projects, security vulnerabilities, financial code and anything requiring private credentials. Do not assume every directory listing is a paying prospect.

On day one reproduce one failure, establish the expected behavior from current official documentation, implement a narrow fix in an isolated fork and produce a failing/passing regression test with a demo. Use free public artifact hosting permitted for this purpose. Do not publish another project's secrets or market through its issue tracker. A demo or partial diff can establish the fix without handing over the complete paid deliverable.

During days 2-26, qualify and send at most six individual offers daily, only where the business invites relevant vendor enquiries or has requested this help. Honor site rules, rate limits, jurisdictional requirements and opt-outs. A public email address alone is not permission. Identify the operation as AI, reference the exact failure and offer the fixed demo, clear scope, $199 price and refund terms. Do not invent urgency, sales losses, testimonials or test results. No paid ads, scraped mailing lists or mass DMs. Finding 150 suitable permitted opportunities is an assumption, not a fact.

Before undertaking the full job, agree on one acceptance test and confirm USDC payment suitability. Demonstrate passing behavior in a sandbox, send a Solana Pay transfer request with a unique reference and the correct USDC mint, verify the finalized transfer's amount, mint and recipient through RPC, then deliver the patch, test command and documentation within 48 hours. A screenshot or an unrelated transaction signature is not payment. Refund collected revenue if the agreed acceptance test fails; never treat a customer deposit for unfinished work as earned profit. The buyer performs ordinary purchase and acceptance decisions, not technical fulfillment or account setup for the agent.

The edge is a reusable version-specific failure/test corpus and a working fix for a costly onboarding break. A free link scanner alone does not prove that an SDK sample builds or behaves as documented. Referrals and repeat fixes are upside only; the base calculation assumes none.

## Cash model

Reserve $75 of the starting $100. Cap model API spending at $20 and network/operational fees at $5; use the existing computer, local tests and free hosting. Refund principal comes out of the corresponding customer receipt, not the $5 fee allocation. Spend only as needed, and stop paid tools after 50 offers without a sale while using feedback to narrow scope. Do not buy tokens or seek speculative returns.

With 150 qualified offers, assumed net paid conversion `p`, and the entire $25 budget spent, ending cash is `100 - 25 + 150 * p * 199`. A net paid conversion counts only fully delivered, collected, nonrefunded jobs by day 30. This model excludes unpaid invoices, platform balances, subscriptions due later and unsold assets.

| Assumed net paid conversion | Expected completed sales | Modeled ending cash |
| --- | ---: | ---: |
| 0% | 0 | $75.00 |
| 0.5% | 0.75 | $224.25 |
| 1% | 1.5 | $373.50 |
| 2% | 3 | $672.00 |

Fractional expected sales are averages in a model; actual sales are integers. With independent 1% purchase chances, the chance of no sale across 150 offers is about 22%; with 0.5%, about 47%. These probabilities depend on assumptions, not observed evidence. Qualified channels may be scarce, offers may be correlated and the market may produce zero sales. A 1% rate is a planning input, not an established expected outcome. If only 50 offers are available at that rate, the same full-cost model gives $174.50. The stop rule may lower both spend and sales. End selling by day 26, finish jobs and refunds before day 30, and report only spendable USDC at face value, subject to its ordinary stablecoin risk.

## Primary sources checked

- [Solana ecosystem directory](https://solana.com/ecosystem): an existing source of business candidates, not a list of committed buyers.
- [Solana Pay transfer specification](https://docs.solanapay.com/spec) and [official transfer request guide](https://solana.com/docs/tools/solana-pay/quickstart/transfer-requests): recipient, amount, SPL token mint and payment references support direct invoicing without assuming a bank processor account.
- [GitHub acceptable use policy](https://github.com/github/docs/blob/main/content/site-policy/acceptable-use-policies/github-acceptable-use-policies.md): advertising in others' accounts and bulk spam restrict monetized issue-post outreach.
- [Mintlify documentation linting](https://www.mintlify.com/library/documentation-linting): existing link checks limit the value of generic audits. The chosen offer adds executable behavior tests.
- [Gumroad getting paid](https://gumroad.com/help/article/13-getting-paid): payout methods and a minimum holding period mean recorded sales are not immediate cash.
- [Lemon Squeezy getting paid](https://docs.lemonsqueezy.com/help/getting-started/getting-paid): payout scheduling and minimums also matter for a new utility or product.
- [Stripe first-payout support](https://support.stripe.com/questions/my-payout-is-missing-changed-or-postponed): first payouts and verification can delay availability. The plan does not assume a newly verified Stripe account.
- [Fiverr identity verification](https://help.fiverr.com/hc/en-us/articles/13127850435345-Verify-your-identity) and [payment terms](https://www.fiverr.com/legal-portal/legal-terms/payment-terms-of-service): identity and clearance periods constrain autonomous marketplace selling.
- [Upwork automation policy](https://support.upwork.com/hc/en-us/articles/43342677368467-Use-bots-and-other-automation-properly) and [fixed-price payment process](https://support.upwork.com/hc/en-us/articles/211063718-How-payments-for-milestones-and-fixed-price-contracts-work): automated applications cannot be assumed permitted; review and security holds can extend beyond the cash deadline.
- [Superteam Earn for agents](https://superteam.fun/earn/agents/): its current agent workflow explicitly includes a human claimant, so it is excluded from the autonomous cash plan.

No paid judge calls, customer outreach, purchases or operating-business transactions were performed during this build. Selection is reasoned judgment under uncertainty; it is not proof this plan beats every alternative.
