const { TicketMessages } = require('../models');
const responseHandler = require('../constants/responseHandler');

class TicketMessagesController {

    async create(req, res) {
        const { ticket_id } = req.params;
        const { user_id, message } = req.body;

        if (!ticket_id) {
            const message = 'You must provide a ticket_id.';
            return responseHandler.badRequest(res, { message });
        }

        TicketMessages.create({ ticket_id, user_id, message })
            .then(ticketMessages => {
                const data = ticketMessages;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
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
                const data = ticketMessages;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }

    async getTicketMessage(req, res) {
        const { ticket_id, message_id } = req.params;

        if (!message_id || !ticket_id) {
            const message = 'You must provide ticket_id and message_id.';
            return responseHandler.badRequest(res, { message });
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
                    const message = 'Message was not found.';
                    return responseHandler.notFound(res, { message });
                }

                const data = ticketMessage;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }

    async put(req, res) {
        const { ticket_id, message_id } = req.params;
        const { message } = req.body;

        if (!message_id) {
            const message = 'You must provide a messages_id.';
            return responseHandler.badRequest(res, { message });
        }

        TicketMessages.findOne({
            where: { ticket_id, id: message_id },
            attributes: ['id', 'message'],
        })
            .then(ticketMessage => {
                if (!ticketMessage) {
                    const message = 'Message was not found.';
                    return responseHandler.notFound(res, { message });
                }

                ticketMessage.update({ message });

                const data = ticketMessage;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }

    async delete(req, res) {
        const { ticket_id, message_id } = req.params;

        if (!message_id) {
            const message = 'You must provide a messages_id.';
            return responseHandler.badRequest(res, { message });
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
                    const message = 'Message was not found.';
                    return responseHandler.notFound(res, { message });
                }

                ticketMessage.destroy();

                const message = 'Message was deleted.';
                return responseHandler.success(res, { message });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }
}

module.exports = new TicketMessagesController();
