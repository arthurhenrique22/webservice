const {consultarCep} = require('correios-brasil')
const cep = '50030310’'
consultarCep(cep).then(response => {
    console.log(response)
})