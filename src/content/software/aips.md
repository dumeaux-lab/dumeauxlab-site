---
name: "AIPS"
year: 2017
tag: "method"
blurb: "Absolute Inference of Patient Signatures — single-patient pathway activation from gene expression."
description: "AIPS identifies the activation status of 1,733 biological processes from an individual breast cancer microarray or RNA-seq profile — without requiring a broad cohort. Inferred pathway state is not affected by dataset composition."
github: "https://github.com/meoyo/AIPS"
paper: "10.1186/s13058-017-0824-7"
install: "R CMD INSTALL AIPS_1.0.0.tar.gz

# In R:
library(AIPS)
library(Biobase)
openVignette()"
details:
  - "1,773 validated models across 10 breast cancer datasets"
  - "74.5% of models distinguish luminal A from luminal B"
  - "Works on microarray and RNA-seq (Kallisto) input"
  - "N-of-1: no cohort required"
---
