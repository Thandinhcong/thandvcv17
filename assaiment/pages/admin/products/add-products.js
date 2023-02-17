import { addProduct } from "../../../api/product";
import { router, useEffect } from "../../../lib"

const AdminAddProducts = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const ProductName = document.querySelector("#product-name");
        const ProductDes = document.querySelector("#product-des");
        const ProductLink = document.querySelector("#product-name");
        const ProductImg = document.querySelector("#product-img");

        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const NewProducts = {
                name: ProductName.value,
                description: ProductDes.value,
                link: ProductLink.value,

            }
            addProduct(NewProducts)
                .then(() => {
                    router.navigate("/admin/products")
                })
                .catch((error) => console.log(error));
        })

    })
    return `
    <div class="add-product">
    <h1>Thêm thông tin Dự án</h1>
    <form action="" id="form-add">
      <div class="form-group">
      <label for="" class="form-label">Tên dự án</label>
      <input type="text" placeholder="Nhập tên dự án" id="product-name" class="form-control">
      <label for="" class="form-label">Anh dự án</label>
      <input type="text" placeholder="" id="product-img" class="form-control">
      <label for="" class="form-label">Mô tả</label>
      <input type="text" placeholder="Nhập mô tả " id="product-des" class="form-control">
      <label for="" class="form-label">Link</label>
      <input type="text" placeholder="" id="product-link" class="form-control">
      </div>
      <button class="btn btn-primary" type='submit'>Thêm</button>
    </form>
  </div>
        `;
}
export default AdminAddProducts;