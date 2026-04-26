---
name: "PREFFECT"
year: 2025
tag: "method"
blurb: "Probabilistic modeling of FFPE RNA-seq; imputes dropouts via sample-sample graph attention."
description: "FFPE-derived RNA-seq data have a high rate of transcript dropout. PREFFECT (PaRaffin Embedded Formalin-FixEd Cleaning Tool) is a probabilistic framework for fRNA-seq data analysis. It uses generative models to fit distributions to observed expression counts while adjusting for technical and biological variables."
github: "https://github.com/hallettmiket/preffect"
paper: "10.1186/s12967-025-07031-y"
details:
  - "Exploits multiple profiles from matched tissues to stabilize and impute missing counts"
  - "Leverages sample-sample adjacency networks with graph attention mechanisms"
  - "Improves downstream sample clustering"
---
