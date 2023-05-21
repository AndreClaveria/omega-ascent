# Déploiement du projet sur netlify

---

## Comment avons-nous procédé ?

[+] Créez un compte sur Netlify : Rendez-vous sur le site de Netlify (https://www.netlify.com/) et créez un compte si vous n'en avez pas déjà un.

[+] Connectez votre dépôt : Dans votre tableau de bord Netlify, cliquez sur le bouton "New site from Git" pour connecter votre dépôt Git au service Netlify. Suivez les instructions pour autoriser l'accès à votre dépôt et sélectionnez le dépôt que vous souhaitez déployer.

[+] Configurez les paramètres du projet : Après avoir connecté votre dépôt, vous serez dirigé vers la page de configuration du projet. Assurez-vous que le répertoire de construction est correctement défini. Dans votre cas, vous pouvez le laisser par défaut ou spécifier le répertoire de construction du projet Next.js, qui est généralement ".next". Configurez d'autres paramètres tels que les variables d'environnement si nécessaire.

[+] Déployez le projet : Une fois les paramètres configurés, vous pouvez cliquer sur le bouton "Deploy site" pour déployer votre projet sur Netlify. Netlify commencera à construire et déployer votre application en utilisant les scripts définis dans votre fichier package.json.

[+] Suivez l'état du déploiement : Vous pouvez suivre l'état du déploiement sur la page du tableau de bord de Netlify. Une fois le déploiement terminé, vous verrez l'URL du site déployé.

[+] Configuration supplémentaire : Selon les besoins de votre projet, vous devrez peut-être effectuer des configurations supplémentaires sur Netlify, telles que la gestion des domaines personnalisés, la configuration des redirections ou l'activation de fonctions serverless.

[+] C'est tout ! Votre projet devrait maintenant être déployé sur Netlify et accessible via l'URL fournie. Netlify se chargera également de reconstruire et de redéployer automatiquement votre application à chaque fois que vous effectuez des modifications dans votre dépôt Git.

[+] Consultez le fichier readme.md pour obtenir le lien vers le site. 😉

---

## De notre côté

- [+] Chaque fois que nous faisons un push, un build est effectué sur Netlify. Si une erreur survient, nous devons la corriger nous-mêmes dans notre code.

- [+] Pour ce faire, nous pouvons exécuter la commande "npm run build" afin de vérifier si notre build réussit et/ou de repérer les éventuels problèmes.

- [+] Alternativement, nous pouvons exécuter la commande "npm run lint" pour afficher les avertissements.
