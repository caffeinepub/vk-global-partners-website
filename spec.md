# VK Global Partners Website

## Current State
New project. No existing pages or backend logic.

## Requested Changes (Diff)

### Add
- 5-page corporate website: Home, About Us, Services, Industries We Serve, Contact
- React Router-based multi-page navigation with clean top nav and footer
- Home page: hero section, services overview cards, "Why Choose Us" section, Industries We Serve teaser, dual CTAs
- About Us page: company positioning, Mission, Vision, Core Values sections
- Services page: Market Research (supplier identification, competitor analysis, feasibility, pricing intelligence) and Procurement Solutions (vendor sourcing, negotiation, quality inspection, logistics, end-to-end supply chain)
- Industries We Serve page: 6 industries (Industrial Machinery, Manufacturing, Construction Materials, Engineering Components, Custom Fabrication, Import & Export) each with icon and description
- Contact page: contact form (Name, Company Name, Email, Phone, Requirement), prominent phone display, office address, Google Maps embed, WhatsApp button
- Floating WhatsApp button (all pages) linking to +91 9220406592
- SEO meta tags on Home page
- Motoko backend to store contact form submissions
- Navigation: logo/company name, links to all 5 pages, CTA button
- Footer: contact info, quick page links, services links, copyright

### Modify
- Nothing (new project)

### Remove
- Nothing

## Implementation Plan
1. Select no special Caffeine components (plain backend sufficient)
2. Generate Motoko backend with a ContactSubmission data model and submitContact / getContacts endpoints
3. Generate professional images: hero (global trade/supply chain), services, industries
4. Build frontend with React Router, all 5 pages, shared Navbar and Footer components, floating WhatsApp FAB
5. Wire contact form to backend canister
6. Apply UI Craft polish pass for premium corporate feel
7. Deploy
