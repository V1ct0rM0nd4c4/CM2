const loadInitialTemplate = () => {
    const template = `
      <div class="container">
        <div id="contenedor"></div>
      </div>
    `;
    contenedor.innerHTML = template;
};

const refreshButton = document.getElementById('refresh-btn'); // Refrescar la pagina volviendola a su estado 
  refreshButton.addEventListener('click', function() {
    location.reload();
  });

function consultar() {
    fetch(`https://digimon-api.vercel.app/api/digimon`)
        .then((res) => {
            return res.json();
        })
        .then((listadoDigimons) => {
            const contenedor = document.getElementById('contenedor');
            contenedor.innerHTML = ''; // Limpiar el contenido del contenedor antes de agregar nuevos elementos
            for (const digimon of listadoDigimons) {
                const cardTemplate = `
            <div class="col mt-2 mb-2">
              <div class="card">
                <img src="${digimon.img}" class="card-img-top" alt="...">
                <div class="card-body">
                <p class="card-title"> Nombre</p>
                  <h5 class="card-text">${digimon.name}</h5>
                  <p class="card-title"> Nivel </p>
                  <h5 class="card-text">${digimon.level}</h5>
                </div>
              </div>
            </div>
          `;
                contenedor.innerHTML += cardTemplate;
            }
        });
}

function consultarNombre(nombre) {
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombre}`)
        .then((res) => {
            return res.json();
        })
        .then((listadoDigimons) => {
            $("#contenedor").html("");
            for (const digimon of listadoDigimons) {
                $("#contenedor").append(`
          <div class="col mt-2 mb-2">
            <div class="card">
              <img src="${digimon.img}" class="card-img-top" alt="...">
              <div class="card-body">
              <p class="card-title"> Nombre</p>
                <h5 class="card-text">${digimon.name}</h5>
                <p class="card-title"> Nivel </p>
                <h5 class="card-text">${digimon.level}</h5>
              </div>
          </div>
          </div>`);
            }
        });
}

$(document).ready(function () {
    $(document).on("click", "#btn-mostrar", function () {
        consultar();
    });

    $(document).on("keyup", "#buscador", function () {
        let nombre = $("#buscador").val();
        consultarNombre(nombre);
    });
});
