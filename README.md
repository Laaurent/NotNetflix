# NotNetflix

## Groupe

-  BALI Soliman, soliman.bali@mail-ecv.fr
-  Piault Florian, florian.piault@mail-ecv.fr
-  QUENEL Laurent, laurent.quenel@hotmail.fr

### Premier terminal

```
cd api
npm i
nodemon
```

### Deuxième terminal

```
cd client
npm i
npm run dev
```

### Swagger

[Api-docs](http://localhost:4000/api-docs/).

### Dépendances front :

-  axios
-  pinia
-  vue
-  vue-router
-  vue-spinner
-  vue3-cookies
-  headlessui/vue
-  heroicons/vue
-  tailwindcss/aspect-ratio
-  tailwindcss/forms
-  tailwindcss/line-clamp
-  tailwindcss/typography
-  types/tailwindcss
-  vitejs/plugin-vue
-  autoprefixer
-  prettier-plugin-tailwindcss
-  tailwindcss
-  vite

### Dépendances api :

-  bcryptjs
-  body-parser
-  cookie-parser
-  cors
-  dotenv
-  express
-  express-joi-validation
-  joi
-  jsonwebtoken
-  nodemon
-  sequelize
-  sqlite3
-  sequelize-cli
-  swagger-jsdoc
-  swagger-ui-express

### Middlewares

-  **verifyToken** : Verifie le token valide dans le header et donc que l'utilisateur soit bien connecté,
-  **checkIdentity** : Verifie le mot de passe de l'utilisateur qui essaye de se connecter,
-  **isAuthorize** : Verifie que l'utilisateur appartient bien au groupe "admin",
-  **checkDuplicate** : Verifie si le mail est deja utilisé,
