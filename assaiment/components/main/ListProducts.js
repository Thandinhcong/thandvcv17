import { getProducts } from "../../api/product";
import { useEffect, useState } from "../../lib";

const ListProducts = () => {
    const [products, setProdcts] = useState([]);
    useEffect(() => {
        getProducts()
            .then(({ data }) => setProdcts(data))
            .catch((error) => console.log(error))
    }, [])

    return `
    <h2 class="text-primary ms-3">Sản phẩm</h2>
    <div class="container">
        <div class="row text-muted">
            ${products.map((product) => `
            <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item">
     <div class="cart">
       <img src="${product.image}" class="cart-img-top" style="" width="200px" alt="">
       <h5 class="cart-title">${product.name}</h5>
       <p class="cart-text">${product.description}</p>
       <a href="${product.links}">${product.name}</a>
     </div>
     </div>
     `).join("")
        }
    </div>
  </div>
`;
}
export default ListProducts;