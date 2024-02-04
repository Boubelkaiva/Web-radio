let currentStation = null;

export const playRadio = function (id, radios) {

  // Zastaví přehrávání aktuální stanice, pokud existuje
  if (currentStation) {
    currentStation.pause()
  }

  // Nalezení radioStation podle ID
  const radioStation = radios.find((radio) => radio.id === id)

  if (radioStation) {

    const radioSources = radioStation.get_sources()


    // Přehrání zvuku pomocí existujícího Audio elementu
    const player = new Audio()

    if (radioSources && radioSources.length > 0) {
      player.src = radioSources[0]
      
      // Nastaví aktuální stanici na nově spuštěnou stanici
      currentStation = player

      // Přepiše zdroj v HTML
      const src = document.querySelector('audio').src
      document.querySelector('audio').src = radioSources[0]
    } else {
      alert('Chyba: Rádio nemá definovaný zvukový zdroj.')
    }
  } else {
    alert('Rádio s ID ' + id + ' nebylo nalezeno.')
  }
};

















// // Inicializace přehrávače
// function initPlayer() {
//     // Získejte odkaz na ovládací prvky přehrávače
//     const controls = document.querySelector('#player .controls');
//     // Získejte odkaz na obrázek obalu alba
//     const coverArt = document.querySelector('#player .cover-art');
//     // Získejte odkaz na informace o aktuálně přehrávané stanici
//     const trackInfo = document.querySelector('#player .track-info');
  
//     // Připojte události k ovládacím prvkům přehrávače
//     controls.querySelector('.play-pause').addEventListener('click', togglePlay);
//     controls.querySelector('.volume').addEventListener('change', setVolume);
//     controls.querySelector('.progress').addEventListener('input', seek);
  
//     // Načtěte informace o aktuálně přehrávané stanici
//     loadCurrentStation();
//   }
  
//   // Přepne přehrávání
//   function togglePlay() {
//     // Získejte odkaz na přehrávač zvuku
//     const audioPlayer = document.querySelector('audio');
  
//     // Pokud je přehrávač zvuku zastaven, spusťte ho
//     if (audioPlayer.paused) {
//       audioPlayer.play();
//     } else {
//       audioPlayer.pause();
//     }
//   }
  
//   // Nastaví hlasitost
//   function setVolume() {
//     // Získejte odkaz na přehrávač zvuku
//     const audioPlayer = document.querySelector('audio');
  
//     // Nastavte hlasitost přehrávače na hodnotu z posuvníku
//     audioPlayer.volume = this.value / 100;
//   }
  
//   // Posune se v průběhu přehrávání
//   function seek() {
//     // Získejte odkaz na přehrávač zvuku
//     const audioPlayer = document.querySelector('audio');
  
//     // Posuňte přehrávač zvuku na požadovanou hodnotu
//     audioPlayer.currentTime = this.value;
//   }
  
//   // Načte informace o aktuálně přehrávané stanici
//   function loadCurrentStation() {
//     // Získejte odkaz na zdroj stanice
//     const src = document.querySelector('audio').src;
  
//     // Otevřete URL stanice a získejte informace o stanici
//     fetch(src).then(response => response.json()).then(data => {
//       // Nastavte informace o stanici na přehrávači
//       coverArt.src = data.image;
//       trackInfo.textContent = `
//         Název stanice: ${data.name}
//         Žánr: ${data.genre}
//       `;
//     });
//   }
  
//   // Inicializuje přehrávač
//   window.addEventListener('load', initPlayer);
  