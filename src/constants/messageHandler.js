
function modelError(res, err) {
    const response = {
        success: false,
    }
    console.log(err);

    if (!err.errors) {
        response['message'] = 'An server error was ocurred, please try again later.';
        
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

module.exports = {
    modelError,
}
