# Don't Poison Yourself (Allergen Guard)

An AI-assisted, client-side web application designed to scan personal care, skincare, and cosmetic ingredient lists against customized allergen profiles, track 48-hour patch tests, and analyze long-term reaction trends.

Built for **WRIT 40363: Multimedia Authoring — Apps & eBooks**.

---

## Live Links & Repository

- **Live Deployment:** [https://charlottesking.github.io/-Don-t-Poison-Yourself-/](https://charlottesking.github.io/-Don-t-Poison-Yourself-/)
- **Source Repository:** [https://github.com/charlottesking/-Don-t-Poison-Yourself-](https://github.com/charlottesking/-Don-t-Poison-Yourself-)

---

## Overview & Purpose

Many cosmetic and personal care products contain complex chemical nomenclature, proprietary fragrances, and hidden allergens that make ingredient lists difficult to decipher. **Don't Poison Yourself** empowers users to cross-reference full product formulas with their personal allergy triggers instantly, without sending sensitive health logs or personal data to third-party servers.

---

## Key Features

1. **Intelligent Ingredient Parser & Scanner**
   - Ingests comma-separated ingredient lists from personal care products.
   - Cleans and normalizes chemical names (removing bracketed descriptors, case variances, and rogue punctuation).
   - Flags dangerous ingredients against preset and custom trigger profiles in real time.

2. **Custom & Preset Allergen Profiles**
   - Supports preset triggers for high-frequency contact dermatitis culprits (e.g., Fragrance / Parfum, Methylisothiazolinone, Cocamidopropyl Betaine).
   - Allows users to add and manage custom chemical and plant triggers dynamically.

3. **48-Hour Patch-Test Tracker**
   - Built-in timer and checkpoint logging to guide safe product patch testing before full application.

4. **6-Month Reaction Analytics**
   - Time-series reaction log tracking dates, severity ratings, and offending products to visualize trigger trends over time.

5. **Client-Side Data Persistence**
   - Uses the browser's `localStorage` API to ensure trigger lists, patch tests, and reaction histories persist across sessions securely and privately.

---

## Tech Stack & Architecture

- **Markup:** Semantic HTML5 (`<main>`, `<section>`, `<article>`, accessible form labels, ARIA landmarks)
- **Styling:** Modern CSS3 (Flexbox, CSS Grid, custom properties / design tokens, WCAG AA compliant contrast)
- **Scripting:** Vanilla JavaScript (ES6+ modular logic, RegExp string normalization, DOM event handling, Web Storage API)
- **Development Workflow:** AI-assisted development, prompt engineering, Git version control, GitHub Pages

---

## Verification & Test Cases

- **Flagged Trigger Test:** Dove Body Wash containing *Cocamidopropyl Betaine* correctly triggers an immediate warning badge.
- **Safe Product Test:** Vanicream Gentle Body Wash scans clean with zero allergen matches.
- **Compound Match Test:** Multi-ingredient text blobs with mixed casing and parentheses (e.g., *Fragrance (Parfum)*, *Linalool*) match user trigger profiles without false negatives.

---

## Author

**Charlotte King**  
*Digital Culture & Data Analytics — Texas Christian University*  
- [GitHub Profile](https://github.com/charlottesking)