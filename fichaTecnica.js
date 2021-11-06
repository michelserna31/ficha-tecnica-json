const datosEstudiantes = [{
        nombre: "Michelle Serna González",
        github: "https://github.com/michelserna31",
        neocites: "https://michelserna31.neocities.org/",
        email: "masab0731@gmail.com",
        telefono: "3003140494",
        foto: "images/fotomichelle.jpg",
        actividades: [{
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }
    ],
        valoraciones: {
        valhtml: "3%",
        valcss: "4%",
        valjs: "6%",
        valui: "4%",
        valux: "9%"
    }},
    {
        nombre: "Jhoana López Jaramillo ",
        github: "https://github.com/jhoanalopez-cmd",
        neocites: "jhoanapatricial.neocities.org",
        email: "jplopezj@correo.iue.edu.co",
        telefono: "3218793950",
        foto: "images/FOTOPERFIL.jpg",
        actividades: [{
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        },
        {
            actividad: "actividad 1",
            estadouiux: "5%",
            estadotecnico: "2%"
        }
    ],
        valoraciones: {
        valhtml: "8%",
        valcss: "4%",
        valjs: "6%",
        valui: "4%",
        valux: "9%"
    }
}];


function Plantilla(datos) {
    return `
    <div class="container">     
        <div class="Name"><h1 class="nombre">${datos.nombre}</h1></div>
        <div class="Foto1"><img src=${datos.foto} alt="" class="fotoed"></div>
        <div class="Enlaces">
            <ul class="contenla">
                <li><img src="/images/github-brands.svg" alt=""><a href=${datos.github}>GitHub</a></li>
                <li><img src="/images/network-wired-solid.svg" alt=""><a href=${datos.neocites}">Neocites</a></li>
                <li><img src="/images/envelope-square-solid.svg" alt=""><a href="">${datos.email}</a></li>
                <li><img src="/images/whatsapp-brands.svg" alt=""><a href="">${datos.telefono}</a></li>
            </ul>
        </div>
    </div>
    


    <div class="Actividades">
        <table class="tabla">
            <tr>
                <th>Actividades</th>
                <th>%UI/UX</th>
                <th>%dev</th>
            </tr>
            <tr>
                <td><a href="">Actividad1</a></td>
                <td>10%</td>
                <td>5%</td>
            </tr>

            <tr>
                <td><a href="">Actividad2</a></td>
                <td>10%</td>
                <td>5%</td>
            </tr>

            <tr>
                <td><a href="">Actividad3</a></td>
                <td>10%</td>
                <td>5%</td>
            </tr>

        </table>
    </div> 
    


    <div class="Estados">
        <div class="valorhtml"><h2><a href= >Html </a></h2>
            <p>${datos.valoraciones.valhtml}</p>
        </div>
        <div class="valorcss"><h2><a href= >CSS </a></h2> 
            <p>${datos.valoraciones.valcss}</p>
        </div>
        <div class="valorjs"<h2><a href= >JS </a></h2>
            <p>${datos.valoraciones.valjs}</p>
        </div>
        <div class="valorui"<h2><a href= >UI </a></h2>
            <p>${datos.valoraciones.valui}</p>
        </div>
        <div class="valorui"<h2><a href= >UX</a></h2>
            <p>${datos.valoraciones.valux}</p>
        </div>
        <div class="imgicon"<a href=""><img src="/images/user-solid.svg" alt=""></a>
        </div>
    </div>
`}



const p1 = document.getElementById("ficha").innerHTML = datosEstudiantes.map(Plantilla).join("");