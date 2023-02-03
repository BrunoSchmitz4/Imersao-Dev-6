function adicionarFilme(){
    // Um variável para pegar o VALOR(.value) salvo no input que tm o id filme
    var filmeFavorito = document.getElementById('filme').value

    // Um variável para pegar a tag que tm o id filme
    var elemetoListaFilmes = document.getElementById('listaFilmes')

    elemetoListaFilmes.innerHTML =  elemetoListaFilmes.innerHTML + '<img src=' + filmeFavorito + '>'

    document.getElementById('filme').value = ''
}

// desafios
// Solução para impedir que o conteudo inserido não seja salvo arquivos .jpg

// no momento que a imagem for adicoona, ao clicar no banner do filme leva para o trailer do filme (redirecionamento de filme)

// Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme.