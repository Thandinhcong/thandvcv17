import { addProduct } from "../../../api/product";
import { router, useEffect } from "../../../lib"
import axios from "axios";
const AdminAddProducts = () => {
    useEffect(() => {
        const form = document.querySelector("#form-add");
        const ProductName = document.querySelector("#product-name");
        const ProductDes = document.querySelector("#product-des");
        const ProductLink = document.querySelector("#product-name");
        const ProductImg = document.querySelector("#product-img");

        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            const urls = await upLoadFile(ProductImg.files);
            const NewProducts = {
                name: ProductName.value,
                description: ProductDes.value,
                links: ProductLink.textContent,
                image: urls,
            }
            addProduct(NewProducts)
                .then(() => {
                    router.navigate("/admin/products")
                    alert("Thêm thành công");
                })
                .catch((error) => console.log(error));
        })
        const upLoadFile = async (files) => {
            if (files) {
                const CloudName = 'dxzlnojyv';
                const Preset_Name = 'demo-upload';
                const Foldel_Name = "ES6";
                const urls = [];
                const api = `https://api.cloudinary.com/v1_1/${CloudName}/image/upload`;

                const formData = new FormData();
                formData.append('upload_preset', Preset_Name);
                formData.append("folder", Foldel_Name);
                for (const file of files) {
                    formData.append("file", file);
                    const response = await axios.post(api, formData, {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    });
                    urls.push(response.data.secure_url)
                }
                return urls;
            }
        }
    })
    return `
    <div class="add-product container">
    <h1>Thêm thông tin Dự án</h1>
    <form action="" id="form-add">
      <div class="form-group">
      <label for="" class="form-label">Tên dự án</label>
      <input type="text" placeholder="Nhập tên dự án" id="product-name" class="form-control">
      <label for="" class="form-label">Anh dự án</label>
      <input type="file" multipart placeholder="" id="product-img" class="form-control">
      <label for="" class="form-label">Mô tả</label>
      <input type="text" placeholder="Nhập mô tả " id="product-des" class="form-control">
      <label for="" class="form-label">Link</label>
      <input type="text" placeholder="" id="product-link" class="form-control">
      <a href="#" id="link-preview">(Xem trước)</a>

      </div>
      <button class="btn btn-primary" type='submit'>Thêm</button>
    </form>
  </div>
        `;
}
export default AdminAddProducts;