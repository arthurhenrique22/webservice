const livraria  = {
    posts: [
        {
            id: 1,
            nome: 'A bela e a fera',
            Autor: 'Geovanne Varani'
        }
    ],
};

// CREATE
function criaPost(dados) {
    livraria.posts.push({
        id: livraria.posts.length + 1,
        nome: dados.nome,
        autor: dados.autor  
    });
}
criaPost({ nome: 'Ronaldo', autor: 'Georgie Bastos' }); 
// console.log(livraria.posts)

// READ
function pegaPosts() {
    return livraria.posts;
}
console.log(pegaPosts())

// UPDATE
function atualizaContentDoPost(id, novoConteudo) {
    const postQueVaiSerAtualizado = pegaPosts().find((post) => {
        return post.id === id;
    });
    console.log(postQueVaiSerAtualizado)
    postQueVaiSerAtualizado.comentario = novoConteudo
}
atualizaContentDoPost(2, 'Bom livro')
console.log(pegaPosts())

// DELETE
function apagaPost(id) {
    const listaDePostsAtualizada = pegaPosts().filter((postAtual) => {
        return postAtual.id !== id;
    })
    livraria.posts = listaDePostsAtualizada;
}
apagaPost(1);
apagaPost(2);
apagaPost(3);
console.log(pegaPosts());