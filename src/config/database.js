
module.exports = {
    dialect: 'sqlite',
    storage: 'src/database/database.sqlite',
    logging: false,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
