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
                const errors = err.errors;
                messageHandler.modelError(res, errors);
            });
    }

    async index(req, res) {
        await User.findAll()
            .then(users => {
                return res.json({ success: true, data: users });
            })
            .catch(err => {
                const errors = err.errors;
                messageHandler.modelError(res, errors);
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

        await User.findByPk(user_id)
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
                const errors = err.errors;
                messageHandler.modelError(res, errors);
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

        if (!name && !email) {
            return res.status(400).json({
                success: false,
                message: 'You must provide name or email on body.',
            });
        }

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found.',
            });
        }

        user.update({
            name: name ? name : user.name,
            email: email ? email : user.email
        })
            .then(user => {
                return res.json({ success: true, data: user });
            })
            .catch(err => {
                const errors = err.errors;
                messageHandler.modelError(res, errors);
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

        const user = await User.findByPk(user_id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found.',
            });
        }

        await user.destroy()

        return res.json({
            success: true,
            message: 'User was deleted.',
        });
    }
}

module.exports = new UserController();