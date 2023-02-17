import { getProduct, updateProduct } from "../../../api/product";
import { router, useEffect, useState } from "../../../lib";

const AdminEditProduct = ({ id }) => {
    const [product, setProducts] = useState({});
    useEffect(() => {
        getProduct(id)
            .then(({ data }) => setProducts(data))
            .catch((error) => console.log(error))
    }, [])
    useEffect(() => {
        const form = document.getElementById("form-update");
        const productDes = document.getElementById("product-des");
        const productImage = document.getElementById("product-img");
        const productLink = document.getElementById("product-link");
        const productName = document.getElementById("product-name");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const newProducts = {
                id,
                name: productName.value,
                links: productLink.value,
                image: productImage,
                description: productDes.value,
            }
            updateProduct(newProducts)
                .then(() => router.navigate("/admin/products"))
                .catch((error) => console.log(error));
        })
    })
    return `
    <div class="add-product">
    <h1>Update thông tin Dự án</h1>
    <form action="" id="form-update">
      <div class="form-group">
        <label for="" class="form-label">Tên dự án</label>
        <input type="text" placeholder="Nhập tên dự án" id="product-name" class="form-control" value="${product.name}"> 
        <label for="" class="form-label">Anh dự án</label>
        <input type="file" multipart placeholder="" id="product-img" class="form-control" value="${product.image}">
        <label for="" class="form-label">Mô tả</label>
        <input type="text" placeholder="Nhập mô tả " id="product-des" class="form-control" value="${product.description}">
        <label for="" class="form-label">Link</label>
        <input type="text" placeholder="" id="product-link" class="form-control" value="${product.links}">
      </div>
      <button class="btn btn-primary">Thêm</button>
    </form>
  </div>
    
    
    `;
}
export default AdminEditProduct;