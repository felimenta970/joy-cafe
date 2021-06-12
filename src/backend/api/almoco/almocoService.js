const Refeicao = require('./almoco')
const Acompanhamento = require('./almoco')
const Salada = require('./almoco')

const Almoco = require('./almoco')

const errorHandler = require('../../common/errorHandler')

Refeicao.methods(['get', 'post', 'put', 'delete'])
Refeicao.updateOptions({runValidators: true})
Refeicao.after('post', errorHandler).after('put', errorHandler)

Acompanhamento.methods(['get', 'post', 'put', 'delete'])
Acompanhamento.updateOptions({runValidators: true})
Acompanhamento.after('post', errorHandler).after('put', errorHandler)

Salada.methods(['get', 'post', 'put', 'delete'])
Salada.updateOptions({runValidators: true})
Salada.after('post', errorHandler).after('put', errorHandler)

Almoco.methods(['get', 'post', 'put', 'delete'])
Almoco.updateOptions({runValidators: true})
Refeicao.after('post', errorHandler).after('put', errorHandler)