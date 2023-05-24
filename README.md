
# AfricaConnect - Website
### Tester le changement

1. Si possible, testez toutes les modifications visuelles dans les dernières versions des navigateurs courants, tant sur ordinateur que sur mobile.
2. Exécutez la commande `npm run check-all` (cela exécutera Prettier, ESLint et validera les types).

### Pousser les changements

1. `git add -A && git commit -m "Mon message"` (remplacez `Mon message` par un message de validation, tel que `Corriger le logo de l'en-tête sur Android`) pour mettre en scène et valider vos modifications.
2. `git push nom-de-mon-fork nom-de-ma-branche` 

3. Rendez-vous sur le dépôt [AfricaConnect-Website](https://github.com/AfricaConnect-1/africaconnect-website) et vous devriez voir les branches récemment poussées.
4. Suivez les instructions de GitHub.
5. Si possible, incluez des captures d'écran des modifications visuelles. Une version de prévisualisation est déclenchée après que vos modifications ont été poussées sur GitHub.

## Pour Commencer

Tout d'abord, lancez le serveur de développement :

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```
Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

Vous pouvez commencer à modifier la page en modifiant `src/pages/index.tsx`. a page se met à jour automatiquement lorsque vous modifiez le fichier.

Ce projet utilise [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) pour optimiser et charger automatiquement Inter, une police personnalisée de Google.

## En savoir plus

Pour en savoir plus sur Next.js, consultez les ressources suivantes :

- [Documentation de Next.js](https://nextjs.org/docs) - découvrez les fonctionnalités et l'API de Next.js.
- [Apprendre Next.js](https://nextjs.org/learn) - un tutoriel interactif sur Next.js.
