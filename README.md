Create project:
#Lerna:


#Create NextJS:
```bash
npx create-next-app frontend-nextjs --use-npm --example "https://github.com/vercel/next-learn-starter/tree/master/learn-starter"

Success! Created frontend-nextjs at /home/thanhtien/DeveraCourse/FoodStore-Devera/packages/frontend-nextjs
Inside that directory, you can run several commands:

  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd frontend-nextjs
  npm run dev
```


#3. Create Strapi:
```bash
npx create-strapi-app backend-strapi
npx: installed 143 in 8.603s
? Choose your installation type Custom (manual settings)
? Would you like to use a template? (Templates are Strapi configurations designed for a specifi
c use case) No
? Choose your default database client mongo
? Database name: backend-strapi
? Host: 172.17.0.2
? +srv connection: false
? Port (It will be ignored if you enable +srv): 27017
? Username: thanhtien
? Password: ******
? Authentication database (Maybe "admin" or blank): admin
? Enable SSL connection: No

Creating a project with custom database options.
Creating a new Strapi application at /home/thanhtien/DeveraCourse/FoodStore-Devera/packages/backend-strapi.
Creating files.
Dependencies installed successfully.

Your application was created at /home/thanhtien/DeveraCourse/FoodStore-Devera/packages/backend-strapi.

Available commands in your project:

  yarn develop
  Start Strapi in watch mode.

  yarn start
  Start Strapi without watch mode.

  yarn build
  Build Strapi admin panel.

  yarn strapi
  Display all available commands.

You can start by doing:

  cd /home/thanhtien/DeveraCourse/FoodStore-Devera/packages/backend-strapi
  yarn develop
```