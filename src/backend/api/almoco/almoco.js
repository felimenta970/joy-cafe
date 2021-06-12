const restful = require('node-restful')
const mongoose = restful.mongoose

const pratoPrincipalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    value: { type: Number, min: 0, required: true}
})

const acompanhamentoSchema = new mongoose.Schema({
    name: { type: String, required: true}
})

const saladaSchema = new mongoose.Schema({
    name: { type: String, required: true },
})

const refeicaoSchema = new mongoose.Schema({
    pratoPrincipal: { type: pratoPrincipalSchema },
    acompanhamento: { type: acompanhamentoSchema } ,
    salada: { type: saladaSchema } 
})

const almocoSchema = new mongoose.Schema({
    refeicao: [refeicaoSchema]
})

module.exports = restful.model('PratoPrincipal', pratoPrincipalSchema)
module.exports = restful.model('Acompanhamento', acompanhamentoSchema)
module.exports = restful.model('Salada', saladaSchema)

module.exports = restful.model('Almoco', almocoSchema)
