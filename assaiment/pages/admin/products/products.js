import { deleteProduct, getProducts } from "../../../api/product"
import { useEffect, useState } from "../../../lib"

const AdminProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
            .then(({ data }) => {
                setProducts(data)
                console.log("data :", typeof data);
            })
            .catch((error) => console.log(error))
    }, [])
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove")
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                //lấy id
                const id = btn.dataset.id;
                const confirm = window.confirm("Bạn có muốn xóa không");
                if (confirm) {
                    deleteProduct(id)
                        .then(() => {
                            const NewProducts = products.filter((product) => product.id != id)
                            setProducts(NewProducts)
                            alert("Xóa thành công !")
                        })
                        .catch((error) => console.log(error));
                }
            })
        }
    })
    return `
    <div class="container">
        <h1 class="product-item p-5 text-light bg-primary">Thêm dự án</h1>
    <table class="table table-bordered pt-5">
    <thead>
        <tr>
        <td>STT</td>
        <td>Image</td>
        <td>Tên dự án</td>
        <td>Mô tả</td>
        <td>Link</td>
        <td></td>
        </tr>
    </thead>
    <tbody>
    ${products.
            map((product, index) => `
    <tr>
        <td>${index + 1}</td>
        <td><img src="${product.image}" width="150px" height="200px"/></td>
        <td>${product.name}</td>
        <td>${product.description}</td>
        <td><a href="${product.links}">xem ngay</a></td>
        <td>
            <button class="btn btn-remove btn-danger" data-id="${product.id}">remove</button>
            <a href="/admin/products/${product.id}/edit">sửa</a>
        </td>
    </tr>`).join("")
        }
    </tbody>
    </table>
    </div>
`
}
export default AdminProducts;