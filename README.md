Notes: Header

Mobile-first: nav starts as a collapsible dropdown under the header, becomes an inline row at 1024px. Phone number is hidden below 768px to save space (CTA button + hamburger remain).
aria-expanded, aria-controls, aria-current="page", and a skip link are in place. Toggle button gets a real accessible label that updates open/close.
Sticky header with border-bottom instead of a shadow-on-scroll trick — cheap, no JS/scroll listener needed.
.btn and .btn--primary are built as standalone reusable classes — will reuse for "Book Consultation," "Learn About Our Care," etc. across the page.
Font files aren't in your repo yet — swap the @font-face src paths once you drop the actual .woff2 files into assets/fonts/, or tell me and I'll switch to a Google Fonts <link> instead.
Logo assumes an SVG at assets/images/logo/logo.svg — send the actual asset when ready, or I can leave it as-is
