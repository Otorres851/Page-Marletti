const callData = async () =>{
  let eventosResponse = await fetch('../eventos.json');
  let eventos = await eventosResponse.json();
  eventList(eventos)
}

const eventList = (eventos) => {
  console.log(eventos);
  const template = eventos.Eventos.map( dato =>
    `
    <div class="cards__content">
      <img src="${dato.imagen}" alt="imagen publicidad eventos">
      <h3>${dato.titulo}</h3>
      <p>${dato.texto}</p>
      <button><a href="${dato.link}">LEER MÁS</a></button>
    </div>
    `
  );
  const HtmlDiv = document.getElementById('cards__template')
  HtmlDiv.innerHTML = `${template}`
};

callData();




