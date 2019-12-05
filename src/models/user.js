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
    }, { tableName: 'Users' });

    User.associate = function (models) {
        User.hasMany(models.Ticket
            , {
                foreignKey: 'user_id',
                as: 'Ticket',
            }
        );

        User.hasMany(models.TicketMessages
            , {
                foreignKey: 'user_id',
                as: 'TicketMessages',
            }
        );
    }

    return User;
}