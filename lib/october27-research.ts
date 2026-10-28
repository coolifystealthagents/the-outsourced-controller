import type { October13Research } from './october13-research';

export const october27Research: October13Research[] = [
{
  "slug": "close-cycle-time-measurement-review-oct27",
  "title": "Measuring Close Cycle Time Without a Flattering Definition",
  "excerpt": "A measurement protocol for close cycle time with fixed start and end events, business-day counting, exclusions, and separate reporting of late evidence.",
  "readingMinutes": 10,
  "thesis": "Close cycle time is only comparable when the start event, end event, calendar convention, and exclusions are declared before the period is measured.",
  "questions": [
    "Which event starts the clock?",
    "Which sign-off ends it?",
    "How are late evidence and restatements handled?"
  ],
  "sections": [
    {
      "heading": "Research question and decision use",
      "paragraphs": [
        "This brief defines a reproducible way to measure how long a monthly close takes. The question is operational: from the first close activity to the final review sign-off, how many business days elapse, and where does the time go? The result is used to test a process change, compare entities, or set a realistic calendar.",
        "It is not a measure of accounting quality, and a faster close is not automatically a better one. A team can shorten the clock by deferring review or by closing with unresolved exceptions. The measure must be reported beside exception counts and late adjustments so speed is never read as a substitute for control."
      ]
    },
    {
      "heading": "Define the start and end events",
      "paragraphs": [
        "Pick a start event that occurs every period: the first close task opened after the period cutoff, the first subledger close, or the moment the prior period's bank statements are available. Whichever event is chosen, record its timestamp from the system rather than a person's recollection.",
        "The end event should be the final review sign-off on the close package, not the last journal entry and not the date the reporting pack is emailed. Record the sign-off time, the approver, and the version of the package. If the package is reopened, the clock stops only at the final sign-off."
      ]
    },
    {
      "heading": "Choose a calendar convention",
      "paragraphs": [
        "Report elapsed business days from the start date, excluding weekends and the organization's observed holidays. State the time zone used for timestamps. A close that crosses a holiday will look slower than an identical close that does not, so publish the calendar alongside the result.",
        "Calendar days are acceptable for an internal trend if used consistently, but they are not comparable across entities with different workweeks. Business days are the better default for a multi-entity comparison. Whatever the choice, apply it to every period in the series."
      ]
    },
    {
      "heading": "Separate work time from wait time",
      "paragraphs": [
        "A single cycle-time number hides the difference between a task that takes four hours and a task that waits four days for a response. Tag each close task with an active duration and a waiting period where the system allows it. If it does not, sample tasks and record the wait reason.",
        "Waiting on external evidence, waiting on an approval, and waiting on a system batch are different problems. Report them separately. A process change that reduces internal waiting will not help if most of the delay comes from a bank statement that arrives on the fifth business day."
      ]
    },
    {
      "heading": "Decide how to treat exclusions",
      "paragraphs": [
        "Define exclusions before measuring: a restatement, a system outage, an acquisition, or a regulatory filing that changes the calendar. Exclude the period only with a written reason and report the excluded periods beside the trend. Silent exclusion is how a close-time series becomes a marketing document.",
        "Late evidence is not an exclusion. If a reconciliation depends on an invoice that arrives after the target date, the close still happened on the date it happened. Report the lateness as a separate measure and keep the close in the cycle-time series."
      ]
    },
    {
      "heading": "Report the distribution, not only the average",
      "paragraphs": [
        "Report the median, the range, and the count of periods observed. A mean is easily pulled by one difficult quarter. If the organization has enough periods, show the trend by quarter and note any definition changes with an effective date.",
        "Pair the cycle time with the number of post-close adjustments, unresolved exceptions at sign-off, and late evidence items. A close that got two days faster while post-close adjustments doubled is not an improvement. The paired view is the actual finding."
      ]
    },
    {
      "heading": "Limitations and appropriate use",
      "paragraphs": [
        "The measure depends on timestamps that may be recorded inconsistently across systems. A manual checklist with a completion checkbox does not provide a reliable duration. State the data source and the known gaps rather than implying precision the record cannot support.",
        "The protocol cannot attribute a change to a specific process improvement without a comparison period or a controlled pilot. Use it to describe the trend and generate a hypothesis, then test the hypothesis with a bounded change and the same measurement rules."
      ]
    },
    {
      "heading": "Data Sources and Methodology",
      "paragraphs": [
        "The protocol draws on public internal-control guidance for the review and sign-off boundary, audit standards for the evidence expectations around close, and privacy guidance for handling entity-level records. Six sources were reviewed for context; none supplies a benchmark that should be transplanted without local data.",
        "No employer close records were used. The definitions were tested against a synthetic twelve-month calendar with holidays, late evidence, and one reopened package. Source links were checked on the publication date and are listed below for inspection."
      ]
    },
    {
      "heading": "Conclusion",
      "paragraphs": [
        "Close cycle time is a useful operating measure when the clock has a declared start, a declared end, and a visible treatment of exclusions. Report it with exception and adjustment counts, and the number becomes a tool for process improvement rather than a score to defend."
      ]
    }
  ],
  "related": [
    "close-task-dependency-latency-study-oct27",
    "journal-entry-rework-analysis-oct27",
    "month-end-close-checklist-versioning-oct27"
  ],
  "category": "Close research",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/close-cycle-time-measurement-review-oct27.svg",
  "sources": [
    {
      "label": "GAO Standards for Internal Control in the Federal Government",
      "url": "https://www.gao.gov/products/gao-14-704g"
    },
    {
      "label": "PCAOB Auditing Standard 2201, An Audit of Internal Control Over Financial Reporting",
      "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"
    },
    {
      "label": "U.S. Securities and Exchange Commission, Staff Accounting Bulletins",
      "url": "https://www.sec.gov/interps/account/sab.htm"
    },
    {
      "label": "Internal Revenue Service, How Long Should I Keep Records",
      "url": "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records"
    },
    {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    },
    {
      "label": "AICPA and CIMA",
      "url": "https://www.aicpa-cima.com/"
    }
  ]
},
{
  "slug": "reconciliation-aging-patterns-study-oct27",
  "title": "A Sampling Method for Reconciliation Aging Patterns",
  "excerpt": "How to sample reconciliations, define age from the statement period, classify exceptions, and report aging without hiding the denominator.",
  "readingMinutes": 10,
  "thesis": "Reconciliation aging is interpretable only when the age anchor, exception definition, and sampled population are fixed before the review begins.",
  "questions": [
    "Which reconciliations enter the sample?",
    "What counts as an exception?",
    "How should old items be reported?"
  ],
  "sections": [
    {
      "heading": "Research question and decision use",
      "paragraphs": [
        "The study asks how old open reconciliation exceptions are at a defined point in the close cycle, and whether the age pattern differs by account type, preparer group, or entity. The result helps a controller decide where review capacity is needed and whether a cleanup project is justified.",
        "It does not measure whether the reconciliations are accurate. An old exception can be a known timing item or an unresolved break. The classification is the substance of the study, and the age is only the organizing measure."
      ]
    },
    {
      "heading": "Define the population and the sample frame",
      "paragraphs": [
        "The population is every balance sheet reconciliation performed for the period, including accounts with a zero balance if they had activity. Obtain the list from the reconciliation tool or the close checklist, not from a folder of files. Record the count and the source.",
        "Sample across account type, entity, preparer, and aging bucket. Oversample accounts with known exceptions so the study has enough cases to describe, but keep the weighted and unweighted results separate. A sample of only problem accounts cannot support a statement about the population."
      ]
    },
    {
      "heading": "Anchor age to the statement period",
      "paragraphs": [
        "Age each open item from the statement period end, not from the date the item was assigned or the date the reconciliation was prepared. Use the same anchor for every account so the buckets mean the same thing across the sample.",
        "Define the buckets before coding: current, 1 to 30 days, 31 to 60 days, 61 to 90 days, and over 90 days. Record the exact date behind each bucket so a reviewer can recalculate. A bucket entered manually without a date is not reproducible."
      ]
    },
    {
      "heading": "Classify exceptions with a written codebook",
      "paragraphs": [
        "Write a codebook for the exception types observed in the pilot: timing, missing ledger entry, duplicate posting, unidentified bank item, unapplied receipt, currency, and unresolved. Each code needs a definition and at least one example from the sample.",
        "Two reviewers classify a calibration set and compare results. Revise ambiguous definitions before the main pass. Preserve the first-pass codes and the adjudication so the final distribution is not the only record."
      ]
    },
    {
      "heading": "Report counts, rates, and missing data",
      "paragraphs": [
        "Report the number of reconciliations in the population, the number sampled, the number with at least one exception, and the number of exceptions. Give the denominator for every rate. A percentage of exceptions without the count of reconciliations is not interpretable.",
        "Track missing reconciliations separately. An account with no reconciliation is not an account with no exceptions. Report the missing count by entity and account type, and do not drop those accounts from the denominator without saying so."
      ]
    },
    {
      "heading": "Look for concentration before assigning cause",
      "paragraphs": [
        "Compare aging by account type and preparer group. A concentration in one account type may reflect the nature of the balance, such as a suspense account, rather than weak work. A concentration in one entity may reflect a system limitation or a staffing gap.",
        "Read the narratives behind the oldest items. A pattern of unidentified bank items in one account is a different problem from a pattern of late vendor invoices. The code distribution, not the average age, should drive the recommendation."
      ]
    },
    {
      "heading": "Limitations and appropriate use",
      "paragraphs": [
        "The sample describes the period reviewed, not the population at every point in time. Aging changes as items clear and new ones arrive, so a single snapshot can overstate or understate the steady state. Repeat the review for at least two periods before drawing a trend.",
        "Reviewer classification is a source of error. Report agreement on the calibration set and the share of items that required adjudication. If agreement is low, the finding is about the codebook, not about the preparers."
      ]
    },
    {
      "heading": "Data Sources and Methodology",
      "paragraphs": [
        "The design follows a stratified sample with a fixed observation point and a written classification rule. Public internal-control guidance informs the review boundary, while statistical quality standards guide the treatment of missing records and denominators.",
        "No employer reconciliation data were used. The codebook and sampling table were tested on synthetic reconciliation records. The public sources below were checked on the publication date and are provided for methodological context."
      ]
    },
    {
      "heading": "Conclusion",
      "paragraphs": [
        "Reconciliation aging becomes actionable when the anchor date, exception definition, and sample frame are explicit. Report the missing accounts and the classification agreement alongside the age distribution, and the result can support a targeted cleanup rather than a general complaint about old items."
      ]
    }
  ],
  "related": [
    "close-cycle-time-measurement-review-oct27",
    "pbc-request-completeness-study-oct27",
    "bank-reconciliation-exception-aging-oct27"
  ],
  "category": "Close research",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/reconciliation-aging-patterns-study-oct27.svg",
  "sources": [
    {
      "label": "GAO Standards for Internal Control in the Federal Government",
      "url": "https://www.gao.gov/products/gao-14-704g"
    },
    {
      "label": "PCAOB Auditing Standard 2201, An Audit of Internal Control Over Financial Reporting",
      "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"
    },
    {
      "label": "U.S. Securities and Exchange Commission, Staff Accounting Bulletins",
      "url": "https://www.sec.gov/interps/account/sab.htm"
    },
    {
      "label": "Internal Revenue Service, How Long Should I Keep Records",
      "url": "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records"
    },
    {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    },
    {
      "label": "AICPA and CIMA",
      "url": "https://www.aicpa-cima.com/"
    }
  ]
},
{
  "slug": "journal-entry-rework-analysis-oct27",
  "title": "Analyze Journal Entry Rework Instead of Counting Entries",
  "excerpt": "Define rework, measure it per hundred entries, categorize the cause, and test whether the reviewer or the template is driving the returns.",
  "readingMinutes": 9,
  "thesis": "Journal entry rework is a process measure, not a productivity score, and it requires a written definition of what counts as a return.",
  "questions": [
    "What counts as rework?",
    "Which causes dominate?",
    "Does the template or the reviewer drive returns?"
  ],
  "sections": [
    {
      "heading": "Research question and decision use",
      "paragraphs": [
        "The study asks how often journal entries are returned for correction before posting, why they are returned, and whether the rate differs by entry type, preparer group, or reviewer. The result is used to improve templates, guidance, and review capacity.",
        "It is not a ranking of preparers. A higher return rate can reflect a harder account, a newer preparer, or a stricter reviewer. The analysis should identify the cause distribution before any comparison of groups is published."
      ]
    },
    {
      "heading": "Define rework precisely",
      "paragraphs": [
        "Rework is an entry that was submitted for review and returned for a change to the amount, the accounts, the period, the support, or the narrative before posting. A typo corrected by the preparer before submission is not rework. A rejection after posting is a different and more serious event.",
        "Record the return date, the reason code, the reviewer, and the correction required. If an entry is returned more than once, count each return but also record the number of distinct entries affected. Both counts matter: one entry returned three times is a different problem from three entries returned once."
      ]
    },
    {
      "heading": "Set the denominator",
      "paragraphs": [
        "Use entries submitted for review during the period as the denominator, not entries posted. An entry that is still in review belongs in the population if it was submitted before the cutoff. State whether recurring template entries are included and how reversals are treated.",
        "Report rework per hundred submitted entries. A raw count is misleading when volume changes. If the team submitted twice as many entries this quarter, the same number of returns represents half the rate."
      ]
    },
    {
      "heading": "Build a short cause codebook",
      "paragraphs": [
        "Use codes such as missing support, calculation error, wrong account, wrong period, unclear narrative, approval missing, and duplicate entry. Add a code for reviewer preference only if the reviewer can articulate the standard that was not met. Reviewer preference is often a symptom of an unwritten rule.",
        "Calibrate two reviewers on a sample of returned entries. Compare the codes and revise the definitions. Preserve the original codes so the final distribution can be audited. A codebook that changes mid-period makes the trend unreadable."
      ]
    },
    {
      "heading": "Distinguish template problems from reviewer problems",
      "paragraphs": [
        "Group the returns by entry type. If one recurring template produces most of the missing-support returns, the template or its instructions need revision. If the returns are spread across many entry types but concentrated under one reviewer, examine the review checklist and the reviewer's calibration.",
        "Do not assume that a lower return rate is better. A reviewer who accepts unsupported entries reduces rework and increases risk. Pair the rework measure with a sample of accepted entries to confirm that the standard is being applied."
      ]
    },
    {
      "heading": "Report the time cost",
      "paragraphs": [
        "For a sample of returned entries, record the time from return to resubmission and the reviewer time spent on the second pass. Multiply by the count only when the sample supports it, and report a range rather than a single hour figure.",
        "Time cost makes the case for a template fix more concrete than a percentage alone. It also reveals whether returns are clustered at the end of the close, when a second pass competes with other deadlines."
      ]
    },
    {
      "heading": "Limitations and appropriate use",
      "paragraphs": [
        "The data come from a review workflow that may not capture informal corrections. An entry fixed in a hallway conversation may never be recorded as returned. State this limitation and, if possible, compare the workflow log with the posted entry history.",
        "The analysis describes the period and the workflow, not the competence of individuals. Use it to revise templates and guidance, and repeat it after the change with the same definitions before claiming an improvement."
      ]
    },
    {
      "heading": "Data Sources and Methodology",
      "paragraphs": [
        "The method uses a defined event, a fixed denominator, and a calibrated cause codebook. Public internal-control guidance informs the review boundary and record retention expectations. Statistical quality standards guide the treatment of repeated returns and missing records.",
        "No employer journal entry data were used. The codes and calculations were tested on a synthetic set of submissions with repeated returns and mixed entry types. Sources were checked on the publication date and are listed below."
      ]
    },
    {
      "heading": "Conclusion",
      "paragraphs": [
        "Journal entry rework is useful when it is defined as a return for a substantive correction and reported against submissions. With a cause codebook and a paired sample of accepted entries, the measure points to templates, guidance, or review calibration rather than to a blameworthy individual."
      ]
    }
  ],
  "related": [
    "close-cycle-time-measurement-review-oct27",
    "close-task-dependency-latency-study-oct27",
    "journal-entry-documentation-standard-oct27"
  ],
  "category": "Close research",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/journal-entry-rework-analysis-oct27.svg",
  "sources": [
    {
      "label": "GAO Standards for Internal Control in the Federal Government",
      "url": "https://www.gao.gov/products/gao-14-704g"
    },
    {
      "label": "PCAOB Auditing Standard 2201, An Audit of Internal Control Over Financial Reporting",
      "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"
    },
    {
      "label": "U.S. Securities and Exchange Commission, Staff Accounting Bulletins",
      "url": "https://www.sec.gov/interps/account/sab.htm"
    },
    {
      "label": "Internal Revenue Service, How Long Should I Keep Records",
      "url": "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records"
    },
    {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    },
    {
      "label": "AICPA and CIMA",
      "url": "https://www.aicpa-cima.com/"
    }
  ]
},
{
  "slug": "pbc-request-completeness-study-oct27",
  "title": "Study PBC Request Completeness at First Delivery",
  "excerpt": "A sampling method for audit PBC requests that measures first-pass completeness, days to deliver, version churn, and the causes of rejection.",
  "readingMinutes": 9,
  "thesis": "PBC performance should be measured at first delivery, not at final acceptance, because the gap between the two is the rework the team is trying to remove.",
  "questions": [
    "What share of requests are complete at first delivery?",
    "Which request types drive rework?",
    "How long does acceptance take after delivery?"
  ],
  "sections": [
    {
      "heading": "Research question and decision use",
      "paragraphs": [
        "The study asks how many audit requests are complete when first delivered, how long delivery and acceptance take, and which request types generate the most rework. The result helps the controller improve the permanent file and the request triage process before the next audit.",
        "It does not evaluate the auditor's performance or the quality of the financial statements. The unit is an administrative request and its evidence package. A fast acceptance does not prove that the underlying accounting is correct; it proves that the evidence met the request."
      ]
    },
    {
      "heading": "Define the request population",
      "paragraphs": [
        "Use the auditor's request list as the population. Assign one identifier per request, even when several requests arrive in one email. Record the request text, the period, the entity, the owner, the internal due date, and the auditor's deadline.",
        "Exclude withdrawn requests but report the count. Include requests that were clarified after delivery, because clarification is part of the completeness question. A request that changed scope is different from one that was incomplete, so record the distinction."
      ]
    },
    {
      "heading": "Measure first-delivery completeness",
      "paragraphs": [
        "Classify the first delivery as complete, partial, or insufficient. Complete means the auditor accepted it without requesting additional evidence. Partial means some requested items were missing. Insufficient means the evidence did not address the request or was the wrong period or entity.",
        "Two reviewers should classify a calibration sample and compare results. The auditor's follow-up email is the strongest evidence of what was missing, but it may not use the team's categories. Record both the auditor's words and the assigned code."
      ]
    },
    {
      "heading": "Track days and versions",
      "paragraphs": [
        "Calculate days from request to first delivery and days from first delivery to acceptance. Report them separately. A team that delivers quickly but requires three revisions has a different problem from a team that delivers slowly but completely.",
        "Count the number of versions per request. A high version count on one request type points to an unclear standard or a changing request, not necessarily to team error. Record the reason for each new version in the tracker."
      ]
    },
    {
      "heading": "Analyze by request type",
      "paragraphs": [
        "Group requests by type: reconciliations, contracts, invoices, payroll registers, board minutes, system reports, and audit confirmations. Compare first-pass completeness and version churn by type. Request types with low completeness are candidates for a permanent-file fix.",
        "Do not aggregate all requests into one rate without showing the mix. A quarter with many contract requests will look different from one dominated by reconciliations. Report the type distribution beside the overall rate."
      ]
    },
    {
      "heading": "Link findings to the permanent file",
      "paragraphs": [
        "For each incomplete request, record whether the evidence existed but was not linked, existed in a different format, or did not exist. The first two are filing and formatting problems; the third is a recordkeeping problem. The remedies are different.",
        "Use the finding to update the permanent file index before the next audit. Assign an owner and a date. A completeness study that does not change the index becomes an annual description of the same problem."
      ]
    },
    {
      "heading": "Limitations and appropriate use",
      "paragraphs": [
        "Auditor request lists vary in specificity. A vague request can produce a delivery that the team considers complete and the auditor considers insufficient. Record the clarification history and avoid treating ambiguity as a team failure.",
        "The sample reflects one audit cycle and one auditor. Do not compare rates across audits without checking the request mix and the auditor's documentation standards. The measure is most useful as an internal trend with a stable definition."
      ]
    },
    {
      "heading": "Data Sources and Methodology",
      "paragraphs": [
        "The protocol uses a defined request population, a three-level completeness rating, and separate timing measures. Public audit standards inform the evidence boundary, while internal-control guidance informs the review and retention expectations.",
        "No employer audit records were used. The tracker fields and rating scale were tested on synthetic requests with partial deliveries and multiple versions. The sources below were checked on the publication date."
      ]
    },
    {
      "heading": "Conclusion",
      "paragraphs": [
        "First-delivery completeness is the measure that reveals rework in the PBC process. Pair it with version counts and days to acceptance, analyze by request type, and use the result to fix the permanent file rather than to pressure the team to send more quickly."
      ]
    }
  ],
  "related": [
    "close-cycle-time-measurement-review-oct27",
    "reconciliation-aging-patterns-study-oct27",
    "audit-pbc-request-tracker-oct27"
  ],
  "category": "Close research",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/pbc-request-completeness-study-oct27.svg",
  "sources": [
    {
      "label": "GAO Standards for Internal Control in the Federal Government",
      "url": "https://www.gao.gov/products/gao-14-704g"
    },
    {
      "label": "PCAOB Auditing Standard 2201, An Audit of Internal Control Over Financial Reporting",
      "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"
    },
    {
      "label": "U.S. Securities and Exchange Commission, Staff Accounting Bulletins",
      "url": "https://www.sec.gov/interps/account/sab.htm"
    },
    {
      "label": "Internal Revenue Service, How Long Should I Keep Records",
      "url": "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records"
    },
    {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    },
    {
      "label": "AICPA and CIMA",
      "url": "https://www.aicpa-cima.com/"
    }
  ]
},
{
  "slug": "close-task-dependency-latency-study-oct27",
  "title": "Map Close Task Dependencies to Find the Real Delay",
  "excerpt": "A critical-path method for close tasks that separates active work from waiting, identifies handoff latency, and avoids optimizing the wrong step.",
  "readingMinutes": 10,
  "thesis": "Close delays usually sit in dependencies and handoffs, not in the task that looks busiest, so the analysis must map wait time separately from work time.",
  "questions": [
    "Which tasks sit on the critical path?",
    "Where does waiting dominate?",
    "Which handoffs add the most latency?"
  ],
  "sections": [
    {
      "heading": "Research question and decision use",
      "paragraphs": [
        "The study asks which close tasks determine the finish date and where time is spent waiting rather than working. The result helps a controller target a process change at the constraint instead of adding capacity to a step that is not on the critical path.",
        "It is a descriptive map of one or more close cycles, not a prediction that removing a dependency will shorten the close by a fixed number of days. Dependencies interact, and a change can move the constraint rather than remove it."
      ]
    },
    {
      "heading": "Build the task graph",
      "paragraphs": [
        "List the close tasks at a useful level of detail: subledger close, bank reconciliation, accrual review, intercompany confirmation, depreciation run, flux analysis, and final sign-off. For each task, record the predecessor, the successor, the owner, and the system used.",
        "Draw the graph with the start and end events defined in the cycle-time protocol. Include external dependencies such as bank statements and vendor invoices. A graph that omits external waits will point to the accounting team for a delay caused by a third party."
      ]
    },
    {
      "heading": "Separate work time from wait time",
      "paragraphs": [
        "For each task, record active duration and waiting duration. Active duration is time a person is working on the task. Waiting is time the task is ready but blocked by a predecessor, an approval, a system batch, or missing evidence.",
        "Use system timestamps where possible and a short sampling diary where not. A task that takes two hours of work but waits three days for a review is a review-capacity problem, not a task-duration problem. The distinction is the core of the analysis."
      ]
    },
    {
      "heading": "Identify the critical path",
      "paragraphs": [
        "Calculate the longest path from start to final sign-off using the observed durations. Tasks off the critical path have slack; speeding them up will not move the finish date. Report the path and the slack for the major branches.",
        "If the path changes between periods, show both paths. A close that is usually constrained by reconciliations may be constrained by intercompany confirmations in a quarter with more entities. The variation is useful evidence, not noise to be averaged away."
      ]
    },
    {
      "heading": "Measure handoff latency",
      "paragraphs": [
        "A handoff occurs when ownership changes: preparer to reviewer, entity accountant to consolidation, accounting to tax. Record the ready time, the received time, and the acknowledgment time. The gap between ready and acknowledged is the handoff latency.",
        "Handoffs are often invisible in a task list because both sides believe the other owns the delay. Report the top five handoffs by median latency and the count of items that waited more than one business day. That table usually identifies a fix faster than a general process review."
      ]
    },
    {
      "heading": "Test a change on the constraint",
      "paragraphs": [
        "Choose one change aimed at the critical path, such as a standing review slot, a pre-close evidence request, or a shift in the bank statement cutoff. Run it for two cycles and remeasure the same task graph. Do not change three things at once.",
        "If the finish date does not move, check whether the constraint shifted to another task. A successful change can expose a new bottleneck. Report the new path rather than declaring the change ineffective."
      ]
    },
    {
      "heading": "Limitations and appropriate use",
      "paragraphs": [
        "The graph reflects the tasks that were documented. Undocumented work, informal approvals, and off-system communication can create delays the map does not show. Use the handoff data and interviews to check for missing nodes.",
        "The analysis cannot establish why a person or team was slow, and it should not be used to rank individuals. Its purpose is to locate structural waiting. Pair it with workload and coverage data before drawing conclusions about capacity."
      ]
    },
    {
      "heading": "Data Sources and Methodology",
      "paragraphs": [
        "The method applies critical-path logic to a defined close calendar and separates active duration from waiting. Public internal-control guidance informs the review and sign-off nodes, while audit standards inform the evidence dependencies that must not be compressed.",
        "No employer close data were used. The graph and latency table were tested on a synthetic close with external bank and vendor dependencies. Sources were checked on the publication date and are listed below."
      ]
    },
    {
      "heading": "Conclusion",
      "paragraphs": [
        "Mapping close dependencies turns a vague complaint about a slow close into a specific constraint and a measurable handoff. Separate work from waiting, identify the critical path, and test one change at the constraint before expanding the redesign."
      ]
    }
  ],
  "related": [
    "close-cycle-time-measurement-review-oct27",
    "journal-entry-rework-analysis-oct27",
    "close-handoff-during-controller-leave-oct27"
  ],
  "category": "Close research",
  "publishedAt": "2026-10-27",
  "visibleDate": "October 27, 2026",
  "thumbnail": "/thumbnails/october-27/close-task-dependency-latency-study-oct27.svg",
  "sources": [
    {
      "label": "GAO Standards for Internal Control in the Federal Government",
      "url": "https://www.gao.gov/products/gao-14-704g"
    },
    {
      "label": "PCAOB Auditing Standard 2201, An Audit of Internal Control Over Financial Reporting",
      "url": "https://pcaobus.org/oversight/standards/auditing-standards/details/AS2201"
    },
    {
      "label": "U.S. Securities and Exchange Commission, Staff Accounting Bulletins",
      "url": "https://www.sec.gov/interps/account/sab.htm"
    },
    {
      "label": "Internal Revenue Service, How Long Should I Keep Records",
      "url": "https://www.irs.gov/businesses/small-businesses-self-employed/how-long-should-i-keep-records"
    },
    {
      "label": "NIST Privacy Framework",
      "url": "https://www.nist.gov/privacy-framework"
    },
    {
      "label": "AICPA and CIMA",
      "url": "https://www.aicpa-cima.com/"
    }
  ]
},

  {
    "slug": "controller-close-checklist-drift-study-oct28",
    "title": "Close Checklist Drift",
    "category": "Controller Research",
    "excerpt": "How often does the close checklist change, and is the change logged?",
    "publishedAt": "2026-10-28",
    "visibleDate": "October 28, 2026",
    "thumbnail": "/thumbnails/october-28/controller-close-checklist-drift-study-oct28.jpg",
    "readingMinutes": 8,
    "thesis": "How often does the close checklist change, and is the change logged?",
    "questions": [
      "How often does the close checklist change, and is the change logged?"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How often does the close checklist change, and is the change logged?",
          "The scope is the close record and the events the team can observe in a defined window. It does not estimate an industry rate."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Close cycles in a defined year, sampled by controller and period.",
          "The unit is one reconciliation, entry, invoice, or forecast line."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Changes per cycle, approval evidence, effective period, and skipped steps.",
          "Define the window and evidence standard before the sample begins."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Unlogged changes cluster around staffing gaps and new reporting requests.",
          "A failure needs a reason code, an owner, and a recheck date."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A checklist without a version cannot prove which steps were required.",
          "The numbers are illustrative. The value is the stage split."
        ]
      },
      {
        "heading": "Evidence and limits",
        "paragraphs": [
          "Public guidance can frame the questions but cannot prove a local result. Record the sample frame and unavailable fields."
        ]
      },
      {
        "heading": "Practical use",
        "paragraphs": [
          "Change one controlled element at a time and recheck the same measure after two cycles."
        ]
      }
    ],
    "sources": [
      {
        "label": "AICPA audit and accounting resources",
        "url": "https://www.aicpa-cima.com/"
      },
      {
        "label": "COSO internal control framework",
        "url": "https://www.coso.org/"
      }
    ],
    "related": []
  },
  {
    "slug": "controller-bank-rec-exception-study-oct28",
    "title": "Bank Reconciliation Exception Aging",
    "category": "Controller Research",
    "excerpt": "How old are unreconciled items, and where do they accumulate?",
    "publishedAt": "2026-10-28",
    "visibleDate": "October 28, 2026",
    "thumbnail": "/thumbnails/october-28/controller-bank-rec-exception-study-oct28.jpg",
    "readingMinutes": 8,
    "thesis": "How old are unreconciled items, and where do they accumulate?",
    "questions": [
      "How old are unreconciled items, and where do they accumulate?"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How old are unreconciled items, and where do they accumulate?",
          "The scope is the close record and the events the team can observe in a defined window. It does not estimate an industry rate."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Bank reconciliations in a defined quarter, sampled by account.",
          "The unit is one reconciliation, entry, invoice, or forecast line."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Exception age, source, owner, and repeat items.",
          "Define the window and evidence standard before the sample begins."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Old items cluster around deposits, processor settlements, and stale checks.",
          "A failure needs a reason code, an owner, and a recheck date."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "An aged item without an owner is not a reconciliation.",
          "The numbers are illustrative. The value is the stage split."
        ]
      },
      {
        "heading": "Evidence and limits",
        "paragraphs": [
          "Public guidance can frame the questions but cannot prove a local result. Record the sample frame and unavailable fields."
        ]
      },
      {
        "heading": "Practical use",
        "paragraphs": [
          "Change one controlled element at a time and recheck the same measure after two cycles."
        ]
      }
    ],
    "sources": [
      {
        "label": "AICPA audit and accounting resources",
        "url": "https://www.aicpa-cima.com/"
      },
      {
        "label": "COSO internal control framework",
        "url": "https://www.coso.org/"
      }
    ],
    "related": []
  },
  {
    "slug": "controller-duplicate-invoice-study-oct28",
    "title": "Duplicate Invoice Rate",
    "category": "Controller Research",
    "excerpt": "How often does a duplicate invoice reach payment?",
    "publishedAt": "2026-10-28",
    "visibleDate": "October 28, 2026",
    "thumbnail": "/thumbnails/october-28/controller-duplicate-invoice-study-oct28.jpg",
    "readingMinutes": 8,
    "thesis": "How often does a duplicate invoice reach payment?",
    "questions": [
      "How often does a duplicate invoice reach payment?"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How often does a duplicate invoice reach payment?",
          "The scope is the close record and the events the team can observe in a defined window. It does not estimate an industry rate."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "AP invoices in a defined quarter, sampled by vendor and amount.",
          "The unit is one reconciliation, entry, invoice, or forecast line."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Duplicate rate, detection point, recovery, and vendor pattern.",
          "Define the window and evidence standard before the sample begins."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Duplicates cluster around recurring services and invoices without a purchase order.",
          "A failure needs a reason code, an owner, and a recheck date."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A match on amount alone creates false positives; compare the period and service.",
          "The numbers are illustrative. The value is the stage split."
        ]
      },
      {
        "heading": "Evidence and limits",
        "paragraphs": [
          "Public guidance can frame the questions but cannot prove a local result. Record the sample frame and unavailable fields."
        ]
      },
      {
        "heading": "Practical use",
        "paragraphs": [
          "Change one controlled element at a time and recheck the same measure after two cycles."
        ]
      }
    ],
    "sources": [
      {
        "label": "AICPA audit and accounting resources",
        "url": "https://www.aicpa-cima.com/"
      },
      {
        "label": "COSO internal control framework",
        "url": "https://www.coso.org/"
      }
    ],
    "related": []
  },
  {
    "slug": "controller-journal-approval-lag-study-oct28",
    "title": "Journal Entry Approval Lag",
    "category": "Controller Research",
    "excerpt": "How long does a manual journal entry wait for review?",
    "publishedAt": "2026-10-28",
    "visibleDate": "October 28, 2026",
    "thumbnail": "/thumbnails/october-28/controller-journal-approval-lag-study-oct28.jpg",
    "readingMinutes": 8,
    "thesis": "How long does a manual journal entry wait for review?",
    "questions": [
      "How long does a manual journal entry wait for review?"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "How long does a manual journal entry wait for review?",
          "The scope is the close record and the events the team can observe in a defined window. It does not estimate an industry rate."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Manual entries in a defined close, sampled by preparer and type.",
          "The unit is one reconciliation, entry, invoice, or forecast line."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Approval lag, missing support, posting date, and reversals.",
          "Define the window and evidence standard before the sample begins."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Lag clusters at period end when reviewers are also closing.",
          "A failure needs a reason code, an owner, and a recheck date."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A fast approval without support is not a control.",
          "The numbers are illustrative. The value is the stage split."
        ]
      },
      {
        "heading": "Evidence and limits",
        "paragraphs": [
          "Public guidance can frame the questions but cannot prove a local result. Record the sample frame and unavailable fields."
        ]
      },
      {
        "heading": "Practical use",
        "paragraphs": [
          "Change one controlled element at a time and recheck the same measure after two cycles."
        ]
      }
    ],
    "sources": [
      {
        "label": "AICPA audit and accounting resources",
        "url": "https://www.aicpa-cima.com/"
      },
      {
        "label": "COSO internal control framework",
        "url": "https://www.coso.org/"
      }
    ],
    "related": []
  },
  {
    "slug": "controller-cash-forecast-variance-study-oct28",
    "title": "Cash Forecast Variance",
    "category": "Controller Research",
    "excerpt": "Which forecast lines vary most, and what explains the timing?",
    "publishedAt": "2026-10-28",
    "visibleDate": "October 28, 2026",
    "thumbnail": "/thumbnails/october-28/controller-cash-forecast-variance-study-oct28.jpg",
    "readingMinutes": 8,
    "thesis": "Which forecast lines vary most, and what explains the timing?",
    "questions": [
      "Which forecast lines vary most, and what explains the timing?"
    ],
    "sections": [
      {
        "heading": "Question and scope",
        "paragraphs": [
          "Which forecast lines vary most, and what explains the timing?",
          "The scope is the close record and the events the team can observe in a defined window. It does not estimate an industry rate."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Forecast and actual cash in a defined quarter, sampled by category.",
          "The unit is one reconciliation, entry, invoice, or forecast line."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Variance, timing, explanation recorded, and repeat source.",
          "Define the window and evidence standard before the sample begins."
        ]
      },
      {
        "heading": "Where the record fails",
        "paragraphs": [
          "Collections and payroll timing drive most of the variance.",
          "A failure needs a reason code, an owner, and a recheck date."
        ]
      },
      {
        "heading": "Worked example",
        "paragraphs": [
          "A variance without the timing explanation is not a forecast improvement.",
          "The numbers are illustrative. The value is the stage split."
        ]
      },
      {
        "heading": "Evidence and limits",
        "paragraphs": [
          "Public guidance can frame the questions but cannot prove a local result. Record the sample frame and unavailable fields."
        ]
      },
      {
        "heading": "Practical use",
        "paragraphs": [
          "Change one controlled element at a time and recheck the same measure after two cycles."
        ]
      }
    ],
    "sources": [
      {
        "label": "AICPA audit and accounting resources",
        "url": "https://www.aicpa-cima.com/"
      },
      {
        "label": "COSO internal control framework",
        "url": "https://www.coso.org/"
      }
    ],
    "related": []
  }

];
export const october27ResearchBySlug = new Map(october27Research.map((post) => [post.slug, post]));
