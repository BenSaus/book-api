// https://blog.logrocket.com/using-sequelize-with-typescript/
import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';
dotenv.config();

const dbString = process.env.DB_CONNECTION_STRING as string;

// const dbName = process.env.DB_NAME as string;
// const dbUser = process.env.DB_USER as string;
// const dbHost = process.env.DB_HOST as string;
// const dbPassword = process.env.DB_PASS as string;

// SQLite db
// const sequelizeConnection = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'temp/db.sqlite',
//     logging: false,
// });

const sequelizeConnection = new Sequelize(dbString, {
    dialect: 'postgres',
    logging: false,
});

export default sequelizeConnection;
