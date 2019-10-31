module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
    });

    Category.associate = function (models) {
        Category.hasMany(models.Ticket
            // , {
            //     as: 'followed_user',
            //     foreignKey: 'followed_id',
            // }
        );
    };

    return Category;
}