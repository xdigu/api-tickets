class responseHandler {
    modelError(res, err) {
        const response = { success: false };

        if (!err.errors) {
            response['message'] = 'An server error was ocurred, please try again later.';
            console.log(err)

            return res.status(500).json(response);
        }

        const errors = err.errors;
        const array_length = errors.length;

        if (errors && errors.length > 0) {
            errors.forEach((error, index) => {
                if (index === 0) {
                    response['message'] = error.message
                }
                else if (index === array_length) {
                    response['message'] += error.message
                } else {
                    response['message'] += ' ' + error.message
                }
            });
            return res.status(400).json(response);
        } else {
            response['message'] = 'An server error was ocurred. ' + err.name;
            return res.status(500).json(response);
        }
    }

    success(res, data) {
        const response = { success: true };

        if (data.message) {
            response['message'] = data.message;
        }

        if (data.data) {
            response['data'] = data.data;
        }

        return res.status(200).json(response);
    }

    notFound(res, data) {
        const response = { success: false };

        if (data.message) {
            response['message'] = data.message;
        }

        if (data.data) {
            response['data'] = data.data;
        }

        return res.status(404).json(response);
    }

    badRequest(res, data) {
        const response = { success: false };

        if (data.message) {
            response['message'] = data.message;
        }

        if (data.data) {
            response['data'] = data.data;
        }

        return res.status(404).json(response);
    }
}

module.exports = new responseHandler();
