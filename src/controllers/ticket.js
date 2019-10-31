const { Ticket } = require('../models');
const messageHandler = require('../constants/messageHandler');


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
                return res.json({
                    success: true,
                    data: ticket
                });
            })
            .catch(err => {
                const errors = err.errors;
                return messageHandler.modelError(res, errors);
            });
    }

    async index(req, res) {
        await Ticket.findAll()
            .then(tickets => {
                return res.json({
                    success: true,
                    data: tickets
                });
            })
            .catch(err => {
                const errors = err.errors;
                return messageHandler.modelError(res, errors);
            });
    }

    async getTicket(req, res) {
        const { ticket_id } = req.params;

        if (!ticket_id) {
            return res.status(400).json({
                success: false,
                message: 'You must provide a ticket_id.'
            });
        }

        Ticket.findByPk(ticket_id, {
            include: {
                association: 'TicketMessages',
                required: false,
                include: [{
                    association: 'User',
                    required: true,
                },]
            }
        })
            .then(ticket => {
                if (!ticket) {
                    return res.status(404).json({
                        success: false,
                        message: 'Ticket not found.'
                    });
                }

                return res.json({
                    success: true,
                    data: ticket
                });
            })
            .catch(err => {
                const errors = err.errors;
                return messageHandler.modelError(res, errors);
            });
    }

    async put(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new TicketController();
