## To contribute to this project you need to

### Install this to your machine

a) Node js

b) npm (though it come preinstalled in newer version of node)

c) mongoDB (you can also use mongo atlas as an alternative)

### Steps

1. Fork this project to your account by clicking on fork button on the top right corner of this repositories.
2. Cloning forked repositories from your account to your local machine by running following command on your terminal.

```bash
git clone https://github.com/<your username>/Facha-Help-Backend
```

3. Then run following command

```bash
git Facha-Help-Backend
```

4. Installing all external dependencies this project rely upon by running following command (make sure your system has node and npm installed)

```bash
npm install
```

5. Installing "dotenv" module as dev depdencies for setting up enviroment variables by running following command

```bash
npm install dotenv --save-dev
```

6. Setting up enviroment variables by creating a file named ".env" just right inside the project folder. Inside the ".env" file your need to two variable as:

```bash
PORT = <Port at which your server will listen in development mode>
DB_URL = <URL to your either local or remote(atlas) mongo database>
```

Quick Tip:

For local mongo database, DB_URL will look like this:

```bash
mongodb://localhost/<databse name>
```

7. Now after everything setup, development server will run by running following command

```bash
npm run dev
```

#### Thank you so much for taking interest in my project.

#### Hoping to see a good PR with some bug fixed and new feature added on my way.
