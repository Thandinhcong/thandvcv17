import { getProducts } from "../../api/product";
import { useEffect, useState } from "../../lib";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";
const ListProducts = () => {
  const [products, setProdcts] = useState([]);
  useEffect(() => {
    getProducts()
      .then(({ data }) => setProdcts(data))
      .catch((error) => console.log(error))
  }, [])

  return `
    <h2 class="text-primary ms-3">Products</h2>
    <div class="container-xxl mt-5">
    <div class="product row  row-cols-3">
            ${products.map((product) => `
       <div class="cart col-4">
     <a href="${product.links}">  <img src="${product.image}" class="cart-img-top" style=""  alt="" ></a>
       <h5 class="product-item-title cart-title">${product.name}</h5>
       <p class="cart-text">${product.description}</p>
       <a href="${product.links}" class="btn btn-primary mb-2 mb-4 ">View</a>
     </div>
     `).join("")
    }
    </div>
  </div>
`;
}
export default ListProducts;