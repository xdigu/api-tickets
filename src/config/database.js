if (process.env.NODE_ENV === 'dev' || process.env.NODE_ENV === 'test') {
    require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })
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
