---
title: "Computational Methods"
pillarId: "methods"
kicker: "03 / 03"
subtitle: "Systems epidemiology for the genomics era"
intro: "We build the probabilistic models, neural networks, and software packages that integrate -omics data with population-scale epidemiology, so messy real-world data can inform causation, not just correlation."
---

## Novel bioinformatics approaches and software

We develop approaches that connect quantitative and biological knowledge. Few fields have generated higher expectations, deeper frustrations, or more *translation anxiety* than human genomics. Early on, we argued (alongside others) for grounding the field in rigorous epidemiology and statistics if genomics and big data were to deliver on personalized medicine. We laid out this framing under the name *Systems Epidemiology* (Lund & Dumeaux, 2008 *CEBP*; Lund & Dumeaux, 2010 *Int J Epi*): integrate human -omics data with measurements from observational epidemiologic studies, characterize the factors that drive complex diseases, and infer causation rather than settling for correlation. The Norwegian Women and Cancer Study biobank (Dumeaux et al., 2008 *BMC*) was an early proving ground for this approach.

![MIxT — matched-tissue transcriptional integration](/assets/images/research/screenshot-mixt.png)

Critical to these efforts is the development of computational methodologies that support the integration and interpretation of complex *real-life* data. Specifically, we have developed novel methodologies for:

- the sensitive detection of low-amplitude changes in blood profiles across healthy individuals (developed in *PLoS Genetics* 2010);
- identifying genes, pathways, and processes that co-vary and interact across tissues and environments;
- predicting molecular pathway activation patient-by-patient under the constraints clinical practice imposes;
- and additional methodologies within collaborative manuscripts (Huttenhower et al., 2009 *Genome Research*; Barutcuoglu et al., 2009 *Bioinformatics*; Bettauer et al., 2022 *Microbiology Spectrum*).

More recently, we have extended this methodological program in two directions: FFPE-grade transcriptomics, through [PREFFECT](/software/preffect), and microbial functional archetypes, through [deep-fMC](/software/deep-fmc). Both are settings where a lot is technically measurable but relatively little is yet clinically actionable, and that gap is what pushed us to build new tools.

## Selected papers

- [Generative and integrative modeling for transcriptomics with formalin-fixed paraffin-embedded material](/papers/preffect-biorxiv2025)
- [Detecting gene-signature activation in breast cancer in an absolute, single-patient manner](/papers/pmid-28327201)
- [Building applications for interactive data exploration in systems biology](/papers/acm)
- [A deep learning approach to capture the essence of *Candida albicans* morphologies](/papers/candescence-asm2022)
- [Reproducible data analysis pipelines for precision medicine](/papers/walrus)

## Selected software

- [MIxT](/software/mixt) — multi-tissue transcriptional integration.
- [PREFFECT](/software/preffect) — generative modelling for FFPE RNA-seq.
- [Candescence](/software/candescence) — *C. albicans* morphology classifier.
- [deep-fMC](/software/deep-fmc) — functional microbial configurations from gut metagenomes.

## Linked websites

- [Tumor–blood interactions in breast cancer patients](https://idc-blood.mixt.schulich.uwo.ca/)
- [Tumor epithelium–stroma interactions in breast cancer](https://idc-stroma.mixt.schulich.uwo.ca/)
