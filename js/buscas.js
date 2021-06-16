const input = document.querySelector('#input')
const form = document.querySelector('#form')
const section = document.querySelector('#resultado')


form.addEventListener('submit', (event) => {
  event.preventDefault()
  getData(input)
})


let anime = JSON.parse(localStorage.getItem('anime'))


if(anime) {
  renderizar(anime)
}






async function getData(inputElement) {
  const response = await fetch(`https://kitsu.io/api/edge/anime`)
  data = await response.json()
  data.data.map(element => {
    const title = element.attributes.titles.en
    if (title) {
      if ((inputElement.value).toLowerCase() == title.toLowerCase()) {
        console.log('eae')
          renderizar(element)
      }
    }

  })
 
}


function renderizar(data) {
  section.innerHTML = `
      <div id="conteudo" >
      <h1>${data.attributes.titles.en}</h1>
      <p>${data.attributes.synopsis}</p>
      <p>Classificação Média: ${data.attributes.averageRating}</p>
      <p>Iniciou em ${(data.attributes.startDate).replace('-', '/').replace('-', '/')}</p>
      <p>Finalizou em ${(data.attributes.endDate).replace('-', '/').replace('-', '/')}</p>
    </div>
  
  `

  localStorage.setItem('anime', JSON.stringify(data))
}













