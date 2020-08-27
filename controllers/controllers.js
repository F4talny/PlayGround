const saySomething = (req, res, next) => {
    res.status(200).json({
        body: `Hello form the server!`
    });
}


const qwerty = (req, res, next) => {
    res.status(200).json({
        body: `test Test`
    });
}

module.exports.saySomething = saySomething;
module.exports.qwerty = qwerty;