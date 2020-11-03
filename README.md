# A Test App which sends Push Notification to the User.

This project uses NodeJS and Postgres. It sends a simple push notification whose content is fetched from postgres database.

### Follow these steps to run this project on your localhost.

##### To Setup the project:
1. Clone the repo and run `npm install` inside the `push_notif_firstapp` folder.
2. Generate VAPID Keys from [here](https://tools.reactpwa.com/vapid) and fill them in the `.env.example` file and rename it to `.env`.
3. Fill in the `publicKey` inside `client/client.js`.

##### To Setup the database:
1. Make sure you have postgres running on your machine. If not, please install it.
2. Navigate to `.env` and fill in your postgres details.
3. Run the commands inside `database.sql` in your psql shell(comes with postgres).

##### Running it locally:
1. Run `npm start` inside the `push_notif_firstapp` folder.
2. Open your browser and visit this [link](http://localhost:5000).
