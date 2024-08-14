//Logica para escolha do filme
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const filme = urlParams.get('filme');

    if (filme) {
        carregarFilme(filme);
    }
};

function carregarFilme(filme) {

    const direitaElement = document.querySelector('.filme .direita');

    //Logica para trocar as informações dos filmes
    if (filme === 'batman') {
        document.querySelector('.direita h1').innerText = 'The Batman';
        document.querySelector('.esquerda img').src = 'img/posters/304020220317-uau-posters-the-batman-filmes-3_3.jpg';
        document.querySelector('.direita .header-time .time h6').innerText = '2h 56min';
        document.querySelector('.filme .esquerda .dados .direcao').innerText = 'Matt Reeves';
        document.querySelector('.filme .esquerda .dados .estrelando').innerHTML = 'Robert Pattinson, Zoë Kravitz, Jeffrey Wright';
        document.querySelector('.filme .esquerda .dados .roteiro').innerHTML = 'Matt Reeves, Peter Craig, Bob Kane';
        direitaElement.classList.add('batman-bg');
    }

    if (filme === 'deadpool') {
        document.querySelector('.direita h1').innerText = 'Deadpool & Wolverine';
        document.querySelector('.esquerda img').src = 'img/posters/deadpool-e-wolverine-cartaz.avif';
        document.querySelector('.direita .header-time .time h6').innerText = '2h 8min';
        document.querySelector('.filme .esquerda .dados .direcao').innerText = 'Shawn Levy';
        document.querySelector('.filme .esquerda .dados .estrelando').innerHTML = 'Ryan Reynolds, Hugh Jackman, Emma Corrin';
        document.querySelector('.filme .esquerda .dados .roteiro').innerHTML = 'Ryan Reynolds, Rhett Reese, Paul Wernick';
        direitaElement.classList.add('deadpool-bg');
    }

    if (filme === 'jurassic') {
        document.querySelector('.direita h1').innerText = 'Jurassic World: Reino Ameaçado';
        document.querySelector('.esquerda img').src = 'img/posters/poster-jurassic-reino-ameacado.jpg';
        document.querySelector('.direita .header-time .time h6').innerText = '2h 8min';
        document.querySelector('.filme .esquerda .dados .direcao').innerText = 'J.A. Bayona';
        document.querySelector('.filme .esquerda .dados .estrelando').innerHTML = 'Chris Pratt, Bryce Dallas Howard, Rafe Spall';
        document.querySelector('.filme .esquerda .dados .roteiro').innerHTML = 'Derek Connolly, Colin Trevorrow, Michael Crichton';
        direitaElement.classList.add('jurassic-bg');
    }

    if (filme === 'divertidamente') {
        document.querySelector('.direita h1').innerText = 'Divertida Mente 2';
        document.querySelector('.esquerda img').src = 'img/posters/poster-divertidamente.jpeg';
        document.querySelector('.direita .header-time .time h6').innerText = '1h 36min';
        document.querySelector('.filme .esquerda .dados .direcao').innerText = 'Kelsey Mann';
        document.querySelector('.filme .esquerda .dados .estrelando').innerHTML = 'Amy Poehler, Maya Hawke, Kensington Tallman';
        document.querySelector('.filme .esquerda .dados .roteiro').innerHTML = 'Meg LeFauve, Dave Holstein, Kelsey Mann';
        direitaElement.classList.add('divertidamente-bg');
    }
}
