const express = require('express')

const server = express()


server.use(express.json())

const alunos = ['Arthur Henrique', 'Felipe Henrique', 'Paula Cristina']

//CRUD Create, Read, Update, Delete

// Retorna um nome
server.get('/alunos/:index', (req, res) =>{
    const {index} = req.params
    
    return res.json(alunos[index])
})

// Retorna todos os nomes dos alunos
server.get('/alunos', (req, res) => {
    return res.json(alunos)
})

// Cadrastrar um novo aluno
server.post('/alunos', (req, res) => {
    const {nome} = req.body
    alunos.push(nome)

    return res.json(alunos)
})

// Atualizar aluno
server.put('/alunos/:index', (req, res) => {
    const { index} = req.params
    const {nome} = req.body

    alunos[index] = nome

    return res.json(alunos)
})

// Apagar aluno
server.delete('/alunos/:index', (req, res) =>{
    const {index} = req.params

    alunos.splice(index, 1)
    return req.json({message: 'Aluno excluido'})
})



server.listen(3000)