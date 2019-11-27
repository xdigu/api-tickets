/**
 * Used to defne witch environment will be based in NODE_ENV
 * 
 * The accpeted environment is: test, dev and prd
 */
const NODE_ENV = process.env.NODE_ENV;

if (NODE_ENV) {
    require('dotenv').config({ path: NODE_ENV === 'prd' ? '.env' : `.env.${NODE_ENV}` })
}

module.exports = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    dialect: process.env.DB_DIALECT || 'sqlite',
    storage: 'src/database/database.sqlite',
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
