---
title: "Generative and integrative modeling for transcriptomics with formalin fixed paraffin embedded material"
year: 2025
authors: "Eliseos J Mucaki, Wenhan Zhang, Aryamaan Saha, Sabina Trebinjac, Sharon Nofech-Mozes, Eileen Rakovitch, Vanessa Dumeaux, Michael T Hallett"
venue: "J. of Translational Medicine (2025), Biorxiv (2025)"
ref: "Mucaki et al. 2025. J. of Translational Medicine."
abbrev: "J. of Translational Medicine (2025)"
doi: "10.1186/s12967-025-07031-y"
pdf: "/assets/pdfs/papers/preffect_paper_published.pdf"
image: "/assets/images/papers/preffect_biorxiv2025.png"
tag: "Methods"
summary: "FFPE-derived RNA-seq data have a high rate of transcript dropout. We introduce PREFFECT, a probabilistic framework for the analysis of fRNA-seq data. PREFFECT uses generative models to fit distributions to observed expression counts while adjusting for technical and biological variables. The framework exploits multiple expression profiles from matched tissues and leverages sample-sample adjacency networks with graph attention mechanisms."
---

Formalin-fixed paraffin embedded (FFPE) samples are challenging to profile using existing high-throughput sequencing technologies, including RNA-seq. This difficulty primarily arises from the degradation of nucleic acids, a problem that becomes particularly acute with samples stored for extended periods. FFPE-derived RNA-seq (fRNA-seq) data have a high rate of transcript dropout, a property shared with single cell RNA-seq. Transcript counts also have high variance and are prone to extreme values. We introduce the PaRaffin Embedded Formalin-FixEd Cleaning Tool (PREFFECT), a probabilistic framework for the analysis of fRNA-seq data. PREFFECT uses generative models to fit distributions to observed expression counts while adjusting for technical and biological variables. The framework can exploit multiple expression profiles generated from matched tissues for a single sample (e.g., a tumor and morphologically normal tissue) in order to stabilize profiles and impute missing counts. PREFFECT can also leverage sample-sample adjacency networks that assist graph attention mechanisms to identify the most informative correlations in the data. We demonstrate how PREFFECT uses this information to more accurately compute downstream analyses such as sample clustering in several datasets.
