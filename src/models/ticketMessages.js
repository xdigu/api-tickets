module.exports = (sequelize, DataTypes) => {
    const TicketMessages = sequelize.define('TicketMessages', {
        message: DataTypes.STRING,
    });

    TicketMessages.associate = function (models) {
        TicketMessages.belongsTo(models.User
            // , {
            //     as: 'followed_user',
            //     foreignKey: 'followed_id',
            // }
        );

        TicketMessages.belongsTo(models.Ticket
            // , {
            //     as: 'followed_user',
            //     foreignKey: 'followed_id',
            // }
        );
    };

    return TicketMessages;
}