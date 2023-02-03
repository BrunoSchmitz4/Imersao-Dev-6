var pokeLista = ['https://upload.wikimedia.org/wikipedia/en/2/27/Pokemonseason1DVDBoxSet.jpg', 'https://www.anitube.site/wp-content/uploads/Pok%C3%A9mon-%E2%80%93-2%C2%B0-Temporada-Liga-Laranja-poster2.jpg', 'https://www.anitube.site/wp-content/uploads/Pok%C3%A9mon-3%C2%B0-Temporada-Liga-Johto.jpg', 'https://www.anitube.site/wp-content/uploads/Pok%C3%A9mon-4%C2%B0-Temporada-Campe%C3%B5es-da-Liga-Johto.jpg', 'https://www.anitube.site/wp-content/uploads/Pok%C3%A9mon-5%C2%B0-Temporada-Master-Quest.jpg', 'https://www.anitube.site/wp-content/uploads/Pok%C3%A9mon-6%C2%B0-Temporada-Avan%C3%A7ado-Advanced.jpg', 'https://www.anitube.site/wp-content/uploads/Pok%C3%A9mon-7%C2%B0-Temporada-Advanced-Challenge.jpg','https://animescomix.com/wp-content/uploads/2021/11/Pokemon-8-Batalha-Avancada-Dubladoo-capa.jpg', 'https://www.anitube.site/wp-content/uploads/Pok%C3%A9mon-9%C2%B0-Temporada-Batalha-da-Fronteira-Battle-Frontier.jpg', 'https://images.justwatch.com/poster/8625611/s592/temporada-10', 'https://animescomix.com/wp-content/uploads/2021/11/Pokemon-11-DP-Batalha-Dimensional-%E2%80%93-capaaa.png', 'https://animescomix.com/wp-content/uploads/2021/11/Pokemon-12-DP-Batalhas-Galacticas-capaaaa.png', 'https://animescomix.com/wp-content/uploads/2021/11/Pokemon-13-DP-Vencedores-da-Liga-Sinnoh-capaa.png', 'https://images.justwatch.com/poster/193607821/s592/temporada-14', 'https://animescomix.com/wp-content/uploads/2021/12/Pokemon-15-PB-%E2%80%93-Destinos-Rivais-%E2%80%93-CAP.png', 'https://images.justwatch.com/poster/193607786/s592/temporada-16', 'https://animescomix.com/wp-content/uploads/2021/12/Pokemon-17-XY-capa.jpg', 'https://images.justwatch.com/poster/172244143/s592/temporada-18', 'https://images.justwatch.com/poster/195606872/s592/temporada-19', 'https://images.justwatch.com/poster/195606860/s592/temporada-20', 'https://images.justwatch.com/poster/141047939/s592/temporada-21', 'https://images.justwatch.com/poster/140853629/s592/temporada-22', 'https://images.justwatch.com/poster/194610807/s592/temporada-23', 'https://images.justwatch.com/poster/246683727/s592/temporada-24', 'https://images.justwatch.com/poster/290775213/s592/temporada-25']

// O for() precisa de três instruções:
// Variável de increnento; Até onde implementar; O quanto incrementar;
// O incremento da variável i
// i++ é o mesmo que i += 1 ou i = i + 1
// .length é o tamanho da lista
for(var i = 0; i < pokeLista.length;i++){
    // Criando elementos no HTML com JS
// documento.write()
    document.write('<img src=' + pokeLista[i] + '>')
};

// Desafios :)
/* 
1° Transformar for em while;
2° Fazer uma verificação para ver se o arquivo da lista é .jpg;
3° Fazer uma nova lista para o nome das listas (fazendo aparecer em baixo do banner)
*/