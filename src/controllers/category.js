const { Category } = require('../models');
const responseHandler = require('../constants/responseHandler');

class CategoryController {
    async create(req, res) {
        const { name } = req.body;

        if (!name) {
            const message = 'You must provid a name.';
            return responseHandler.badRequest(res, { message });
        }

        await Category.create({ name })
            .then(category => {
                const data = category;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }

    async index(req, res) {
        await Category.findAll()
            .then(categories => {
                const data = categories;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }

    async getCategory(req, res) {
        const { category_id } = req.params;

        if (!category_id || isNaN(category_id)) {
            const message = 'You must provide a category_id.';
            return responseHandler.badRequest(res, { message });
        }

        await Category.findByPk(category_id, {
            attributes: ['id', 'name'],
        })
            .then(category => {
                if (!category) {
                    const message = 'Category not found.';
                    return responseHandler.notFound(res, { message });
                }

                const data = category;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }

    async put(req, res) {
        const { category_id } = req.params;
        const { name } = req.body;

        if (!category_id || isNaN(category_id)) {
            const message = 'You must provide a category_id.';
            return responseHandler.badRequest(res, { message });
        }

        await Category.findByPk(category_id)
            .then(async category => {
                if (!category) {
                    const message = 'Category not found.';
                    return responseHandler.notFound(res, { message });
                }

                await category.update({ name })
                    .then(categoty_updated => {
                        const data = categoty_updated;
                        return responseHandler.success(res, { data });
                    })
                    .catch(err => {
                        return responseHandler.modelError(res, err);
                    });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });

    }

    async delete(req, res) {
        const { category_id } = req.params;

        if (!category_id || isNaN(category_id)) {
            const message = 'You must provide a category_id.';
            return responseHandler.badRequest(res, { message });
        }

        await Category.findByPk(category_id)
            .then(category => {
                if (!category) {
                    const message = 'Category not found.';
                    return responseHandler.notFound(res, { message });
                }

                category.destroy();

                const message = 'Category was deleted';
                return responseHandler.notFound(res, { message });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }
}

module.exports = new CategoryController();
