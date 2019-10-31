module.exports = (sequelize, DataTypes) => {
    const TicketMessages = sequelize.define('TicketMessages', {
        message: DataTypes.STRING,
    });

    TicketMessages.associate = function (models) {
        TicketMessages.belongsTo(models.User
            , {
                foreignKey: 'user_id',
                as: 'User',
            }
        );

        TicketMessages.belongsTo(models.Ticket
            , {
                foreignKey: 'ticket_id',
                as: 'Ticket',
            }
        );
    };

    return TicketMessages;
}
