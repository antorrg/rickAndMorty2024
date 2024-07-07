

const errorEndWare = ((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || 'Error del servidor';
    console.error(err);
    res.status(status).send(message);
});

export default  errorEndWare