import type { October13Blog } from './october13-blog';

export const october27Blogs: October13Blog[] = [
{
  "slug": "month-end-close-checklist-versioning-oct27",
  "title": "Version the Month-End Close Checklist Before It Drifts",
  "excerpt": "A checklist that changes silently cannot be audited. Name the owner, log every edit, and freeze a version before each close.",
  "readingMinutes": 7,
  "sections": [
    {
      "heading": "Why the checklist needs a version",
      "paragraphs": [
        "Most close checklists are edited continuously and never identified. A task is added after a missed accrual, another is removed when a preparer leaves, and by the next quarter nobody can say which steps were required in which period. When a reviewer asks why a step was skipped, the team can only point to the current file.",
        "A version identifier fixes that. It does not require a document management system. A short code such as CL-2026-10-v3, an effective date, an owner, and a change log beside the checklist are enough to make the close record reproducible. The identifier belongs on the close package and in the task tool."
      ]
    },
    {
      "heading": "Name the owner and the change log",
      "paragraphs": [
        "The controller owns the checklist, even when a senior accountant maintains it. The maintainer proposes changes; the controller approves them. Record the requester, the reason, the affected task, the effective close period, and the approver for every edit.",
        "Keep the log in the same file or folder as the checklist so the two cannot separate. A change requested during close should take effect in the next period unless it corrects a missing control that affects the current close. That exception needs the controller's written approval and a note in the current package."
      ]
    },
    {
      "heading": "Separate structural changes from period notes",
      "paragraphs": [
        "Structural changes alter who does what, when a task is due, or what evidence is required. Period notes explain a one-time exception, such as a bank that delivered statements late. Mixing the two turns the checklist into a diary and makes the standard impossible to reconstruct.",
        "Keep a standing checklist with stable task IDs and a separate period memo for exceptions. The memo references the task ID and the version. At the next close, the exception is either resolved or promoted into a structural change with its own approval."
      ]
    },
    {
      "heading": "Freeze the version before close",
      "paragraphs": [
        "Freeze the checklist at the start of the close, once the period is closed for routine entries. After the freeze, record additions as exceptions rather than editing the standard. This prevents a task from appearing complete because it was added after the fact and immediately checked.",
        "Export a read-only copy of the frozen checklist into the close package. The export should show the version, the effective date, the task list, and the owner for each task. If the task tool supports snapshots, keep the snapshot ID beside the export."
      ]
    },
    {
      "heading": "Test a change on one entity",
      "paragraphs": [
        "When a new task is proposed, pilot it on one entity or one account group for a full close. Compare the time required, the evidence produced, and the exceptions found. A task that adds fifteen minutes and no reviewable evidence is probably not a control.",
        "Record the pilot result in the change log. If the task is adopted, state the revised due date and the reviewer. If it is rejected, keep the note so the same request is not reopened every quarter without context."
      ]
    },
    {
      "heading": "Roll back without losing evidence",
      "paragraphs": [
        "Sometimes a new step creates more work than it prevents. Roll back through a new version rather than deleting the change. The rollback entry names the version being replaced, the reason, and the date. Prior close packages continue to reference the version that was in force.",
        "Do not overwrite the archived checklist. If storage is limited, keep a PDF export and the change log; those two files answer most review questions. Deleting the prior version makes it impossible to show what the team was required to do at the time."
      ]
    },
    {
      "heading": "Review versions at quarter end",
      "paragraphs": [
        "At quarter end, count how many versions were issued, how many changes were structural, and how many exceptions were recorded. A high number of mid-close exceptions points to an unstable upstream process, not necessarily to a careless team.",
        "Review the pattern with the accounting owner and the audit liaison. Keep the decision record with the checklist archive. The goal is a checklist that changes deliberately, not one that never changes."
      ]
    }
  ],
  "checklist": [
    "Assign a checklist owner and a maintainer",
    "Record requester, reason, task, period, and approver for every edit",
    "Freeze a version at the start of each close",
    "Export the frozen checklist with its identifier",
    "Pilot structural changes on one entity",
    "Review version churn at quarter end"
  ],
  "related": [
    "journal-entry-documentation-standard-oct27",
    "close-handoff-during-controller-leave-oct27",
    "flux-analysis-variance-commentary-oct27"
  ],
  "category": "Close operations",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/month-end-close-checklist-versioning-oct27.svg"
},
{
  "slug": "bank-reconciliation-exception-aging-oct27",
  "title": "Age Bank Reconciliation Exceptions From the Statement Date",
  "excerpt": "A daily aging routine with six reason codes, threshold escalation, and a reviewer sign-off that separates timing differences from unknown items.",
  "readingMinutes": 7,
  "sections": [
    {
      "heading": "Define an exception, not a difference",
      "paragraphs": [
        "A difference is any mismatch between the bank statement and the ledger. An exception is a difference that requires a person to investigate, decide, or obtain evidence. Treating every timing difference as an exception overwhelms the queue; treating every exception as a timing difference hides the real breaks.",
        "Write the distinction into the reconciliation procedure. Outstanding checks and deposits in transit are expected timing items with a documented life. Unknown withdrawals, duplicate postings, and unapplied receipts are exceptions. The reviewer should be able to classify each line without asking the preparer."
      ]
    },
    {
      "heading": "Age from the statement date",
      "paragraphs": [
        "Age each exception from the bank statement date, not from the date someone noticed it. A item that has been visible for three closes is old even if it was assigned yesterday. Use the statement period end as the anchor so every account is measured on the same basis.",
        "Store the aging bucket on the reconciliation: current, 1 to 30 days, 31 to 60 days, and over 60 days. The bucket should recalculate when the statement advances. A manual bucket that stays current because nobody updated it is worse than no bucket at all."
      ]
    },
    {
      "heading": "Use six reason codes",
      "paragraphs": [
        "Adopt a small, stable set of codes: unrecorded bank fee, unapplied receipt, duplicate ledger posting, missing ledger entry, unidentified deposit, and bank error. Add a seventh code for items under investigation with no known cause. Each code maps to a different owner and a different evidence requirement.",
        "Do not create a new code for every vendor or every month. A long code list fragments the reporting and makes trend analysis impossible. If a genuinely new pattern appears, add the code with an effective date and reclassify prior items only when the evidence supports it."
      ]
    },
    {
      "heading": "Run a daily fifteen-minute huddle",
      "paragraphs": [
        "The reconciliation preparer and the accounting lead review the open exception list for fifteen minutes each business day. They confirm new items, update owners, and escalate anything that crossed a threshold since the previous day. The huddle is not a status meeting for every account.",
        "Keep the agenda fixed: new exceptions, items over 30 days, items waiting on an external party, and items requiring a journal entry. Record decisions in the reconciliation note rather than in chat. A decision that lives only in a meeting disappears when the preparer is out."
      ]
    },
    {
      "heading": "Escalate at defined thresholds",
      "paragraphs": [
        "Set thresholds in advance: any item over 60 days, any unidentified deposit above a stated amount, and any duplicate posting above a stated amount goes to the controller with a written summary. The summary states the amount, the account, the dates, the evidence gathered, and the decision required.",
        "Do not let the threshold become a reason to wait. If an item is material in combination with others, escalate on the aggregate even when each individual item is below the limit. The controller decides the accounting treatment; the preparer supplies the evidence and the question."
      ]
    },
    {
      "heading": "Separate timing differences from unknown items",
      "paragraphs": [
        "Timing differences have a documented expected clearance date. Unknown items do not. Report them in separate columns so the aging table does not imply that an unidentified withdrawal will clear on its own. The reviewer should see the unknown column first.",
        "When a timing item passes its expected clearance date, convert it to an exception and assign a new owner. The conversion is a status change with a date, not a quiet relabel. That record is what makes the aging trend meaningful across periods."
      ]
    },
    {
      "heading": "Close with reviewer sign-off",
      "paragraphs": [
        "The preparer signs off that the reconciliation ties to the bank statement and the general ledger. The reviewer signs off that the exceptions are classified, the material items are escalated, and the support is attached. Two signatures, two dates, and a link to the evidence.",
        "Retain the reconciliation, the bank statement, the open exception list, and the escalation notes for the period. At the next close, compare the opening exception list with the prior closing list. Items that disappear without evidence should be treated as a control finding, not a clean-up."
      ]
    }
  ],
  "checklist": [
    "Separate expected timing items from true exceptions",
    "Age every exception from the statement period end",
    "Use a short, stable reason-code list",
    "Hold a daily exception huddle",
    "Escalate at written age and amount thresholds",
    "Require preparer and reviewer sign-off with dates"
  ],
  "related": [
    "ap-aging-review-cadence-oct27",
    "journal-entry-documentation-standard-oct27",
    "close-handoff-during-controller-leave-oct27"
  ],
  "category": "Reconciliation",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/bank-reconciliation-exception-aging-oct27.svg"
},
{
  "slug": "accrued-expense-support-packet-oct27",
  "title": "Build an Accrued Expense Support Packet a Reviewer Can Rebuild",
  "excerpt": "What an accrual packet must contain: the driver, the calculation, the source, the reversal rule, and the boundary between preparation and judgment.",
  "readingMinutes": 7,
  "sections": [
    {
      "heading": "What the packet must prove",
      "paragraphs": [
        "An accrued expense packet has one job: let a reviewer rebuild the amount from a source without calling the preparer. It should show what was received, what was not yet invoiced, how the estimate was derived, and when the accrual is expected to reverse.",
        "The packet is not a justification written after the entry. It is the evidence assembled before the entry is posted. If the support arrives after the close, the entry should be marked as supported late and reviewed accordingly rather than backdated into the package."
      ]
    },
    {
      "heading": "Require seven fields",
      "paragraphs": [
        "Every accrual packet needs the vendor or service, the period, the general ledger account, the amount, the calculation driver, the source reference, and the preparer with the date. Add the reversal period and the reviewer for entries above the defined threshold.",
        "Use the same fields for recurring and one-time accruals. Recurring entries may reference a standing template, but they still need the current period's driver. A template amount copied forward without a new driver is an unsupported estimate, even if it was right last month."
      ]
    },
    {
      "heading": "Show the calculation and its driver",
      "paragraphs": [
        "For a utility accrual, the driver may be the prior month's usage with a documented rate change. For a professional services accrual, it may be the signed statement of work and the hours confirmed by the service owner. Write the formula in the packet, not only in a spreadsheet cell.",
        "Attach the source that supplies the driver: the usage report, the vendor statement, the timesheet summary, or the contract. Highlight the line used. If the source is a conversation, record the date, the person, and the specific number they confirmed, and mark it as lower-quality evidence."
      ]
    },
    {
      "heading": "Handle estimates and reversals",
      "paragraphs": [
        "State whether the amount is an estimate and what would make it change. If the invoice arrives in the next period, the reversal rule determines whether the accrual is reversed in full or trued up. Write the rule before the entry so the next preparer applies the same treatment.",
        "Track the reversal in the same packet. When the actual invoice posts, compare it with the accrual and record the difference. A recurring pattern of large true-ups suggests the driver or the timing rule needs revision, not that the preparer should estimate more aggressively."
      ]
    },
    {
      "heading": "Route judgment to the controller",
      "paragraphs": [
        "The preparer may assemble the source, calculate the amount, and document the assumption. The controller decides whether the expense is probable, whether the amount is material, and whether the period is correct. The packet should make that decision easy, not make it on the controller's behalf.",
        "If the evidence supports two treatments, present both with the facts and the question. Do not choose the treatment that closes the task fastest. A recorded open question with an owner and a due date is a valid close item; an invented conclusion is not."
      ]
    },
    {
      "heading": "Sample five packets at close",
      "paragraphs": [
        "At each close, the reviewer samples five accrual packets across vendors, amounts, and preparers. Check that the driver ties to the source, the calculation reproduces, the reversal rule is stated, and the approval is present. Record the exceptions and the time required to rebuild each amount.",
        "A packet that takes more than ten minutes to rebuild is a candidate for a template change. The sample is not a performance ranking. It is a test of whether the documentation standard works for someone who did not prepare the entry."
      ]
    },
    {
      "heading": "Retain the packet with the entry",
      "paragraphs": [
        "Link the packet to the journal entry in the accounting system or the close folder. Retain it for the period required by the organization's record policy. A packet stored in a personal drive is not available to the reviewer, the auditor, or the successor.",
        "At quarter end, review the accrual accounts for packets that were never linked. Missing links are a documentation finding even when the amount was correct. Fix the link before the next close and note the cause if the system does not support attachments."
      ]
    }
  ],
  "checklist": [
    "Assemble support before posting the entry",
    "Use the same seven fields for recurring and one-time accruals",
    "Write the calculation and attach the driver",
    "State the reversal rule and track the true-up",
    "Keep accounting judgment with the controller",
    "Sample five packets each close and retain the links"
  ],
  "related": [
    "journal-entry-documentation-standard-oct27",
    "prepaid-amortization-schedule-review-oct27",
    "flux-analysis-variance-commentary-oct27"
  ],
  "category": "Accruals",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/accrued-expense-support-packet-oct27.svg"
},
{
  "slug": "revenue-cutoff-request-log-oct27",
  "title": "Keep a Revenue Cutoff Request Log Without Making the Call",
  "excerpt": "Cutoff support is an evidence request. Log what was asked, what arrived, what conflicts, and route revenue conclusions to the client owner.",
  "readingMinutes": 7,
  "sections": [
    {
      "heading": "Cutoff is an evidence request, not a conclusion",
      "paragraphs": [
        "The outsourced team can request shipment, delivery, service, and acceptance evidence for transactions near period end. It cannot decide whether revenue should be recognized. That conclusion belongs to the client's authorized accounting owner and depends on the contract, the performance obligation, and the applicable standard.",
        "Write that boundary into the request template. The request asks for facts and documents. The log records what arrived and what is missing. The conclusion field stays with the client reviewer, with a date and a reference to the evidence."
      ]
    },
    {
      "heading": "Send the request on a fixed day",
      "paragraphs": [
        "Send the cutoff request on the same business day each month, with a response deadline that allows review before the close cutoff. Include the transaction population, the date range, the evidence required, and the name of the person who should respond.",
        "Use one request per business process rather than one per transaction. A sales operations contact can provide shipment and delivery evidence for a population; a services lead can confirm completion dates. A single long email to a general inbox is the most common reason cutoff evidence arrives late."
      ]
    },
    {
      "heading": "Capture shipment, service, and acceptance evidence",
      "paragraphs": [
        "For goods, the useful evidence is the shipment date, the carrier record, and the delivery confirmation. For services, it is the completed milestone, the timesheet or service log, and the client acceptance. For both, record the transaction identifier that links the evidence to the ledger entry.",
        "Do not accept a summary spreadsheet without the underlying records for the sampled items. The summary can define the population; the source documents support the individual transaction. Keep both, and note which items were tested against source."
      ]
    },
    {
      "heading": "Track responses by counterparty",
      "paragraphs": [
        "The log should show the counterparty, the request date, the due date, the response date, the evidence received, and the open question. A simple status of received, partial, or missing is enough. Add the reviewer who assessed completeness.",
        "Report response rates by counterparty each close. A team that consistently responds late is a process risk, not a personal failing. Escalate through the client relationship owner and record the escalation date rather than resending the same request."
      ]
    },
    {
      "heading": "Flag late or conflicting evidence",
      "paragraphs": [
        "Late evidence is a close item with a date and an owner. Conflicting evidence needs both records preserved: the shipment log and the carrier record, or the service confirmation and the invoice. Do not overwrite one with the other to produce a clean file.",
        "Route the conflict to the client accounting owner with the facts and the specific question. If the evidence arrives after the close, record that the transaction was reviewed late and whether the client adjusted. The log is evidence of the process, including its gaps."
      ]
    },
    {
      "heading": "Keep revenue judgments with the client",
      "paragraphs": [
        "The outsourced preparer may compare the evidence with the recorded amount and note a discrepancy. The client owner decides whether the timing is correct, whether an adjustment is required, and how to disclose it. The working paper should show the question, not a pre-decided answer.",
        "If the client asks the outsourced team to apply a treatment, record the instruction, the date, and the person who gave it. That record protects both parties and makes the judgment trail visible to the auditor. An instruction without a name is not an approval."
      ]
    },
    {
      "heading": "Reconcile the log at close",
      "paragraphs": [
        "At the close cutoff, count requests sent, responses received, items still missing, and items escalated. Reconcile the transaction population in the log with the population used for the cutoff review. A gap between the two means some transactions were never requested.",
        "Keep the log with the close package and review it at the next close. Repeated missing items from one process should change the request design or the timing, not just the reminder message."
      ]
    }
  ],
  "checklist": [
    "Separate evidence requests from revenue conclusions",
    "Send requests on a fixed calendar with a response deadline",
    "Use transaction identifiers to link evidence to entries",
    "Track response status by counterparty",
    "Preserve conflicting evidence and route the question",
    "Reconcile the request population at close"
  ],
  "related": [
    "audit-pbc-request-tracker-oct27",
    "accrued-expense-support-packet-oct27",
    "journal-entry-documentation-standard-oct27"
  ],
  "category": "Revenue support",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/revenue-cutoff-request-log-oct27.svg"
},
{
  "slug": "prepaid-amortization-schedule-review-oct27",
  "title": "Tie the Prepaid Amortization Schedule to the Close",
  "excerpt": "Opening balance, additions, amortization convention, and rollforward: the four checks that keep prepaids from drifting between periods.",
  "readingMinutes": 6,
  "sections": [
    {
      "heading": "Tie the opening balance to the prior close",
      "paragraphs": [
        "Start the prepaid review by agreeing the opening balance to the prior period's closing rollforward, not to a fresh export. The prior close is the controlled record. If the export differs, identify the transactions that moved and record the reason before adjusting anything.",
        "Keep the prior rollforward and the current export side by side. A variance caused by a late invoice from the prior period is different from a variance caused by a manual journal entry. Label the cause and attach the entry reference."
      ]
    },
    {
      "heading": "Additions need an invoice and a start date",
      "paragraphs": [
        "Every addition should have a source invoice, a vendor, a service period, a total amount, and an amortization start date. The start date is the field most often missing, and it determines how much expense belongs in the current period.",
        "If the service period spans multiple months, record the allocation. If the invoice covers a period that has already begun, calculate the catch-up amortization and route it for review. Do not spread the entire amount evenly from the invoice date when the service started earlier."
      ]
    },
    {
      "heading": "Confirm the amortization convention",
      "paragraphs": [
        "Document whether the schedule uses daily, monthly, or a fixed half-month convention. Apply the same convention to every prepaid in the population unless a contract requires otherwise. A mixed convention makes the rollforward impossible to tie without a manual reconciliation.",
        "Test the convention on one item with a known start and end date. Recalculate the current-period expense independently and compare it with the schedule. If the difference is a rounding rule, document it; if it is a date error, correct the schedule and note the change."
      ]
    },
    {
      "heading": "Handle mid-period additions and cancellations",
      "paragraphs": [
        "A prepaid added mid-period needs a partial-period calculation. A cancelled service needs the remaining unamortized balance identified and routed to the controller for the appropriate treatment. Do not leave a cancelled item amortizing because the schedule was never updated.",
        "Record the cancellation date, the refund or credit expected, and the reviewer. If the refund arrives in a later period, keep the receivable or credit visible in the rollforward rather than netting it silently against a new invoice."
      ]
    },
    {
      "heading": "Review the rollforward, not just the ending balance",
      "paragraphs": [
        "The rollforward should show opening balance, additions, amortization, disposals or write-offs, and ending balance. Each movement should tie to a source or a journal entry. An ending balance that agrees while the movements do not is a coincidence, not a reconciliation.",
        "Compare the current-period amortization with the prior period and explain material changes. A new software subscription or a renegotiated contract may explain the movement; a change in the convention needs approval and disclosure in the workpaper."
      ]
    },
    {
      "heading": "Investigate negative or zero balances",
      "paragraphs": [
        "A negative prepaid balance usually means the item was amortized past its service period or an invoice was recorded in the wrong account. A zero balance on an active contract means the schedule stopped early. Both are exceptions with an owner and a date.",
        "Clear the exception before the close is signed off, or record why it remains open and who will resolve it. An unexplained negative balance carried into the next period compounds the error and makes the rollforward harder to defend."
      ]
    },
    {
      "heading": "Version the schedule and retain the support",
      "paragraphs": [
        "Save the schedule with a period identifier and a version, and link the source invoices. If the schedule is maintained in a shared workbook, protect the prior-period tab and add a new tab for the current close rather than overwriting history.",
        "At quarter end, sample three prepaids from the rollforward and rebuild the amortization from the invoice. Keep the sample with the close package. The test confirms that the schedule, not just the total, is reproducible."
      ]
    }
  ],
  "checklist": [
    "Tie the opening balance to the prior close",
    "Require an invoice and start date for every addition",
    "Apply one documented amortization convention",
    "Recalculate mid-period additions and cancellations",
    "Review the full rollforward, not only the ending balance",
    "Clear or document negative and zero balances"
  ],
  "related": [
    "accrued-expense-support-packet-oct27",
    "fixed-asset-rollforward-tieout-oct27",
    "flux-analysis-variance-commentary-oct27"
  ],
  "category": "Accruals",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/prepaid-amortization-schedule-review-oct27.svg"
},
{
  "slug": "fixed-asset-rollforward-tieout-oct27",
  "title": "Tie the Fixed Asset Rollforward to the Register and the Ledger",
  "excerpt": "Additions, disposals, transfers, and depreciation: a rollforward routine that explains every movement between two closes.",
  "readingMinutes": 7,
  "sections": [
    {
      "heading": "Build the rollforward from the register",
      "paragraphs": [
        "Start with the fixed asset register, not the general ledger summary. The register holds the asset-level detail: cost, accumulated depreciation, in-service date, location, and disposal status. The rollforward aggregates that detail into the movements the ledger should show.",
        "Use the same asset population for both periods. If the register was replaced or migrated during the period, reconcile the old and new identifiers before building the rollforward. A migration that loses the link between an asset and its accumulated depreciation creates a variance that no amount of grouping will explain."
      ]
    },
    {
      "heading": "Reconcile additions to AP and CIP",
      "paragraphs": [
        "Every addition should trace to an accounts payable invoice, a construction-in-progress transfer, or a capital lease entry. Match the amount, the vendor, the in-service date, and the asset class. Record the source reference beside the addition.",
        "Additions that sit in CIP need a completion date and an approval before transfer. A project that remains in CIP indefinitely may be complete, abandoned, or waiting on documentation. Route the question to the project owner and record the response rather than transferring on assumption."
      ]
    },
    {
      "heading": "Disposals need approval and gain or loss support",
      "paragraphs": [
        "A disposal requires the asset identifier, the disposal date, the proceeds, the net book value, and the approval. Calculate the gain or loss and attach the support for the proceeds, such as a sale invoice or a scrap receipt.",
        "Remove the asset from the active register and show the removal in the rollforward. Do not leave a disposed asset in the depreciation run because the status was not updated. That error produces depreciation expense for an asset that no longer exists and a disposal variance that is hard to trace."
      ]
    },
    {
      "heading": "Check transfers between categories",
      "paragraphs": [
        "Transfers move cost and accumulated depreciation between asset classes, locations, or entities. Each transfer needs a reason, the old and new category, and the approval. The total cost should not change, and the accumulated depreciation should move with the asset.",
        "Test a sample of transfers for the depreciation convention of the new category. A transfer from a five-year class to a seven-year class changes the remaining life and the current-period expense. Record the change and the reviewer."
      ]
    },
    {
      "heading": "Tie depreciation to the general ledger",
      "paragraphs": [
        "Run the depreciation calculation from the register and compare the total with the general ledger expense. If they differ, break the difference into new assets, disposed assets, transfers, and convention changes. A single unexplained difference is not acceptable in a controlled close.",
        "Check that assets placed in service during the period follow the documented convention. A full-month convention for an asset added on the last day may be correct under policy, but the reviewer should be able to see the rule rather than infer it from the number."
      ]
    },
    {
      "heading": "Explain every rollforward variance",
      "paragraphs": [
        "Prepare a variance table for each rollforward line: opening balance, additions, disposals, transfers, depreciation, and ending balance. Investigate any movement that does not trace to a register transaction or a journal entry. Write the explanation beside the line.",
        "A clean rollforward ties at the total and explains the material movements. A rollforward that ties only because a plug entry was posted is not clean. If a plug is required, label it as an unresolved difference and route it to the controller."
      ]
    },
    {
      "heading": "Sign off with the asset owner",
      "paragraphs": [
        "The preparer signs that the register, rollforward, and ledger agree. The controller or asset owner signs that the additions, disposals, and transfers are supported and that open items have owners. Record the date of each sign-off.",
        "Retain the register extract, the rollforward, the depreciation run, the disposal approvals, and the variance explanations with the close package. At the next close, use the same file structure so a reviewer can compare periods without rebuilding the format."
      ]
    }
  ],
  "checklist": [
    "Build the rollforward from asset-level register detail",
    "Trace additions to AP, CIP, or lease support",
    "Require approval and proceeds support for disposals",
    "Test transfers for category and depreciation changes",
    "Reconcile depreciation to the general ledger",
    "Explain each rollforward variance beside the line"
  ],
  "related": [
    "prepaid-amortization-schedule-review-oct27",
    "journal-entry-documentation-standard-oct27",
    "audit-pbc-request-tracker-oct27"
  ],
  "category": "Fixed assets",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/fixed-asset-rollforward-tieout-oct27.svg"
},
{
  "slug": "intercompany-confirmation-response-log-oct27",
  "title": "Track Intercompany Confirmation Responses, Not Just Requests",
  "excerpt": "A response log with counterparties, balances, mismatch codes, and consolidation routing that makes the elimination review reproducible.",
  "readingMinutes": 6,
  "sections": [
    {
      "heading": "List the counterparties and the balances",
      "paragraphs": [
        "Start with the intercompany account balances by counterparty and entity for the period. The list should include the account, the currency, the amount, and the contact who will confirm it. Reconcile the list to the trial balance before sending anything.",
        "Include zero-balance counterparties when there was activity during the period. A zero ending balance can still hide a timing difference or a misposted transaction. The confirmation request should state the period and the amount the sender expects the counterparty to confirm."
      ]
    },
    {
      "heading": "Send on a fixed calendar",
      "paragraphs": [
        "Send confirmations on the same business day each close, with a response deadline that allows time for mismatch resolution. Use a standard template that states the balance, the period, the currency, and the response instructions. Track the send date and the due date.",
        "Send to a named contact, not a general inbox. If the contact has changed, update the list before the next close. A confirmation sent to an unmonitored inbox is not evidence of a request; it is evidence of a process gap."
      ]
    },
    {
      "heading": "Record the response, not just the receipt",
      "paragraphs": [
        "A response is usable only when it states agreement or disagreement with the balance and identifies the responder. Record the response date, the confirmed amount, the responder name, and whether the response was written or verbal. A verbal confirmation needs a follow-up email summary.",
        "Do not mark the item complete because the counterparty replied. The reply must be compared with the sender's balance. A response that agrees with a different amount is a mismatch, not a confirmation."
      ]
    },
    {
      "heading": "Classify mismatches with a short code list",
      "paragraphs": [
        "Use codes such as timing difference, currency translation, missing invoice, duplicate posting, wrong entity, and unresolved. Each code maps to a resolution owner and an expected evidence type. Record the code on the log and in the working paper.",
        "Keep both the sender's and the counterparty's amounts when they differ. Do not adjust one side to match the other before the cause is known. The mismatch is the evidence; overwriting it destroys the audit trail."
      ]
    },
    {
      "heading": "Route to the consolidation owner",
      "paragraphs": [
        "The consolidation owner decides whether a mismatch requires an adjustment, a reclassification, or a disclosure. The outsourced team supplies the log, the evidence, and the open questions. It does not eliminate the balance on its own authority.",
        "For material or aged mismatches, include the history: when the difference first appeared, what was tried, and who owns the next step. A mismatch that has been carried for three closes needs a decision, not another reminder."
      ]
    },
    {
      "heading": "Retain the confirmation evidence",
      "paragraphs": [
        "Store the sent request, the response, and the resolution note with the consolidation working paper. If the response arrived by email, keep the message headers or a PDF export. If it arrived through a portal, keep the download and the timestamp.",
        "At quarter end, report the response rate by counterparty and the share of mismatches resolved before the consolidation deadline. A high response rate with unresolved mismatches is not a successful process; report both measures together."
      ]
    },
    {
      "heading": "Review the contact list each quarter",
      "paragraphs": [
        "Confirm that each counterparty contact is still in role and still authorized to confirm balances. Update the list and record the change. A stale contact list is the most common reason a confirmation cycle starts late.",
        "Share the response-rate trend with the accounting owner. Persistent non-response from one counterparty should be escalated through the relationship owner rather than absorbed by the team as extra work."
      ]
    }
  ],
  "checklist": [
    "Reconcile the counterparty list to the trial balance",
    "Send confirmations on a fixed close calendar",
    "Record the confirmed amount and the responder",
    "Classify mismatches and preserve both amounts",
    "Route elimination decisions to the consolidation owner",
    "Report response rates and resolution together"
  ],
  "related": [
    "close-handoff-during-controller-leave-oct27",
    "journal-entry-documentation-standard-oct27",
    "audit-pbc-request-tracker-oct27"
  ],
  "category": "Intercompany",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/intercompany-confirmation-response-log-oct27.svg"
},
{
  "slug": "ap-aging-review-cadence-oct27",
  "title": "Run the AP Aging Review Weekly, Not Only at Close",
  "excerpt": "Buckets, duplicates, disputed invoices, and vendor ownership: a weekly review that prevents the close-week scramble.",
  "readingMinutes": 6,
  "sections": [
    {
      "heading": "Weekly, not only at close",
      "paragraphs": [
        "An AP aging review performed only at month end is a reporting exercise, not a control. By the time the aging is reviewed, the duplicate invoice has aged thirty days and the vendor has already called. A weekly fifteen-minute review catches exceptions while they are still cheap to resolve.",
        "Put the review on the same day each week and use the same export logic. The goal is not to clear every item; it is to make sure every item has an owner, a status, and a next date. The close then starts from a known list rather than a fresh investigation."
      ]
    },
    {
      "heading": "Define the buckets and the population",
      "paragraphs": [
        "Use standard buckets: current, 1 to 30 days, 31 to 60 days, 61 to 90 days, and over 90 days. State whether the aging is based on invoice date or due date, and apply the same basis every week. A changing basis makes the trend meaningless.",
        "Include credits, debit memos, and disputed invoices in the population. An aging report that shows only unpaid invoices hides the credits that should offset them and the disputes that explain the delay. Report the net position and the gross components."
      ]
    },
    {
      "heading": "Flag duplicates and disputed invoices",
      "paragraphs": [
        "Run a duplicate check on vendor, invoice number, amount, and date before the review. Flag exact matches and near matches for human review. Do not auto-void a suspected duplicate without confirming with the business owner, because a partial shipment or a recurring charge can look identical.",
        "Mark disputed invoices with a reason code and the person resolving the dispute. Keep them in the aging but exclude them from the payment-timing measure if that is the organization's policy. State the exclusion in the report so the reader is not comparing two different populations."
      ]
    },
    {
      "heading": "Assign owners by vendor",
      "paragraphs": [
        "Every vendor above a defined exposure threshold needs a named owner in the business, not only an AP clerk. The owner confirms whether the goods or services were received, whether the invoice is accurate, and whether payment can proceed. AP coordinates the evidence and the payment.",
        "For vendors below the threshold, assign ownership by category or by AP preparer. Record the owner on the aging line so the weekly review can route the question without a separate lookup. Unowned lines are the ones that age the longest."
      ]
    },
    {
      "heading": "Review the top vendors by exposure",
      "paragraphs": [
        "Sort the aging by outstanding amount and review the top ten vendors, even when their invoices are current. A large current balance can still hide a missing credit or a payment scheduled to the wrong entity. Exposure matters as much as age.",
        "For each top vendor, confirm the payment date, the discount window, and any hold. Record the confirmation in the review notes. If a payment is intentionally delayed, state the reason and the approving owner rather than leaving the line to look overdue."
      ]
    },
    {
      "heading": "Separate payment timing from accuracy",
      "paragraphs": [
        "An invoice can be old because it is unpaid, because it is disputed, or because it was never entered. Those are different problems. Report payment timing, dispute status, and missing entries as separate counts so the team does not treat every aged item as a payment issue.",
        "If the organization measures days payable outstanding, make sure the measure uses a consistent population and excludes disputed items only when the policy says so. A DPO target that rewards delaying valid payments creates vendor risk and is not a control objective."
      ]
    },
    {
      "heading": "Follow up on stale credits",
      "paragraphs": [
        "Credits older than 60 days need an owner and a plan: apply to an open invoice, request a refund, or write off with approval. A credit that sits indefinitely overstates liabilities and distorts the aging. Review the credit balance alongside the invoice balance.",
        "At close, reconcile the AP aging total to the general ledger and explain material movements from the prior week. Keep the weekly review notes with the close package so the reviewer can see how the exceptions were handled."
      ]
    }
  ],
  "checklist": [
    "Hold the review weekly on a fixed day",
    "Use a consistent aging basis and define the population",
    "Check for duplicates before the review",
    "Assign a business owner to each material vendor",
    "Review top vendors by exposure, not only by age",
    "Track stale credits and reconcile the aging to the ledger"
  ],
  "related": [
    "bank-reconciliation-exception-aging-oct27",
    "accrued-expense-support-packet-oct27",
    "close-handoff-during-controller-leave-oct27"
  ],
  "category": "Accounts payable",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/ap-aging-review-cadence-oct27.svg"
},
{
  "slug": "journal-entry-documentation-standard-oct27",
  "title": "Write a Journal Entry Standard That Survives Review",
  "excerpt": "Narrative, support, preparer and reviewer independence, recurring templates, reversals, and a close sample that tests the standard.",
  "readingMinutes": 7,
  "sections": [
    {
      "heading": "The packet and the narrative",
      "paragraphs": [
        "Every journal entry needs a packet and a narrative. The packet holds the source documents and the calculation. The narrative explains why the entry is needed, what it changes, and how the amount was derived. A reviewer should not have to infer the purpose from the account combination.",
        "Write the narrative in plain language: the event, the period, the accounts affected, the amount, and the support reference. If the entry corrects a prior entry, state the original entry number and the reason for the correction. Do not use a vague label such as reclass or true-up as the entire explanation."
      ]
    },
    {
      "heading": "Support must tie to the amount",
      "paragraphs": [
        "The support total should equal the entry amount, or the packet should show the reconciliation between them. A spreadsheet with a total that differs from the entry by an unexplained rounding is a review finding. Attach the source invoice, report, schedule, or calculation that produces the number.",
        "For allocations, show the driver and the denominator. For estimates, show the assumption and the range considered. For reversals, show the original entry and the period it affected. The reviewer should be able to rebuild the amount without opening a separate email thread."
      ]
    },
    {
      "heading": "Keep preparer and reviewer independent",
      "paragraphs": [
        "The preparer cannot be the reviewer. For a small team, the reviewer may be the controller or a qualified peer from another entity. Record both names and the dates. If the only qualified reviewer is unavailable, the entry waits or is covered by an approved alternate.",
        "The reviewer checks the narrative, the support, the account and period, and the approval threshold. A signature without evidence of review is not a control. Use a short review checklist so different reviewers apply the same standard."
      ]
    },
    {
      "heading": "Recurring entries need a template ID",
      "paragraphs": [
        "Recurring entries such as depreciation, amortization, and standard accruals should use a template with a stable identifier. The template defines the accounts, the calculation logic, and the required inputs. Each period's entry references the template and the current inputs.",
        "Review the template annually or when the underlying process changes. A template that has not been reviewed since a system migration may still reference an obsolete account. Record the review date and the approver in the template register."
      ]
    },
    {
      "heading": "Reversals need a reason and a link",
      "paragraphs": [
        "Not every accrual should reverse automatically. State the reversal rule for each recurring entry and link the reversal to the original. A reversal that posts in a different period than expected changes the expense pattern and needs an explanation.",
        "If a reversal is manual, record who posted it and why. If the original entry was wrong, correct it through a new entry with a clear narrative rather than deleting or overwriting history. The audit trail should show the error and the correction, not a clean file with no past."
      ]
    },
    {
      "heading": "Sample entries at close",
      "paragraphs": [
        "At each close, sample entries across preparers, account types, and amounts. Check the narrative, the support, the independence of the reviewer, and the approval. Record the exceptions and the time required to review each packet.",
        "A high exception rate in one account type may indicate a template problem rather than a preparer problem. Review the pattern with the controller and revise the template or the guidance before the next close."
      ]
    },
    {
      "heading": "Retain the packet with the entry",
      "paragraphs": [
        "Link the packet to the entry in the accounting system or the close folder. Retain it according to the record policy and make it available to the auditor. A packet stored only on a personal drive is not retained, even if it exists.",
        "At quarter end, test five entries from the period and confirm that the link works. A broken link discovered during an audit is a documentation failure that could have been fixed at close."
      ]
    }
  ],
  "checklist": [
    "Require a plain-language narrative for every entry",
    "Tie the support total to the entry amount",
    "Record preparer and independent reviewer with dates",
    "Give recurring entries a template ID and annual review",
    "State and link the reversal rule",
    "Sample entries each close and retain the packet link"
  ],
  "related": [
    "accrued-expense-support-packet-oct27",
    "revenue-cutoff-request-log-oct27",
    "flux-analysis-variance-commentary-oct27"
  ],
  "category": "Journal entries",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/journal-entry-documentation-standard-oct27.svg"
},
{
  "slug": "flux-analysis-variance-commentary-oct27",
  "title": "Write Flux Commentary That Explains the Driver, Not the Number",
  "excerpt": "Set thresholds before the numbers, require a driver and evidence, separate timing from permanent, and leave unexplained variances visible.",
  "readingMinutes": 6,
  "sections": [
    {
      "heading": "Set thresholds before the numbers",
      "paragraphs": [
        "Agree the flux thresholds before the period closes: a percentage and an absolute amount for each account group. A variance must cross both to require commentary. This prevents a long list of immaterial movements and focuses the review on accounts that matter.",
        "Document the thresholds and the approver. If a threshold changes, record the effective period and the reason. A threshold lowered after a large variance appears looks like an attempt to avoid the explanation, even when the change is legitimate."
      ]
    },
    {
      "heading": "Commentary needs a driver and evidence",
      "paragraphs": [
        "A useful comment names the driver, the amount it explains, and the source that confirms it. For example: the software expense increased because a new annual subscription was recorded in the period, supported by invoice 1842 and the signed order form. The remaining variance is timing of the prior year's renewal.",
        "Comments such as higher volume or timing without a number and a source are placeholders. The reviewer should be able to test the explanation against the ledger or the supporting schedule. If the driver cannot be quantified, say so and state what evidence is missing."
      ]
    },
    {
      "heading": "Separate timing from permanent",
      "paragraphs": [
        "A timing variance reverses in a later period; a permanent variance changes the run rate. Label each material comment accordingly and state the expected reversal period for timing items. This distinction matters for forecasting and for the reviewer's assessment of the explanation.",
        "If a variance is partly timing and partly permanent, split it and show both amounts. An explanation that combines them obscures the part that will persist. Use the prior-period trend to test whether the permanent portion is plausible."
      ]
    },
    {
      "heading": "Leave unexplained variances visible",
      "paragraphs": [
        "Not every variance can be explained by close. Record the unexplained amount, the investigation performed, the owner, and the date for follow-up. Do not write a plausible story to close the line. A visible open item is a better control than a confident guess.",
        "Escalate unexplained variances above the materiality threshold to the controller. The controller decides whether further work is required before sign-off. Record that decision in the flux file rather than in a separate message."
      ]
    },
    {
      "heading": "Review with the account owner",
      "paragraphs": [
        "The preparer drafts the commentary; the account owner confirms the operational driver. A finance-only explanation can miss the reason a cost moved, such as a change in service level, a contract renegotiation, or a one-time project. The review meeting should pair the number with the person who owns the activity.",
        "Record who confirmed each material comment and when. If the owner disagrees with the draft, revise the comment rather than overriding the concern. The flux file is a shared record, not a finance monologue."
      ]
    },
    {
      "heading": "Avoid narrative that explains everything away",
      "paragraphs": [
        "A commentary set where every variance is described as timing or one-time is a warning sign. Review the pattern across periods. If the same account has a one-time variance every quarter, the explanation is no longer credible and the underlying process needs attention.",
        "Compare the commentary with the accrual and prepaid schedules. A cost that is accrued in one period and expensed in another should show up consistently in both. Inconsistency between the schedules and the flux narrative is a finding."
      ]
    },
    {
      "heading": "Version the file and retain the support",
      "paragraphs": [
        "Save the flux file with the period and a version. Link the supporting invoices, schedules, and reports for each material comment. If the file is updated after review, record what changed and who approved the change.",
        "Retain the file with the close package. At the next close, compare the current commentary with the prior period to see whether timing items reversed as expected. That comparison is the simplest test of whether the explanations were accurate."
      ]
    }
  ],
  "checklist": [
    "Agree percentage and absolute thresholds before close",
    "Require a driver, an amount, and a source for each comment",
    "Label timing versus permanent variances",
    "Keep unexplained amounts visible with an owner",
    "Review material comments with the account owner",
    "Version the file and retain the linked support"
  ],
  "related": [
    "month-end-close-checklist-versioning-oct27",
    "accrued-expense-support-packet-oct27",
    "journal-entry-documentation-standard-oct27"
  ],
  "category": "Close operations",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/flux-analysis-variance-commentary-oct27.svg"
},
{
  "slug": "close-handoff-during-controller-leave-oct27",
  "title": "Hand Off the Close When the Controller Is Out",
  "excerpt": "A coverage memo, delegated access, a review buddy, and a sign-off trail that keep the close moving without transferring judgment.",
  "readingMinutes": 6,
  "sections": [
    {
      "heading": "Map the close tasks and approvals",
      "paragraphs": [
        "List every close task the controller owns, including the ones that are not on the checklist: approving journal entries above a threshold, reviewing reconciliations, signing the flux file, and releasing the close package. Mark which tasks can be delegated and which must wait or go to an alternate.",
        "For each delegated task, name the backup and the limit of their authority. A backup who can review a reconciliation may not be able to approve a material adjustment. Write the limit in the coverage memo so the backup does not have to guess during a busy close."
      ]
    },
    {
      "heading": "Delegate access, not judgment",
      "paragraphs": [
        "Grant the minimum system access needed for the delegated tasks, with a start and end date. Use named accounts and record the approval. Do not share the controller's credentials, even for a short absence. Shared access destroys the audit trail and makes it impossible to show who approved what.",
        "Temporary access should be removed on the return date. Add the removal to the coverage memo and confirm it with the system owner. An account that stays active after the leave is a standing control gap."
      ]
    },
    {
      "heading": "Write the coverage memo",
      "paragraphs": [
        "The memo covers the close calendar, the task owners, the approval thresholds, the open items, the key contacts, and the escalation route. Keep it to two pages and link to the detailed checklist. The backup should be able to start without a meeting.",
        "Include the known risks: a vendor that has not responded, a bank statement that arrives late, a reconciliation with an open exception. State what the backup should do if the risk materializes, who decides, and how to reach them. A memo that lists tasks but not decisions is incomplete."
      ]
    },
    {
      "heading": "Set a review buddy",
      "paragraphs": [
        "The review buddy is a qualified peer who checks the delegated work and signs off within their authority. The buddy is not a second controller and does not absorb the absent controller's decisions. The role is to keep the four-eyes principle intact during the coverage period.",
        "Record the buddy's name and the tasks they reviewed. If the buddy is also covering another site, reduce the close scope or extend the calendar rather than pretending the same capacity exists. Coverage that ignores workload produces late reviews and rushed sign-offs."
      ]
    },
    {
      "heading": "Keep the sign-off trail",
      "paragraphs": [
        "Every delegated approval should record the task, the amount, the evidence, the approver, the date, and the coverage authority. Use the same fields as the normal approval so the close package does not need a separate interpretation after the controller returns.",
        "If a decision exceeds the delegated authority, the item waits for the controller or goes to the designated alternate. Do not let urgency expand the authority. An adjustment that cannot wait should be escalated to the alternate with the facts and the deadline."
      ]
    },
    {
      "heading": "Escalate scope changes",
      "paragraphs": [
        "A new entity, a system outage, or a late acquisition changes the close scope. The backup should not absorb the change silently. Route it to the operations lead with the impact on the calendar, the tasks affected, and the decision required.",
        "Record the scope change and the decision in the coverage memo. If the close date moves, communicate it to the reviewers and update the checklist version. A scope change that is only discussed verbally becomes a missed task."
      ]
    },
    {
      "heading": "Debrief on return",
      "paragraphs": [
        "On return, the controller reviews the delegated approvals, the open items, and the coverage memo. Confirm which decisions were made, which were deferred, and which need a follow-up. Remove temporary access and record the removal date.",
        "Capture one lesson for the next absence: a missing procedure, an unclear threshold, or a contact that was out of date. Update the coverage memo before the next leave rather than reconstructing it from memory."
      ]
    }
  ],
  "checklist": [
    "Map delegated tasks and the limit of authority",
    "Grant named, time-bound access instead of shared credentials",
    "Write a two-page coverage memo with risks and contacts",
    "Assign a qualified review buddy",
    "Record delegated approvals with the coverage authority",
    "Debrief and remove temporary access on return"
  ],
  "related": [
    "month-end-close-checklist-versioning-oct27",
    "intercompany-confirmation-response-log-oct27",
    "audit-pbc-request-tracker-oct27"
  ],
  "category": "Close operations",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/close-handoff-during-controller-leave-oct27.svg"
},
{
  "slug": "audit-pbc-request-tracker-oct27",
  "title": "Run an Audit PBC Tracker That Auditors Can Follow",
  "excerpt": "One row per request, a named owner, a versioned evidence link, four status states, and a weekly stand-up that keeps the list honest.",
  "readingMinutes": 6,
  "sections": [
    {
      "heading": "Build the list from the audit request",
      "paragraphs": [
        "Start with the auditor's request list and assign a stable identifier to each item. Do not merge multiple requests into one row because they arrive in the same email. A merged row hides which part is complete and which part is still outstanding.",
        "Include the request text in the auditor's words, the period, the entity, and the due date. If the request is ambiguous, write the clarification beside it and record the auditor's response. The clarified version is what the team works from, not a private interpretation."
      ]
    },
    {
      "heading": "One row per request, not per folder",
      "paragraphs": [
        "A folder structure is useful for storage but not for status. The tracker row holds the request, the owner, the due date, the status, the evidence link, and the date delivered. The folder can mirror the identifiers, but the tracker is the source of truth.",
        "Use the same identifier in the email subject, the file name, and the tracker. When an auditor asks about a request, the team should be able to find the row and the evidence without searching three systems. Consistent identifiers reduce the most common source of delay."
      ]
    },
    {
      "heading": "Assign an owner and a due date",
      "paragraphs": [
        "Every row needs a named owner, not a department. The owner is the person who can obtain the evidence or confirm that it does not exist. The due date should be earlier than the auditor's deadline to allow review and follow-up.",
        "For requests that depend on an external party, record the dependency and the date the request was sent. An item waiting on a vendor is not the same as an item nobody has started. The status should show the difference so the stand-up focuses on the right problem."
      ]
    },
    {
      "heading": "Version the evidence",
      "paragraphs": [
        "When evidence is updated, keep the prior version and record the change. Auditors often need to see the version that supported a specific period, not the latest file. Use a version suffix and a date in the file name, and link both versions in the tracker.",
        "Do not overwrite a file after it has been delivered. If a correction is needed, deliver a new version with a short note explaining what changed and why. The note belongs with the tracker row so the auditor can follow the sequence."
      ]
    },
    {
      "heading": "Use four status states",
      "paragraphs": [
        "Use requested, in progress, delivered, and accepted. Requested means the item is logged but work has not started. In progress means an owner is actively gathering evidence. Delivered means the evidence was sent. Accepted means the auditor confirmed it is sufficient.",
        "Do not use done as a status. Done can mean the team sent something, the auditor received it, or the auditor accepted it. Those are different states with different risks. The four-state model keeps the distinction visible and prevents premature closure."
      ]
    },
    {
      "heading": "Run a weekly stand-up",
      "paragraphs": [
        "Meet weekly with the owners and review only the rows that are late, blocked, or waiting on an external party. Confirm the next action and the date. Keep the meeting to twenty minutes and use the tracker as the agenda.",
        "Report the count of delivered but not accepted items separately from the count of open requests. A large backlog of unaccepted items may indicate unclear evidence standards rather than slow work. Raise the pattern with the audit liaison."
      ]
    },
    {
      "heading": "Close with auditor confirmation",
      "paragraphs": [
        "Close a row only when the auditor confirms acceptance or the request is formally withdrawn. Record the confirmation date and the name of the person who confirmed it. A row closed because the team believes the evidence is sufficient is not closed.",
        "At the end of the audit, review the tracker for repeat requests, long cycle times, and items that required multiple versions. Use the findings to improve the permanent file structure before the next audit cycle."
      ]
    }
  ],
  "checklist": [
    "Assign a stable identifier to each auditor request",
    "Keep one row per request with a named owner",
    "Set internal due dates ahead of auditor deadlines",
    "Version evidence and never overwrite a delivered file",
    "Use requested, in progress, delivered, and accepted",
    "Close only with auditor confirmation"
  ],
  "related": [
    "revenue-cutoff-request-log-oct27",
    "fixed-asset-rollforward-tieout-oct27",
    "close-handoff-during-controller-leave-oct27"
  ],
  "category": "Audit readiness",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/audit-pbc-request-tracker-oct27.svg"
}
];
export const october27BlogBySlug = new Map(october27Blogs.map((post) => [post.slug, post]));
