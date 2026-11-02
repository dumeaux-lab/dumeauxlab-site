---
title: "An agentic AI environment to support biomedical research in collaborative academic environments"
year: 2026
authors: "Timothy Wu, Tyler S Browne, Mohamed Meawad, Hagar E Emam, Noor H Simsam, Yubing Xia, Amani Jaafar, Athena Ma, Bushra Kabbani, Vaibhav Gupta, Eliseos J Mucaki, Stephanie L Bishop, David R Edgell, Greg Gloor, Kun Ping Lu, Lynn Weir, Xiao Zhen Zhou, Vanessa Dumeaux, Michael T Hallett"
venue: "bioRxiv (2026)"
ref: "Wu et al. 2026. bioRxiv."
abbrev: "bioRxiv (2026)"
doi: "10.64898/2026.09.24.753565"
tag: "Methods"
summary: "Murmurent is open-source software that sits beneath agentic AI (built on Claude Code) and gives biomedical labs shared projects, specialized agents, tiered memory, traceability, enforced data-governance SOPs and multi-user collaboration. We use it to search for inhibitors of Pin1, a hard-to-target protein with a shallow catalytic site."
---

Agentic artificial intelligence (AAI) is increasingly used by biomedical scientists, where it has substantially lowered the difficulty of integrating computational, statistical and data-science approaches into day-to-day research activities, assisting with project design, analysis and manuscript preparation. Significant barriers remain, however, which are unlikely to be removed solely by releasing more capable AI models. Meaningful use still demands a technical fluency that many biomedical researchers lack: a PI and their lab members must learn how to use the AAI system, establish standard operating procedures (SOPs) for managing, sharing and curating data, and enforce rules that address data privacy and security. Existing commercial AAI systems, which were designed primarily for software engineering purposes, need to be significantly re-purposed for biomedical-related data science.

We present Murmurent, shared software that sits beneath the agentic AI and provides the skills, procedures and protections to address the concerns above, removing the need for a lab to develop them independently. This includes (1) infrastructure to support projects and so-called *choreographies* involving multiple group members; (2) a set of *specialized agents* each dedicated to typical biomedical data science tasks including software and statistical development, data visualization, literature search, equity, diversity, inclusion, and decolonization (EDID) review, and others; (3) a tiered *memory* which can retain important research decisions, intermediate, derived outputs and sensitive data, and which can exploit this information to automatically build better contexts in AAI sessions; (4) *traceability* records which are used by the AAI session to better plan and execute data analyses and software builds by, for example, helping to avoid repeating decisions that lead to dead-ends; (5) *enforcement* of SOPs for data maintenance and data governance across all lab members; and (6) *multi-user capacity* to allow groups to interact and collaborate.

We use the system to identify putative inhibitors of Peptidyl-prolyl cis–trans Isomerase NIMA-interacting 1 (Pin1), a protein with a shallow catalytic site making it difficult to target. We describe the construction of several approaches to identify Pin1 inhibitors and the results they yield.

Murmurent is open source.

**Resources:** [code on GitHub](https://github.com/hallettmiket/murmurent) · [7-minute getting-started video](https://mikehallett.science/assets/videos/murmurent_getting_started.html) · [documentation](https://mikehallett.science/murmurent/)
