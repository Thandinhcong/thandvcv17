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
    <h2 class="text-primary ms-3">Sản phẩm</h2>
    <div class="container p-5">
    <div class="product row  ">
            ${products.map((product) => `
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 product-item border">
       <div class="cart">
       <img src="${product.image}" class="cart-img-top" style="" width="200px" alt="" height="200px">
       <h5 class="product-item-title
        cart-title">${product.name}</h5>
       <p class="cart-text">${product.description}</p>
       <a href="${product.links}">View a GitHub</a>
     </div>
     </div>
     `).join("")
    }
    </div>
  </div>
`;
}
export default ListProducts;