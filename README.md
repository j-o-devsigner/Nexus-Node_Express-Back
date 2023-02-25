# Back of the nexus project, a CRM developed with Postgresql, Express, React, Node . PERN Stack

you can see the references of environment variables in the config file in the root of the project,

mainly the connection to the database and secret keys such as the JWT secret and sendgrid APIkey (the service to send emails) are handled.

More about JWT [here](https://jwt.io/)
More about sendgrid [here](https://ahoy.twilio.com/sendgrid-emailbrand-rol-latam-1?utm_source=google&utm_medium=cpc&utm_term=sendgrid&utm_campaign=SendGrid_G_S_LATAM_Brand_Spanish&cq_plac=&cq_net=g&cq_pos=&cq_med=&cq_plt=gp&gclid=Cj0KCQiA3eGfBhCeARIsACpJNU8VDtn8AnWqfQyM-I6QSOCpmmzdwLYE_kWG5Ts-LVfZ3fjZj7pqTBAaAjFAEALw_wcB)

You can find SQL files about this project [here](https://drive.google.com/drive/folders/1dSXClxlydNAxuiYGwnu4jrD41Ervbf-9?usp=sharing)

## Available Scripts

Microservices are managed by PM2
before running any script you need to have PM2 installed running

### `npm install pm2 -g`

You can learn more about pm2 [here](https://pm2.keymetrics.io/)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
