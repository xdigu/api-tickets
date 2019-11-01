const { Category } = require('../models');
const messageHandler = require('../constants/messageHandler');

class CategoryController {
    async create(req, res) {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({
                success: false,
                message: 'You must provid a name.'
            });
        }

        await Category.create({ name })
            .then(category => {
                return res.json({
                    success: true,
                    data: category,
                });
            })
            .catch(err => {
                return messageHandler.modelError(res, err);
            });
    }

    async index(req, res) {
        await Category.findAll()
            .then(categories => {
                return res.json({
                    success: true,
                    data: categories,
                });
            })
            .catch(err => {
                return messageHandler.modelError(res, err);
            });
    }

    async getCategory(req, res) {
        const { category_id } = req.params;

        if (!category_id || isNaN(category_id)) {
            return res.status(400).json({
                success: false,
                message: 'You must provide a category_id.',
            });
        }

        await Category.findByPk(category_id, {
            attributes: ['id', 'name'],
        })
            .then(category => {
                if (!category) {
                    return res.status(404).json({
                        success: false,
                        message: 'Category not found.',
                    });
                }

                return res.json({
                    success: true,
                    data: category,
                });
            })
            .catch(err => {
                return messageHandler.modelError(res, err);
            });
    }

    async put(req, res) {
        const { category_id } = req.params;
        const { name } = req.body;

        if (!category_id || isNaN(category_id)) {
            return res.status(400).json({
                success: false,
                message: 'You must provide a category_id.',
            });
        }

        await Category.findByPk(category_id)
            .then(async category => {
                if (!category) {
                    return res.status(404).json({
                        success: false,
                        message: 'Category not found.',
                    });
                }

                await category.update({ name })
                    .then(categoty_updated => {
                        return res.json({
                            success: true,
                            data: categoty_updated,
                        });
                    })
                    .catch(err => {
                        return messageHandler.modelError(res, err);
                    });
            })
            .catch(err => {
                return messageHandler.modelError(res, err);
            });

    }

    async delete(req, res) {
        const { category_id } = req.params;

        if (!category_id || isNaN(category_id)) {
            return res.status(400).json({
                success: false,
                message: 'You must provide a category_id.',
            });
        }

        await Category.findByPk(category_id)
            .then(category => {
                if (!category) {
                    return res.status(404).json({
                        success: false,
                        message: 'Category not found.',
                    });
                }

                category.destroy();

                return res.status(200).json({
                    success: false,
                    message: 'Category was deleted.',
                });
            })
            .catch(err => {
                return messageHandler.modelError(res, err);
            });

    }
}

module.exports = new CategoryController();
