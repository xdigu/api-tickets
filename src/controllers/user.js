const { User } = require('../models');
const responseHandler = require('../constants/responseHandler');


class UserController {
    async create(req, res) {
        const { name, email } = req.body;

        await User.create({ name, email })
            .then(user => {
                const data = user;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                responseHandler.modelError(res, err);
            });
    }

    async index(req, res) {
        await User.findAll()
            .then(users => {
                const data = users;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                responseHandler.modelError(res, err);
            });
    }

    async get(req, res) {
        const { user_id } = req.params;

        if (!user_id || isNaN(user_id)) {
            const message = 'You must provide a user_id.';
            return responseHandler.badRequest(res, { message });
        }

        await User.findByPk(user_id, {
            attributes: ['id', 'name', 'email'],
        })
            .then(user => {
                if (!user) {
                    const message = 'User not found.';
                    return responseHandler.notFound(res, { message });
                } else {
                    const data = user;
                    return responseHandler.success(res, { data });
                }
            })
            .catch(err => {
                responseHandler.modelError(res, err);
            });
    }

    async put(req, res) {
        const { user_id } = req.params;
        const { name, email } = req.body;

        if (!user_id || isNaN(user_id)) {
            const message = 'You must provide a user_id.';
            return responseHandler.badRequest(res, { message });
        }

        await User.findByPk(user_id)
            .then(user => {
                if (!user) {
                    const message = 'User not found.';
                    return responseHandler.notFound(res, { message });
                }

                user.update({ name, email })
                    .then(user_updated => {
                        const data = user_updated;
                        return responseHandler.success(res, { data });
                    })
                    .catch(err => {
                        responseHandler.modelError(res, err);
                    });
            })
            .catch(err => {
                responseHandler.modelError(res, err);
            });
    }

    async delete(req, res) {
        const { user_id } = req.params;

        if (!user_id || isNaN(user_id)) {
            const message = 'You must provide a user_id.';
            return responseHandler.badRequest(res, { message });
        }

        await User.findByPk(user_id)
            .then(user => {
                if (!user) {
                    const message = 'User not found.';
                    return responseHandler.notFound(res, { message });
                }

                user.destroy();

                const message = 'User was deleted.';
                return responseHandler.success(res, { message });
            })
            .catch(err => {
                responseHandler.modelError(res, err);
            });
    }
}

module.exports = new UserController();
