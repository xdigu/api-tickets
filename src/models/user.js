module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {

        name: {
            type: DataTypes.STRING,
            validate: {
                is: {
                    args: ["^[a-zA-Z\\s]*$", 'i'],
                    msg: 'name must be letters.',
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    args: true,
                    msg: 'email must be valid.',
                },
            },
        },
    });

    User.associate = function (models) {
        User.hasMany(models.Ticket
            // , {
            //     as: 'followed_user',
            //     foreignKey: 'followed_id',
            // }
        );

        User.hasMany(models.TicketMessages
            // , {
            //     foreignKey: 'follower_id',
            //     as: 'follower_user',
            // }
        );
    }

    return User;
}