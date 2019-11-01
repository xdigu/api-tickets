const { TicketMessages } = require('../models');
const messageHandler = require('../constants/messageHandler');

class TicketMessagesController {

    async create(req, res) {
        const { ticket_id } = req.params;
        const { user_id, message } = req.body;

        TicketMessages.create({ ticket_id, user_id, message })
            .then(ticketMessages => {
                return res.json({
                    success: true,
                    data: ticketMessages
                });
            })
            .catch(err => {
                const errors = err.errors;
                return messageHandler.modelError(res, errors);
            });
    }

    async index(req, res) {
        const { ticket_id } = req.params;

        TicketMessages.findAll({
            where: {
                ticket_id
            },
            attributes: ['id', 'message'],
            include: {
                association: 'User',
                attributes: ['id', 'name', 'email'],
            },
        })
            .then(ticketMessages => {
                return res.json({
                    success: true,
                    data: ticketMessages
                });
            })
            .catch(err => {
                const errors = err.errors;
                return messageHandler.modelError(res, errors);
            });
    }

    async getTicketMessage(req, res) {
        const { ticket_id, message_id } = req.params;

        if (!message_id || !ticket_id) {
            return res.status(400).json({
                success: false,
                message: 'You must provide ticket_id and message_id.'
            });
        }

        TicketMessages.findOne({
            where: { ticket_id, id: message_id },
            attributes: ['id', 'message'],
            include: {
                association: 'User',
                attributes: ['id', 'name', 'email'],
            }
        })
            .then(ticketMessage => {
                if (!ticketMessage) {
                    return res.status(404).json({
                        success: false,
                        message: 'Message was not found.'
                    });
                }

                return res.json({
                    success: true,
                    data: ticketMessage
                });

            })
            .catch(err => {
                const errors = err.errors;
                return messageHandler.modelError(res, errors);
            });
    }

    async put(req, res) {
        const { ticket_id, message_id } = req.params;
        const { message } = req.body;

        if (!message_id) {
            return res.status(400).json({
                success: false,
                message: 'You must provide a messages_id.'
            });
        }

        TicketMessages.findOne({
            where: { ticket_id, id: message_id },
            attributes: ['id', 'message'],
        })
            .then(ticketMessage => {
                if (!ticketMessage) {
                    return res.status(404).json({
                        success: false,
                        message: 'Message was not found.'
                    });
                }

                ticketMessage.update({ message });

                return res.json({
                    success: true,
                    data: ticketMessage
                });

            })
            .catch(err => {
                const errors = err.errors;
                return messageHandler.modelError(res, errors);
            });
    }

    async delete(req, res) {
        const { ticket_id, message_id } = req.params;

        if (!message_id) {
            return res.status(400).json({
                success: false,
                message: 'You must provide a messages_id.'
            });
        }

        TicketMessages.findOne({
            where: { ticket_id, id: message_id },
            attributes: ['id', 'message'],
            include: {
                association: 'User',
                attributes: ['id', 'name', 'email'],
            }
        })
            .then(ticketMessage => {
                if (!ticketMessage) {
                    return res.status(404).json({
                        success: false,
                        message: 'Message was not found.'
                    });
                }

                ticketMessage.destroy();

                return res.json({
                    success: true,
                    message: 'Message was deleted.'
                });

            })
            .catch(err => {
                const errors = err.errors;
                return messageHandler.modelError(res, errors);
            });
    }
}

module.exports = new TicketMessagesController();
