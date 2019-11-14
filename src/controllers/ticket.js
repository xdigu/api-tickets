const { Ticket } = require('../models');
const responseHandler = require('../constants/responseHandler');


class TicketController {
    async create(req, res) {
        const { user_id, category_id, subject, message, is_closed } = req.body;

        Ticket.create({
            user_id,
            category_id,
            subject,
            is_closed,
            TicketMessages: [{
                message,
                user_id
            }]
        }, {
            include: ['TicketMessages']
        })
            .then(ticket => {
                const data = ticket;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }

    async index(req, res) {
        await Ticket.findAll()
            .then(tickets => {
                const data = tickets;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }

    async getTicket(req, res) {
        const { ticket_id } = req.params;

        if (!ticket_id) {
            const message = 'You must provide a ticket_id.';
            return responseHandler.badRequest(res, { message });
        }

        Ticket.findByPk(ticket_id, {
            attributes: ['id', 'subject', 'is_closed'],
            include: [{
                association: 'User',
                attributes: ['name', 'email'],
            }, {
                association: 'Category',
                attributes: ['name'],
            }, {
                association: 'TicketMessages',
                attributes: ['id', 'message'],
                required: false,
                include: [{
                    association: 'User',
                    attributes: ['name', 'email'],
                },]
            }]
        })
            .then(ticket => {
                if (!ticket) {
                    const message = 'Ticket not found.';
                    return responseHandler.notFound(res, { message });
                }

                const data = ticket;
                return responseHandler.success(res, { data });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }

    async put(req, res) {
        const { ticket_id } = req.params;
        const { subject, category_id, is_closed } = req.body;

        if (!ticket_id || isNaN(ticket_id)) {
            const message = 'You must provide a ticket_id.';
            return responseHandler.badRequest(res, { message });
        }

        await Ticket.findByPk(ticket_id)
            .then(ticket => {
                if (!ticket) {
                    const message = 'Ticket not found.';
                    return responseHandler.notFound(res, { message });
                }

                ticket.update({ subject, category_id, is_closed })
                    .then(ticket_updated => {
                        const data = ticket_updated
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
        const { ticket_id } = req.params;

        if (!ticket_id || isNaN(ticket_id)) {
            const message = 'You must provide a ticket_id.';
            return responseHandler.badRequest(res, { message });
        }

        await Ticket.findByPk(ticket_id)
            .then(ticket => {
                if (!ticket) {
                    const message = 'Ticket not found.';
                    return responseHandler.notFound(res, { message });
                }

                ticket.destroy();

                const message = 'Ticket was deleted.';
                return responseHandler.success(res, { message });
            })
            .catch(err => {
                return responseHandler.modelError(res, err);
            });
    }
}


module.exports = new TicketController();
