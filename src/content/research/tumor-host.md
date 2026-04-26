---
title: "Immunity × Tumor"
pillarId: "tumor-host"
kicker: "01 / 03"
subtitle: "Crosstalk between peripheral immunity and the tumor microenvironment"
intro: "We profile blood and tumor at single-cell resolution to identify molecular interactions between a patient's immune system and their disease — and turn those readings into clinically useful predictors for breast cancer."
---

## Placing the molecular properties of cancer in the context of the patient

The majority of cancer research to date has largely focused on understanding molecular properties of the tumor and its surrounding microenvironment in order to therapeutically target key molecular components that might drive disease progression. However, it is now well understood that cancer cells do not exist in isolation. We presented quantitative evidence that the tumor and microenvironment for many breast cancer patients (~20%) do not provide sufficient information to predict how the disease will progress. There do not appear to be any signals at the tumor site that alone are good markers of response to standard of care treatment and ultimately patient prognosis. In turn, this suggests that other factors external to the tumor — including the patient's immune system, gut microbiome, lifestyle and exposures — may play a significant role in disease progression.

![Tumor–blood interactions in breast cancer patients](/assets/images/papers/28957325.png)

In our most recent study, we established the existence of several molecular interactions between the primary tumor and the patient systemic response. We identified molecular processes and pathways in the primary breast tumor that are tightly co-expressed with molecular processes and pathways in the patient blood cells (our surrogate to measure the patient systemic response). Genomic profiling of RNA from a patient's blood can be used to assess the state of the immune system in an individual and offer many opportunities to participate in precision medicine efforts.

Our efforts to date have harvested RNA from whole blood composed of diverse cell types (e.g. T and B lymphocytes, neutrophils, platelets). Thus, molecular profiles of these samples are *averaging* over the transcriptional programs of the different types of cells in blood. Modern approaches based on single-cell RNA sequencing are becoming increasingly routine, where RNA from a single cell is isolated and sequenced. This allows transcriptional programs of each type (e.g. immune) of cell within a blood sample to be measured. Such approaches have great utility when investigating how an individual is responding to therapy, to the presence/management of specific adverse effects, and ultimately better inform on long-term progression of the disease, including the early diagnosis of recurrence.

The gut microbiome has been implicated in a vast number of host physiological processes. Analogous to our studies of the immune system, we have also initiated studies to characterize these complex microbial communities, and explore how they are affected by lifestyle and how they might benefit the host by impacting functions in another tissue (e.g. systemic immune response to cancer).

These interactions and additional information regarding patient exposure and lifestyle are the first steps towards a new generation of integrative holistic predictors for a broad range of clinical end-points: diagnostics, response to therapies, prognosis and disease monitoring.

## Precision oncology for in situ breast cancer (DCIS)

![Mutational landscape of pure DCIS](/assets/images/papers/dcis-dna_medrxiv2025.png)

Ductal carcinoma in situ (DCIS) is a non-obligate precursor to invasive breast cancer. Most patients are treated with surgery and adjuvant radiotherapy (RT), yet the absolute benefit of RT for an individual patient is highly variable: some are over-treated for disease that would never have recurred, others develop invasive recurrence despite standard care. Better molecular risk stratification is needed both to *de-escalate* therapy in low-risk disease and to *identify* RT-resistant lesions that would benefit from alternative management.

Through whole-exome sequencing of pure DCIS FFPE specimens, we are characterizing the mutational and copy-number landscape of the disease and identifying [genetic correlates of 10-year local recurrence and radiotherapy response](/papers/dcis-dna-medrxiv2025). This work is part of a large multi-institutional DCIS cohort programme conducted in collaboration with Sunnybrook Health Sciences Centre (Toronto).

A complementary methodological strand, developed jointly with [Michael Hallett](https://mikehallett.science) (Western), tackles the technical bottleneck that makes this work hard: FFPE-derived RNA-seq is sparse, degraded, and prone to extreme transcript dropout. We introduced [generative and integrative modelling approaches](/papers/preffect-biorxiv2025) that fit probabilistic distributions to FFPE expression counts, exploit matched-tissue profiles from the same patient, and use graph-attention over sample-sample adjacency networks to stabilize and impute missing values. These methods support ongoing development of RNA-based classifiers for invasive local recurrence and RT response on archival material that was previously considered too degraded to use.

## Blood transcriptomics as a window onto exposure and disease

![Blood biomarkers for early detection of breast cancer](/assets/images/papers/19671031.png)

We have a long-standing interest in the development of RNA-based biomarker signatures in blood, which can be used to inform on exposure and health status. As a major defense and transport system, blood cells can adjust expression of their genes in response to various clinical, biochemical, and pathological conditions. To develop such surrogate signatures, we first defined robust laboratory methodologies for RNA profiling of blood cells (Dumeaux et al., 2008 *Biomarkers in Medicine*), and investigated *normal* inter-individual variation in healthy individuals (Dumeaux et al., 2010 *PLoS Genetics*). These studies served as stepping stones to several projects investigating how the signatures can be used to detect systemic molecular processes deregulated in response to defined exposure and health status (>5 publications, 200+ citations). These manuscripts highlight specific behavioral programs — such as metabolism or signaling — deregulated in the individual's blood cells that are biological and/or pathological responses to a given condition in the general population (e.g. exposure to organic pollutants) or in a diseased population (e.g. radiation-induced fibrosis in breast cancer survivors).

These blood-based signatures can also be used to develop new ways to diagnose disease. For example, our blood-based diagnostic test for breast cancer may reduce false-positive interpretations of suspicious mammographic results (3 publications including Dumeaux et al., 2015 *IJC*; one submitted patent).

## Selected papers

- [Mutational landscape of pure ductal carcinoma in situ and associations with disease prognosis and response to radiotherapy](/papers/dcis-dna-medrxiv2025)
- [Generative and integrative modeling for transcriptomics with formalin-fixed paraffin-embedded material](/papers/preffect-biorxiv2025)
- [Interactions between the tumor and the blood systemic response of breast cancer patients](/papers/pmid-28957325)
- [The prognostic ease and difficulty of invasive breast carcinoma](/papers/pmid-25284793)
- [Peripheral blood cells inform on the presence of breast cancer: a population-based case-control study](/papers/pmid-24931809)

## Selected software

- [MIxT](/software/mixt) — system for exploring and comparing transcriptional profiles from two or more matched tissues across individuals.
- [PREFFECT](/software/preffect) — generative and integrative modeling for FFPE transcriptomics.

## Linked websites

- [Tumor–blood interactions in breast cancer patients](https://idc-blood.mixt.schulich.uwo.ca)
- [Tumor epithelium–stroma interactions in breast cancer](https://idc-stroma.mixt.schulich.uwo.ca)
