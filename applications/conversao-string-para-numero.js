const httpStatusResponse = require('../commons/http-response/http-status-response');
const logger = require('../commons/error-logger');

const conversaoStringNumero = async(valor)=>{
    try {
        return parseFloat(valor);
    } catch (erro) {
        const erroConversao = await httpStatusResponse(500, (erro.message), 'conversao-string-numero');
        logger.loggerComum.log('error', erro.message);  
        return erroConversao;
    };
};

module.exports = conversaoStringNumero;