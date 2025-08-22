const URLMain = "https://api.escuelajs.co/api/v1/products"; // url API
const btnLoad = document.getElementById("btnLoad");
const divPrincipal = document.getElementById("divPrincipal");


btnLoad.addEventListener("click", function(event){
    event.preventDefault();

    //fetch de la API
    fetch(URLMain)
    .then((response) => response.json())//then de la respeusta del api
    .then((res) => {
        const productos = res.slice(0, 17);
        createCards(productos);

        })
       //consolelog para ver que trae)// then de los elementos en json
    .catch((err) =>{
        console.log("Error al cargar productos");
    })//catch
}//function event
);

function createCards(productos){
    divPrincipal.innerHTML = ""; //vacia el div principal pero conserva su distribución
    
    productos.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card", "shadow-sm");

         card.innerHTML = `
            <img src="${product.images[0]}" class="card-img-top" alt="${product.title}" width="100%" height="225">
            <div class="card-body">
                <p class="card-text">${product.title}</p>
                <p class="card-text">${product.description}</p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-body-secondary">$${product.price}</small>
                </div>
            </div>
    `;

    divPrincipal.appendChild(card);

    });//forEach

}//createCards function
