// https://blog.logrocket.com/using-sequelize-with-typescript/

import { Sequelize } from 'sequelize';

// const dbName = process.env.DB_NAME as string;
// const dbUser = process.env.DB_USER as string;
// const dbHost = process.env.DB_HOST as string;
// const dbPassword = process.env.DB_PASS as string;

const sequelizeConnection = new Sequelize({
    dialect: 'sqlite',
    storage: 'temp/db.sqlite',
});

export default sequelizeConnection;
