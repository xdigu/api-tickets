const { User } = require('../models');
const messageHandler = require('../constants/messageHandler');


class UserController {
    async create(req, res) {
        const { name, email } = req.body;

        await User.create({ name, email })
            .then(user => {
                return res.json({ success: true, data: user });
            })
            .catch(err => {
                messageHandler.modelError(res, err);
            });
    }

    async index(req, res) {
        await User.findAll()
            .then(users => {
                return res.json({ success: true, data: users });
            })
            .catch(err => {
                messageHandler.modelError(res, err);
            });
    }

    async get(req, res) {
        const { user_id } = req.params;

        if (!user_id || isNaN(user_id)) {
            return res.status(400).json({
                success: false,
                message: 'You must provide a user_id.',
            });
        }

        await User.findByPk(user_id, {
            attributes: ['id', 'name', 'email'],
        })
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        success: false,
                        message: 'User not found.',
                    });
                } else {
                    return res.json({
                        success: true,
                        data: user,
                    });
                }
            })
            .catch(err => {
                messageHandler.modelError(res, err);
            });
    }

    async put(req, res) {
        const { user_id } = req.params;
        const { name, email } = req.body;

        if (!user_id || isNaN(user_id)) {
            return res.status(400).json({
                success: false,
                message: 'You must provide a user_id.',
            });
        }

        await User.findByPk(user_id)
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        success: false,
                        message: 'User not found.',
                    });
                }

                user.update({ name, email })
                    .then(user_updated => {
                        return res.json({
                            success: true,
                            data: user_updated
                        });
                    })
                    .catch(err => {
                        messageHandler.modelError(res, err);
                    });
            })
            .catch(err => {
                messageHandler.modelError(res, err);
            });
    }

    async delete(req, res) {
        const { user_id } = req.params;

        if (!user_id || isNaN(user_id)) {
            return res.status(400).json({
                success: false,
                message: 'You must provide a user_id.',
            });
        }

        await User.findByPk(user_id)
            .then(user => {
                if (!user) {
                    return res.status(404).json({
                        success: false,
                        message: 'User not found.',
                    });
                }

                user.destroy();

                return res.json({
                    success: true,
                    message: 'User was deleted.',
                });
            })
            .catch(err => {
                messageHandler.modelError(res, err);
            });
    }
}

module.exports = new UserController();
