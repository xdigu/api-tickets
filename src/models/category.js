module.exports = (sequelize, DataTypes) => {
    const Categoty = sequelize.define('Categoty', {
        name: DataTypes.STRING,
    });

    Categoty.associate = function (models) {
        Categoty.hasMany(models.Ticket
            // , {
            //     as: 'followed_user',
            //     foreignKey: 'followed_id',
            // }
        );
    };

    return Categoty;
}