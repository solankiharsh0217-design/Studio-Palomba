# Website Analysis & Base44 Prompt Creation Workflow

## Overview
This document describes the complete workflow for analyzing ANY website and creating Base44 prompts for remaking it with a new design.

## Prerequisites

### Required Software
- Python 3.x 
- OpenCode CLI or terminal with bash

### Required Files
1. Source data file (could be ODS, CSV, Excel, or just URLs)
2. (Optional) UI/UX skill: `ui-ux-pro-max` — useful for generating design system recommendations during analysis, but **do not reference the skill in the final Base44 prompt**

### Required Skills
- `ui-ux-pro-max` skill (optional) — can be used internally to help generate design recommendations. The final prompt delivered to the user must **not** mention this skill.

### Directory Structure
```
/Your Workspace/
├── source_file.ods          # Source leads file (or CSV/Excel)
├── prompts/                   # Output prompts
│   ├── 01-[project-name]/
│   ├── 02-[project-name]/
│   └── ...
└── .opencode/skills/          # UI/UX skill (optional, for internal use only)
    └── ui-ux-pro-max/
```

## Workflow Steps

### Step 1: Read/Obtain Lead Data
If using ODS/Excel file:
```bash
python3 -c "
import pandas as pd
df = pd.read_excel('/path/to/source_file.ods', engine='odf')
print(df.to_string())
"
```
Or simply use the website URL provided by the user.

### Step 2: Analyze Website Thoroughly (Use Explore Agent + Sitemap)
Launch an explore task agent to analyze the website. In addition to manual page analysis, **always check the sitemap** for hidden pages:

**Sitemap Discovery (Critical):**
- Check these URLs:
  - `https://site.com/sitemap.xml`
  - `https://site.com/page-sitemap.xml`
  - `https://site.com/sitemap_index.xml`
  - `https://site.com/wp-sitemap.xml`
- From the page sitemap, extract **every** page URL (especially `/opere/`, `/realizzazioni/`, `/gallery/`, `/portfolio/`, `/servizi/`, `/projects/`).

```
Task: Analyze [WEBSITE URL]
Prompt: Please analyze [WEBSITE URL] thoroughly.

Extract ALL information:
1. Company name, full address, phone, email
2. All services/products offered
3. Team/staff information (for businesses with teams)
4. ALL pages on the website (homepage, about, services, contact, blog, gallery/opere, etc.)
5. Opening hours / business hours
6. Any special offers or pricing
7. About/company information
8. Contact details
9. Social media links
10. Any downloadable resources (PDFs, guides)

**Special attention**: Look for a dedicated "Opere", "Realizzazioni", "Gallery", "Works" or "Portfolio" page. If it exists, treat it as a main page (not low priority).

For each page found, note the URL path and what content it contains.
```

### Step 3: Determine Brand Colors (Critical Step)
IMPORTANT: The color theme should be BASED on the original website's branding:

1. **Primary Method**: Extract colors from the original site's logo
   - Look at the logo image for dominant colors
   - Note brand colors used throughout the site

2. **If logo cannot be extracted**: Use the site's existing color palette
   - Check primary/brand colors used in headers, buttons, accents
   - Note the hex codes if visible

3. **For guidance only** (optional): Use UI/UX skill:
```bash
python3 skills/ui-ux-pro-max/scripts/search.py "[industry] [style]" --design-system -p "[Project Name]"
```
This gives recommendations but the ACTUAL colors should match the original brand.

List the ACTUAL colors from the source website:
- Primary color (from logo/brand)
- Secondary color (from site accents)
- CTA/Button color
- Background color
- Text color

Example:
```
Brand Colors (from original site):
- Primary: #1E3A8A (navy blue from logo)
- Secondary: #CA8A04 (gold from logo accent)
- CTA: #F59E0B (orange button from site)
- Background: #F8FAFC (light gray from site)
- Text: #1E293B (dark slate)
```

### Step 4: Determine Image Paths (Per Site Type)
Different website platforms use different image paths. Verify by checking the website:

| Platform/CMS | Common Image Paths |
|-------------|------------------|
| WordPress | `/wp-content/uploads/` |
| Joomla | `/images/` or `/media/` |
| Custom PHP | `/images/`, `/img/`, `/assets/` |
| Shopify | CDN URLs (check directly) |
| Squarespace/Wix | CDN URLs (check directly) |

To verify, fetch test URLs:
```bash
# Test a few paths
curl -I https://site.com/images/logo.png
curl -I https://site.com/img/logo.png
curl -I https://site.com/wp-content/uploads/2023/01/logo.png
```

### Step 5: Create Project Directory
```bash
mkdir -p "/path/to/prompts/[XX]-[project-name-lowercase]/"
```

### Step 6: Create Images.txt
Extract ALL usable image URLs. Write verified working URLs - one per line:
```
https://www.site.com/img/logo.png
https://www.site.com/img/hero-banner.jpg
https://www.site.com/img/team/dr-smith.jpg
...

# If minimal images available:
# NOTE: This site uses minimal imagery. Generate appropriate images for: [list what to generate]
```

### Step 7: Create Base44 Prompt
Create the main `prompt.txt` file. Use the UI/UX skill **only internally** during creation to help generate good design recommendations. **Never include any mention of the UI/UX skill in the final prompt** delivered to the user.

#### 1. Project Header
```
Create a [TYPE] website for [Project Name] - [Location/Description].

IMAGES: FIRST use all image URLs from images.txt file. Use these images for appropriate sections. Only generate or use placeholders if images from images.txt are unavailable.
Logo and branding: Use the official [Project Name] logo and brand colors from the original site.

Apply modern, clean, premium design best practices suitable for [TYPE] websites. Ensure the design is responsive, accessible, and effectively communicates the brand values.
```

#### 2. Design System (Generate internally — do not mention skill in final prompt)
```
DESIGN SYSTEM:
Pattern: [Pattern type - e.g., Social Proof-Focused, Feature-Rich Showcase, Storytelling + Trust]
Style: [Visual style - e.g., Modern, Clean, Premium, Warm Organic Craftsmanship]
Colors: Primary #[HEX] (from original logo), Secondary #[HEX], CTA #[HEX], Background #[HEX], Text #[HEX]
Typography: [Font recommendations]. Load from: https://fonts.google.com/share?selection.family=[Font+Names]
Effects: [Effects to apply]
Avoid: [What to avoid based on site's current issues]
```

#### 3. Pages Structure
List ALL pages from the original website. For each, specify:
- Page name/path
- Content to include
- Key sections

**IMPORTANT: Reduce page count by converting low-importance pages to MODALS:**
- Sub-pages with similar content → Combine into expandable accordion/modals within parent page
- Individual service details → Show as modals within main Services page
- Team member profiles → Show as modals when clicking photos
- Case studies/before-after → Show as modal popups in gallery pages
- Location-specific content → Use tabs, not separate pages
- Low importance pages (complaints, privacy, terms) → Convert to footer links

```
================================================================================
PAGES REQUIRED - REDUCED PAGE COUNT
================================================================================

MAIN PAGES (keep as separate pages):
PAGE 1 - HOME (/): [description with content]
PAGE 2 - SERVICES (/services): All services shown as expandable modals
PAGE 3 - ABOUT/TEAM (/about): Team shown as modals on photo click
PAGE 4 - CONTACT (/contact): Contact form and location
PAGE 5 - GALLERY / OPERE / REALIZZAZIONI (/opere or /gallery): Visual gallery of completed works (use when the site has a dedicated works/projects page)

All detailed service pages converted to MODALS within Services page
All team detail pages converted to MODALS within About page
All case studies shown as MODALS within Gallery page
Low importance pages → footer links

**Note**: If the original site has a dedicated "Opere", "Realizzazioni", "Gallery", or "Portfolio" page, promote it to a main page (PAGE 5). Do not treat it as low-priority.
```

#### 4. Key Content Sections
Include specific details:
- Full address with postcode
- Phone number(s)
- Email
- Opening hours
- Team qualifications (if applicable)
- Services/products with descriptions
- Pricing (if available)
- Social media links

#### 5. Technical Requirements (Copy This Format)
```
TECHNICAL: Multi-page site. Fully responsive. Form works without JavaScript. 
- Call buttons: Use tel: links 
- Email buttons: Use mailto: links
- IMPORTANT: Auto-scroll to top on page navigation - add JavaScript that scrolls to top on each page load. No visible scroll-to-top button needed.
- ALL [services/products] displayed as MODALS or expandable accordion sections (not separate pages)
- **CRITICAL IMAGE RULE**: The website MUST use the exact image URLs from images.txt as direct `<img src>` or CSS background-image sources. Load the real photos from the original site whenever possible. **Only generate new images when a specific URL from images.txt is confirmed inaccessible (returns 404 or fails to load)**. Never invent new images when usable ones exist in images.txt.
- Use Lucide or Heroicons for icons (no emojis)
- cursor-pointer on clickables
- Hover states: 150-300ms transitions
- Responsive at: 375px, 768px, 1024px, 1440px
- **REDUCE PAGE COUNT**: Convert low-importance sub-pages to MODALS:
  - Individual service pages → Expandable modals within Services page
  - Team profiles → Detail modals when clicking team photos
  - Case studies → Modal popups in gallery
  - Location pages with similar content → Use tabs, not separate pages
  - Low importance pages (complaints, cookies, privacy) → Footer links only
```

#### 6. Content Style
```
CONTENT STYLE: [Tone - e.g., Professional but friendly, Premium and luxurious]. Emphasise "[key selling points]". Benefit-focused. Keep text concise.
```

### Step 8: Update Old Prompts (When Adding New Requirements)
Update existing prompts with new features:

1. **Add auto-scroll to top:**
   - Find "TECHNICAL:" section
   - Add: `IMPORTANT: Auto-scroll to top on page navigation - add JavaScript that scrolls to top on each page load. No visible scroll-to-top button needed.`

2. **Add modal content:**
   - Find "PAGES REQUIRED:" section
   - Add note: `Note: ALL [services/products] should be displayed as MODALS/EXPANDABLE SECTIONS within the main page, NOT as separate pages.`

3. **Add image priority:**
   - Update image section: `**IMPORTANT: FIRST use ALL image URLs from images.txt file for ALL images. Only generate new images if images from images.txt are unavailable.**`

4. **Reduce page count:**
   - Add to prompt: `IMPORTANT: Convert low-importance sub-pages to MODALS:
     - Individual service/treatment pages → Show as expandable modals within Services page
     - Team profiles → Show as modals when clicking team member photos
     - Case studies/before-after → Show as modal popups in gallery
     - Location-specific pages with similar content → Use tabs, not separate pages
     - Low importance pages (complaints, cookies, privacy) → Footer links only`

5. **Add dedicated Gallery page when it exists:**
   - If the site has `/opere/`, `/realizzazioni/`, `/gallery/`, or similar, add it as a main page:
     `PAGE 5 - OPERE / GALLERY (/opere): Dedicated visual gallery of completed works with project cards that open detailed modals.`

## Verification Checklist

Before finalizing each prompt, verify:
- [ ] All MAIN pages from original site are included (including Gallery/Opere if it exists)
- [ ] Sitemap was checked (`page-sitemap.xml`) to discover hidden pages
- [ ] Color theme MATCHES original brand (logo colors)
- [ ] Image URLs verified working (or noted to generate)
- [ ] Content displayed as MODALS (not separate pages)
- [ ] Page count REDUCED using modal conversion
- [ ] Auto-scroll to top on navigation (no visible button)
- [ ] Working tel: and mailto: links specified
- [ ] Responsive breakpoints defined
- [ ] Image priority instruction included and strengthened ("use exact URLs, generate only if inaccessible")
- [ ] **No mention of UI/UX skill or internal tools remains in the final prompt**

## Important Notes

1. **Color Theme**: ALWAYS base on the original site's logo/brand colors, NOT generated themes. Only generate new if absolutely necessary.

2. **All Business Types**: This workflow works for:
   - Dental practices
   - Medical clinics  
   - E-commerce stores
   - Service businesses
   - Restaurants
   - Hotels
   - Any website remake project

3. **Image Priority**: Always try to use existing site images first before generating new ones. Use the strengthened wording: "Use exact URLs from images.txt as direct sources. Generate only when the URL is confirmed inaccessible."

4. **Modal vs Pages**: For multiple services/products, use modals/expandable sections to keep page count manageable.

5. **Do Not Leak Internal Tools**: The final Base44 prompt must **never** mention `ui-ux-pro-max`, "UI/UX skill", or any internal agent tools. These can be used during research and prompt writing, but must be removed before delivery.

6. **Always Check for Gallery Page**: Many service businesses have a dedicated "Opere / Realizzazioni / Gallery / Portfolio" page. Discover it via sitemap and include it as a main page (usually PAGE 5).

---

## Example Prompts Summary Table

| # | Project | Primary Color (from Logo) | Secondary | CTA | Theme Source |
|---|---------|---------------------------|-----------|-----|--------------|
| 1 | Dental Practice A | #0EA5E9 (logo blue) | #38BDF8 | #FBBF24 | Logo |
| 2 | Dental Practice B | #15803D (logo green) | #22C55E | #F59E0B | Logo |
| 3 | Dental Practice C | #7F1D1D (logo burgundy) | #B91C1C | #D4AF37 | Logo |
| ... | ... | ... | ... | ... | ... |

**Rule**: Use the exact colors from each site's own logo/branding.