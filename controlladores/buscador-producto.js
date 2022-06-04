
import { datos } from "../home.js";
import { mostrarProducto } from "./unproducto.js";


const datosProd = document.querySelector("[data-busqueda-prod]")
const titulo = document.querySelector("[data-titulo-busqueda]")



const mostrarEncontrados = async()=>{
    const url = new URL(window.location);
    const nombreProd = url.searchParams.get("texto")
    
    if (nombreProd == null){
        console.log("hubo error al buscar")
    }


    const nombreBuscado = nombreProd.toLowerCase();
    let cantEncontrados = 0

    datos.listaProducto().then(data =>{
        data.forEach(({nombre, precio, descripcion, imagen, id, categoria})=>{
            const nomProd = nombre.toLowerCase();
            const nomCat = categoria.toLowerCase();
            const validar = nomProd.includes(nombreBuscado)
            const validarCat = nomCat.includes(nombreBuscado)
            

            if(validar || validarCat){
                const resultados = mostrarProducto(nombre, precio, id,  imagen)
                
                datosProd.appendChild(resultados)
                cantEncontrados ++;
            }

        })

        if(cantEncontrados > 0){
            
            const informe = `<h2>Resultado Busqueda para => ${nombreBuscado}</h2>`
            titulo.innerHTML = informe

        }

        if(cantEncontrados == 0){
         

            const informe = `<img src="../imagenes/advertencia.jpg" >
                    <h2>Lo sentimos No existen productos para => ${nombreBuscado}</h2>`;

                   
            titulo.innerHTML = informe
            

        }
    })
    
}

mostrarEncontrados()
        
    




        
        
        
                      
        

    


