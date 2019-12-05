module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
        name: DataTypes.STRING,
    }, { tableName: 'Categories' });

    Category.associate = function (models) {
        Category.hasMany(models.Ticket
            , {
                foreignKey: 'category_id',
                as: 'Ticket',
            }
        );
    };

    return Category;
}