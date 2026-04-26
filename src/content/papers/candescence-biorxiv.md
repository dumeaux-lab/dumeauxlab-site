---
title: "A deep learning approach to capture the essence of Candida albicans morphologies"
year: 2021
authors: "Van Bettauer, Anna Carolina Borges Pereira Costa, Raha P Omran, Samira Massahi, Eftyhios Kirbizakis, Shawn Simpson, Vanessa Dumeaux, Chris Law, Malcolm Whiteway, Michael T Hallett"
venue: "Biorxiv (2021)"
ref: "Bettauer et al. 2021. Biorxiv."
abbrev: "Biorxiv (2021)"
doi: "10.1101/2021.06.10.445299"
pdf: "/assets/pdfs/papers/candescence-biorxiv.pdf"
image: "/assets/images/candescence-pix.jpg"
tag: "Methods"
summary: "Candescence detects C. albicans cells from DIC microscopy and labels each with one of nine morphologies using a fully convolutional one-stage object detector trained with a novel cumulative curriculum-based strategy. Generative adversarial networks capture the essence of each morphology and identify subcomponents of the latent space that control technical variables, developmental trajectories, and morphological switches."
---

We present deep learning-based approaches for exploring the complex array of morphologies exhibited by the opportunistic human pathogen C. albicans. Our system entitled Candescence automatically detects C. albicans cells from Differential Image Contrast microscopy, and labels each detected cell with one of nine vegetative, mating-competent or filamentous morphologies. The software is based upon a fully convolutional one-stage object detector and exploits a novel cumulative curriculum-based learning strategy that stratifies our images by difficulty from simple vegetative forms to more complex filamentous architectures. Candescence achieves very good performance on this difficult learning set which has substantial intermixing between the predicted classes. To capture the essence of each C. albicans morphology, we develop models using generative adversarial networks and identify subcomponents of the latent space which control technical variables, developmental trajectories or morphological switches. We envision Candescence as a community meeting point for quantitative explorations of C. albicans morphology.
