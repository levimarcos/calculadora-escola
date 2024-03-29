const httpStatusResponse = require('../../commons/http-response/http-status-response');
const logger = require('../../commons/error-logger');

const validacaoOperacaoZero = async(operador, segundoValor)=>{
    try {
        if(operador === '√' && segundoValor === 0){
            return 'entrada inválida';
        }
        if(operador === '/' && segundoValor === 0){
            return 'entrada inválida';
        } else {
            return 'ok'
        }
    } catch (erro) {
        const erroValidacao = await httpStatusResponse(500, (erro.message), 'validacao-operacao-zero');
        logger.loggerComum.log('error', erro.message);
        return erroValidacao;
    };
};

module.exports = validacaoOperacaoZero;