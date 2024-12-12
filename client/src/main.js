import "./style.css";
import { Category } from "./classes/Category.js";
import { Product } from "./classes/Product.js";

const selectCategory = document.getElementById("select-categories");
//quiero hacer un mapeo y convertir las opciones que vienen en el db.json en un array para hacer un forEach y meterlas dentro del selector como opciones

//procedemos al mapeo

//al tener el selector no hace falta crearlo, asi que lo unico que tenemos que hacer es un fetch cuya url debe ser el server
const url1 = "http://localhost:3000/categories";

//aqui obtenemos las categorias

const obtenerCategorias = async () => {
  try {
    const response = await fetch(url1);
    const categorias = await response.json();
    //aqui tenemos ya el array de categorias

    const arrayCategorias = categorias.map((cat) => {
      try {
        const nuevaCategoria = new Category(cat.CatName, cat.CategoryValue);
        nuevaCategoria.setCatName(cat.CatName);
        nuevaCategoria.setCatValue(cat.CategoryValue);

        console.log(nuevaCategoria);
        return nuevaCategoria;
      } catch (error) {
        console.log(error);
        return null;
      }
    });

    arrayCategorias.forEach((opcion) => {
      const option = document.createElement("option");
      option.value = opcion.getCatName(); //el value de la opcion es el catName de la categoria
      option.textContent = opcion.getCatName();
      selectCategory.appendChild(option);
    });

    //despues de esto, deberia salir en el select
  } catch (error) {
    console.error("Error al obtener las categorias: ", error);
  }
};

//------------------------CONTINUAMOS CON LA SIGUIENTE PARTE DEL EJERCICIO-------------------

/*selectCategory.addEventListener("change", () => {
  //aqui lo que debo hacer es sacar los datos del fetch y meterlos en el card container y los divs card
});*/

//´----------------------PRUEBAS -------------------------------------------

const cartasD = async () => {
  try {
    const url2 =
      "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "23d49c55f5msh4b301c63fc79be9p10a5e6jsn1f207790f863",
        "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
      },
    };

    const response = await fetch(url2, options);
    const info = await response.json(); // Asegúrate de usar await aquí
    console.log(info); // Verifica la estructura del objeto aquí

    // Suponiendo que los productos están en una propiedad `results` dentro de `info`
    const arrayProductos = info.results.map((p) => {
      const nProd = new Product(p.name, p.formattedValue);
      nProd.setName(p.name);
      nProd.setPrice(p.formattedValue);
      nProd.setImgUrl(p.image[0].url); // Asegúrate de la estructura del JSON para imágenes
      return nProd;
    });

    const cardContainer = document.getElementById("card_container");

    arrayProductos.forEach((producto) => {
      const divCard = document.createElement("div");
      const imagen = document.createElement("img");
      imagen.src = producto.getImgUrl();
      const cardText = document.createElement("div");
      const parrafo = document.createElement("p");
      parrafo.textContent = producto.getName();
      const span = document.createElement("span");
      span.textContent = producto.getPrice();

      // Append elementos al DOM
      cardText.appendChild(parrafo);
      cardText.appendChild(span);

      divCard.appendChild(imagen);
      divCard.appendChild(cardText);

      cardContainer.appendChild(divCard);
    });
  } catch (error) {
    console.log("Error en cartasD:", error);
  }
};

obtenerCategorias(); //este ya va al menos
cartasD(); //no me funciona, pero no me da tiempo ya
