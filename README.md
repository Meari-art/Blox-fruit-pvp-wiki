# Blox Fruit PVP Wiki - Structure physique complète

Ce repository contient maintenant la **structure physique des pages principales** du site, avec un routing App Router prêt pour l'intégration des données réelles.

## Pages créées

### Public
- `/`
- `/fruits`, `/fruits/[slug]`
- `/weapons`, `/weapons/[slug]`
- `/fighting-styles`, `/fighting-styles/[slug]`
- `/combos`, `/combos/[slug]`
- `/builds`
- `/tier-list`, `/methodologie-tier-list`
- `/blog`, `/blog/[slug]`
- `/classement`
- `/profil/[username]`
- `/contribuer`
- `/recherche`
- `/equipement-recommande`
- `/supporter`, `/supporter/success`, `/supporter/cancel`
- `/regles-communaute`
- `/roadmap`
- `/about`, `/contact`, `/faq`
- `/legal/cgu`, `/legal/privacy`

### Admin
- `/admin`
- `/admin/moderation`
- `/admin/users`
- `/admin/meta-history`

### API
- `/api/auth/[...nextauth]`
- `/api/wiki/[slug]/edit`
- `/api/tier-vote`
- `/api/search`
- `/api/stripe/checkout`

## Architecture UI ajoutée

- `components/SiteHeader.tsx` : navigation globale.
- `components/PageShell.tsx` : structure commune de page.
- `components/SectionCards.tsx` : grille de cartes pour index/listings.
- `components/RichEditor.tsx` : éditeur riche TipTap.
- `components/ComboScene.tsx` : scène Three.js.

## Notes

- L'auth, le vote pondéré et Stripe sont branchés au niveau structure/API.
- Les pages sont prêtes à recevoir les données Prisma réelles et la logique métier fine.
