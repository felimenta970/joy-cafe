const express = require('express')
const auth = require('./auth')

module.exports = function (server) {

    /*
     * Rotas protegidas por Token JWT
     */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)

    const Almoco = require('../api/almoco/almocoService')
    Almoco.register(protectedApi, '/almoco')

    const Refeicao = require('../api/almoco/almocoService')
    Refeicao.register(protectedApi, '/refeicao')

    const Acompanhamento = require('../api/almoco/almocoService')
    Acompanhamento.register(protectedApi, '/acompanhamento')

    const Salada = require('../api/almoco/almocoService')
    Salada.register(protectedApi, '/salada')

    /*
     * Rotas abertas
     */
    const openApi = express.Router()
    server.use('/oapi', openApi)

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)
}