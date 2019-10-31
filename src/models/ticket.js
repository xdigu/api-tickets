module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
        subject: DataTypes.STRING,
        is_closed: DataTypes.BOOLEAN,
    });

    Ticket.associate = function (models) {
        Ticket.belongsTo(models.User
            , {
                foreignKey: 'user_id',
                as: 'User',
            }
        );

        Ticket.belongsTo(models.Category
            , {
                foreignKey: 'category_id',
                as: 'Category',
            }
        );

        Ticket.hasMany(models.TicketMessages
            , {
                foreignKey: 'ticket_id',
                as: 'TicketMessages',
            }
        );
    };

    return Ticket;
}
