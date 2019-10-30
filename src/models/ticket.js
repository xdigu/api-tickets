module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define('Ticket', {
        subject: DataTypes.STRING,
        is_close: DataTypes.BOOLEAN,
    });

    Ticket.associate = function (models) {
        Ticket.belongsTo(models.User
            // , {
            //     as: 'followed_user',
            //     foreignKey: 'followed_id',
            // }
        );

        Ticket.belongsTo(models.Categoty
            // , {
            //     foreignKey: 'follower_id',
            //     as: 'follower_user',
            // }
        );

        Ticket.hasMany(models.TicketMessages
            // , {
            //     foreignKey: 'follower_id',
            //     as: 'follower_user',
            // }
        );
    };

    return Ticket;
}