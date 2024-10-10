document.addEventListener('DOMContentLoaded', () => {

  // Dados de artistas com nome e imagem
  const artistData = [
    {
      name: "Blink 182",
      image: "./img/blink.jpeg"
    },
    {
      name: "Bring me the horizon",
      image: "./img/bringme.jpeg"
    },
    {
      name: "Falling in reverse",
      image: "./img/falling.jpeg"
    },
    {
      name: "Senses fail",
      image: "./img/senses.jpeg"
    },
    {
      name: "Killswitch engage",
      image: "./img/kill.jpeg"
    },
    {
      name: "The Police",
      image: "./img/thepolice.jpeg"
    }
  ];

  // Dados de álbuns com nome do álbum e artista
  const albumsData = [
    {
      name: "Continuum",
      artist: "Escape the fate",
      image: "./img/escape.jpeg"
    },
    {
      name: "25",
      artist: "Sum 41",
      image: "./img/sum41f.jpeg"
    },
    {
      name: "Divide",
      artist: "State champs",
      image: "./img/state.jpeg"
    },
    {
      name: "1989",
      artist: "Silverstein",
      image: "./img/silver.jpeg"
    },
    {
      name: "Doo-Wops & Hooligans",
      artist: "Senses fail",
      image: "./img/senses.jpeg"
    },
    {
      name: "Anti",
      artist: "Story of the year",
      image: "./img/story.jpeg"
    }
  ];

  const artistGrid = document.querySelector('.artist-grid');
  const albumsGrid = document.querySelector('.albums-grid');

  // Criar os cartões dos artistas
  artistData.forEach(artist => {
    const artistCard = document.createElement('div');
    artistCard.classList.add('artist-card'); // Corrigido para adicionar classe corretamente

    artistCard.innerHTML = `
      <img src="${artist.image}" alt="Imagem de ${artist.name}">
      <div>
      <h3>${artist.name}</h3>
      <p>Artista</p>
      </div>
    `;

    artistGrid.appendChild(artistCard);
  });


// Criando os cartões de álbuns
albumsData.forEach(album => {
  const albumCard = document.createElement('div');
  albumCard.classList.add('album-card'); 

  albumCard.innerHTML = `
    <img src="${album.image}" alt="Imagem do álbum ${album.name}">
   
   <div> 
   <h3>${album.name}</h3>
    <p>${album.artist}</p>
  </div>
  
    `;

 
  albumsGrid.appendChild(albumCard);
});
});
