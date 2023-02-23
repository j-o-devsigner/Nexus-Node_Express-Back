const auth = require('../../../auth')

const checkAuth = (action) => {

    const middleware = (req, res, next) => {
        switch(action) {
            case 'update':
                const owner = Number(req.params.id);
                auth.check.own(req, owner);
                next();
                break;

            default:
                next();
        }
    }

    return middleware;
}

module.exports = checkAuth;