---
title: "Immunity × Tumor"
pillarId: "tumor-host"
kicker: "01 / 03"
subtitle: "Crosstalk between peripheral immunity and the tumor microenvironment"
intro: "We profile blood and tumor at single-cell resolution to find molecular interactions between a patient's immune system and their disease, and turn those readings into clinically useful predictors for breast cancer."
---

## Placing the molecular properties of cancer in the context of the patient

Most cancer research has focused on the molecular properties of the tumor and its microenvironment in order to therapeutically target the components that drive disease progression. But cancer cells do not exist in isolation. For roughly 20% of breast cancer patients, the tumor and its microenvironment do not carry enough signal to predict how the disease will progress, and no tumor-site marker alone reliably tracks response to standard-of-care treatment or long-term prognosis. Other factors must be playing a role: the patient's immune system, the gut microbiome, lifestyle, and environmental exposures.

![Tumor–blood interactions in breast cancer patients](/assets/images/papers/28957325.png)

In our most recent study, we identified molecular processes in the primary breast tumor that are tightly co-expressed with processes in the patient's blood cells — our window onto their systemic immune response. RNA profiling of blood is a practical way to read the state of the immune system in an individual patient, and feeds directly into precision-medicine workflows.

To date, most of our work has relied on RNA harvested from whole blood, a mixture of many cell types including T and B lymphocytes, neutrophils, and platelets. The molecular profiles we get from these samples are therefore averages, blending the transcriptional programs of every cell type. Single-cell RNA sequencing now lets us read each cell type separately, which matters when tracking how an individual patient responds to therapy, develops adverse effects, or progresses toward recurrence.

The gut microbiome shapes a surprisingly wide range of host physiological processes, from metabolism to immune regulation. In parallel with our work on the immune system, we've started to characterize these complex microbial communities, asking how they are shaped by lifestyle and how they, in turn, might influence the host, for example by modulating the systemic immune response to cancer.

Taken together with information about a patient's exposures and lifestyle, these interactions are a first step toward a new generation of integrative, holistic predictors that can support a broad range of clinical questions, including diagnosis, response to therapy, prognosis, and disease monitoring.

## Precision oncology for in situ breast cancer (DCIS)

![Mutational landscape of pure DCIS](/assets/images/papers/dcis-dna_medrxiv2025.png)

Ductal carcinoma in situ (DCIS) is a non-obligate precursor to invasive breast cancer. Most patients are treated with surgery and adjuvant radiotherapy (RT), yet the absolute benefit of RT for an individual patient is highly variable: some are over-treated for disease that would never have recurred, others develop invasive recurrence despite standard care. Better molecular risk stratification is needed both to *de-escalate* therapy in low-risk disease and to *identify* RT-resistant lesions that would benefit from alternative management.

Through whole-exome sequencing of pure DCIS FFPE specimens, we are characterizing the mutational and copy-number landscape of the disease and identifying [genetic correlates of 10-year local recurrence and radiotherapy response](/papers/dcis-dna-medrxiv2025). This work is part of a large multi-institutional DCIS cohort programme conducted in collaboration with Sunnybrook Health Sciences Centre (Toronto).

A complementary methodological strand, developed jointly with [Michael Hallett](https://mikehallett.science) (Western), tackles the technical bottleneck that makes this work hard: FFPE-derived RNA-seq is sparse, degraded, and prone to extreme transcript dropout. We introduced [generative and integrative modelling approaches](/papers/preffect-biorxiv2025) that fit probabilistic distributions to FFPE expression counts, exploit matched-tissue profiles from the same patient, and use graph-attention over sample-sample adjacency networks to stabilize and impute missing values. These methods support ongoing development of RNA-based classifiers for invasive local recurrence and RT response on archival material that was previously considered too degraded to use.

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
