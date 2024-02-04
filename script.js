import json_data from './json/CzechRepublic.json' assert {type: "json"}
import { RadioStation } from "./radio.js"
import { playRadio } from './playRadio.js'


let radios = []
let currentStation = null
const imgStation = document.getElementById('img-station')
const imgStationDefault = 'assets/images/radio.png'

json_data.radios.forEach((item, index) => {
  const newRadio = new RadioStation(index + 1, item.title, item.country, item.description, item.genre, [item.sources], item.image)
  radios.push(newRadio)

  console.log(`Initialized radio: ${newRadio.get_title()}, ID: ${newRadio.get_id()}, Sources: ${newRadio.get_sources()}, Image: ${newRadio.get_image()}`);
})


document.addEventListener('DOMContentLoaded', function() {

  imgStation.src = imgStationDefault
  const anchorTag = document.querySelector('a[href="#scrollRadioStation"]');
  const buttons = document.querySelectorAll('.bttn')
  const radioPlayer = document.getElementById('radioPlayer')
  const anchor = document.querySelector('.anchor');


  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const buttonTitle = event.target.getAttribute('data-title')

      const radioStation = radios.find((radio) => radio.get_title() === buttonTitle)


      if (radioStation) {

        // Volání funkce playRadio s odpovídajícím ID a objektem radios
        playRadio(radioStation.get_id(), radios)

        // Získání informací o rádiu
        const handBoxElement = document.querySelector('#hand-box')
        const newRadioName = handBoxElement.querySelector('p')
        newRadioName.innerHTML = radioStation.get_title()

        const infoPElement = document.querySelector('.infoP')
        const newRadioCountry = infoPElement.querySelector('#country')
        newRadioCountry.textContent = radioStation.get_country()

        const infoPElementStyle = document.querySelector('.infoP')
        const newRadioStyle = infoPElementStyle.querySelector('#style')
        newRadioStyle.textContent = radioStation.get_genre()

        const infoPElementInfo = document.querySelector('#info-box')
        const newRadioInfo = infoPElementInfo.querySelector('.radio-info')
        newRadioInfo.textContent = radioStation.get_description()

        
        // Zobrazení loga stanice k informacím v levém panelu
        const infoPImage = document.querySelector('.station')
        const newRadioImage = infoPImage.querySelector('.img-station')

        // radioStation.getImage() vrací cestu k obrázku (např. 'img/radio1.jpg')
        const imagePath = radioStation.get_image()

        const completeImagePath = `${imagePath}`

        // Vytvoří nový obrázek
        const imageElement = document.createElement('img')
        imageElement.src = completeImagePath

        // Odstraní předchozí obrázek
        if (newRadioImage.querySelector('img')) {
        newRadioImage.querySelector('img').remove()
        }

        // Přidá nový obrázek
        newRadioImage.appendChild(imageElement)

        // scroll na pozici radioPlayer
        const element = document.getElementById("scrollRadioPlayer");
        element.scrollIntoView();


      } else {
        alert('Rádio s názvem ' + buttonTitle + ' nebylo nalezeno.')
      }
    });
  });
});