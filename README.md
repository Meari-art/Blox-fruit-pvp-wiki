# Blox Fruit PVP Wiki - Blueprint Next.js 14

Architecture de référence pour lancer une plateforme communautaire PVP à forte qualité de données, modération robuste et SEO avancé.

## Ce qui est inclus

- **Schéma Prisma complet**: utilisateurs, rôles, réputation, badges, combos, builds, votes pondérés et historique d'édition.
- **Workflow wiki éditable**: proposition de modification avec revue modérateur.
- **Système META pondéré**: calcul du tier via réputation des votants.
- **Monétisation discrète**: endpoint Stripe pour statut Supporter sans paywall.
- **Dashboard admin**: vue des éditions en attente, supporters actifs et top contributeurs.
- **Anti-spam**: rate limiting en mémoire + détection de motifs spam.
- **SEO**: metadata Open Graph + sitemap dynamique.

## Priorités produit respectées

1. Qualité des données via modération et versioning.
2. Système communautaire avec progression réputation/badges.
3. Performance: architecture simple, Prisma optimisé, pages ciblées.
4. SEO: routes dédiées, metadata, sitemap.
5. Monétisation secondaire: pubs limitées + supporter optionnel + affiliation séparée.

## Variables d'environnement minimales

```bash
DATABASE_URL=postgresql://...
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_...
STRIPE_SUPPORTER_PRICE_ID=price_...
```

## Étapes suivantes recommandées

- Intégrer Clerk ou NextAuth pour remplacer le `stubUserId` dans les APIs.
- Ajouter un éditeur riche (MDX/TipTap) pour les pages wiki.
- Ajouter un moteur de recherche instantané (Postgres full-text ou Meilisearch).
- Brancher une scène Three.js dans les pages `/combos/[slug]` pour visualiser les séquences.
