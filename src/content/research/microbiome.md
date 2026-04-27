---
title: "Microbial Communities"
pillarId: "microbiome"
kicker: "02 / 03"
subtitle: "Phenotypic heterogeneity from single fungal cells to community-scale function"
intro: "We develop single-cell and computational approaches to read microbial life across scales: individual fungal cells, the multi-species interactions that shape complex communities, and the functional configurations that organize the human gut microbiome."
---

## Phenotypic heterogeneity, one cell at a time

![Single-cell profiling of *Candida albicans*](/assets/images/papers/sc-candida_biorxiv_2022.png)

Genetically identical microbes do not all behave the same way. Within an isogenic population, individual cells diverge in transcriptional state, metabolism, and survival strategy — a phenomenon known as *phenotypic heterogeneity*. In pathogens like *Candida albicans*, this variability lets a small fraction of cells survive antifungal exposure and seed treatment failure. In the gut microbiome, the same principle plays out across species: heterogeneous subpopulations enable division of labor, bet-hedging, and resilience to environmental change. Bulk RNA-seq averages over all of this; we need single-cell resolution to see it.

Our [eLife 2023 study](/papers/sc-candida-elife-2023) was the first to tailor a nanolitre-droplet scRNA-seq assay to the fungal pathogen *Candida albicans*, then used it to dissect how genetically identical cells mount distinct cytoprotective programs against fluconazole, caspofungin, and nystatin. Building on that platform, we are extending these ideas to other adaptive states in *C. albicans*, including ongoing work with [Lucy Xie](https://chemsysbio.stanford.edu/students/alumni/jing-lin-lucy-xie/) (Stanford), and developing experimental and computational tooling for single-cell profiling of *complex microbial communities*, where current methods still struggle.

## Computational approaches for community-scale function

![Functional archetypes of the human gut microbiome](/assets/images/papers/deep-fMC_biorxiv2025.png)

Resolving microbial behaviour cell by cell is one half of the picture; understanding how those cells organize into functional communities is the other. We develop computational approaches that integrate large-scale metagenomic data to characterize how microbes assemble, interact, and contribute to host physiology.

One example is **deep-fMC**, our deep-learning framework for identifying *functional microbial configurations* in whole-population gut metagenomes. In an [analysis of nearly 10,000 healthy adult samples across 29 countries](/papers/deep-fmc-biorxiv2025), we found that the gut's functional space is bounded by three archetypes: one centred on sugar metabolism, one on fatty-acid metabolism, one on amino-acid and nitrogen metabolism. Most individuals are blends. Proximity to a single archetype tracks with stability, and the archetypes themselves act as confounders in disease-associated signatures across type-2 diabetes, colorectal cancer, and inflammatory bowel disease.

deep-fMC is one piece of a broader programme. We are also developing approaches to model microbe–microbe and microbe–host interactions, link community-scale functional descriptions to the cellular and sub-community dynamics that produce them, and identify the contexts in which a perturbation (diet, drug, dysbiosis) actually shifts a community's functional state.

## Selected papers

- [Functional archetypes in the human gut microbiome reveal metabolic diversity, stability, and influence disease-associated signatures](/papers/deep-fmc-biorxiv2025)
- [Candida albicans exhibits heterogeneous and adaptive cytoprotective responses to anti-fungal compounds](/papers/sc-candida-elife-2023)
- [A metagenomic-based study of two sites from the Barbadian reef system](/papers/reef-microbiome)

## Selected software

- [deep-fMC](/software/deep-fmc) — deep-learning identification of functional microbial configurations.
- [Candescence](/software/candescence) — automated classification of *C. albicans* morphologies.
