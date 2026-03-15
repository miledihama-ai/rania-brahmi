# Product Requirements Document (PRD): Hierarchy of Laws Module

## 1. Introduction
**Objective:** The primary goal of this module within the Rania Platform is to digitize, map, and automate the analysis of the hierarchy of laws in the Tunisian legal system. This is derived directly from the fundamental principles of constitutional law, the theories of Hans Kelsen, and the established jurisprudence of the Constitutional Council and Administrative Tribunal.

## 2. Target Audience
- **Legal Professionals (Lawyers, Magistrates):** To quickly verify the constitutionality, validity, and conformity of laws in their cases.
- **Law Students & Researchers:** To interactively study the relationship between different categories of legal norms.
- **Legislators & Drafters:** To ensure new draft laws strictly comply with organic laws and constitutional requirements prior to formal adoption.

## 3. Core Concepts & Business Logic
Based on the integrated academic research (Chahinez Elleuch & Eya Mathlouthi, 2025-2026), the system will model the following hierarchy:

1. **The Constitution:** The supreme norm.
2. **Organic Laws:** These function as a complement to the constitution. They possess superiority over ordinary laws specifically regarding their reserved domains (e.g., human rights, organization of local authorities).
3. **Ordinary Laws:** Standard laws voted on by the parliament.
4. **Referendum Laws:** Adopted directly by the people.

### Key Business Rules for the Engine:
- **Material Validity (Domain Separation):** Ordinary laws absolutely cannot intervene in domains exclusively reserved for organic laws (as dictated by Art. 65 of the 2014 Constitution and Art. 75 of the 2022 Constitution). 
- **Formal Validity (Procedural Respect):** The system must track and enforce the distinct procedural pathways. Organic laws require a higher stringency (e.g., absolute majority) compared to ordinary laws.
- **Conflict Management & Subordination:** If an ordinary law contradicts an organic law, the system should flag the ordinary law as potentially unconstitutional because it violates the constitution's delegation of competency.

## 4. Functional Requirements

### F1. Norm Classification & Ingestion Engine
- **Description:** The system shall allow users to input or select a legal text and automatically/manually classify its rank (Constitution, Organic, Ordinary, Referendum).
- **Acceptance Criteria:** Every uploaded law must have a mandatory `Type` metadata field.

### F2. Domain Compliance Checker
- **Description:** The system must cross-reference the subject matter of an ordinary law against the reserved domains of organic laws.
- **Acceptance Criteria:** If an overlap is detected, the system shall immediately generate a "Competency Warning" alerting the user to a potential constitutional violation.

### F3. Validity & Conformity Analysis Dashboard
- **Internal Validity Check:** Verify if the text was adopted matching the correct procedural majority.
- **External Validity Check:** Scan for substantive contradictions with higher-ranking norms using the platform's analysis engine.

### F4. Jurisprudence & Precedent Linking
- **Description:** The system should link any detected competency conflicts to relevant historical jurisprudence.
- **Acceptance Criteria:** Must include references to decisions from the Administrative Tribunal (since 1983) and the Instance Provisoire de Contrôle de la Constitutionnalité.

## 5. Non-Functional Requirements
- **Accuracy & Integrity:** The legal logic must strictly adhere to the nuances of the Tunisian constitutional frameworks (1959, 2014, and 2022 constitutions).
- **Usability (Ultra-Premium UX):** Present complex legal hierarchies in clear, visually impressive formats (e.g., a dynamic, interactive Kelsenian pyramid UI component). The styling should match the platform's professional "Supreme Court" theme.

## 6. Future Enhancements
- **QPC Integration:** Tracking and integrating the Question Prioritaire de Constitutionnalité (QPC) workflow.
- **AI-Powered Proactive Scanning:** Utilizing NLP to automatically suggest potential legal conflicts as draft laws are being written.
