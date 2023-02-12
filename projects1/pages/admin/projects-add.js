import { router, useEffect } from "../../lib";

const AdminAddProjects = () => {
  useEffect(() => {
    //lấy dữ liệu từ localstorage
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("project-name");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const NewProduct = {
        name: projectName.value
      }
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        }
        , body: JSON.stringify(NewProduct)
      }).then(() => {
        router.navigate("/admin/projects");
      })
    })
  });

  return `
<div class="container">
    <h1>Thêm sản phẩm</h1>
    <form action="" id="form-add">
      <div class="form-group">
        <label for="" class="form-label">Tên dự án</label>
        <input type="text" class="form-control" id="project-name">
      </div>
      <button class="btn btn-primary">Thêm</button>
    </form>
  </div>
`;
}
export default AdminAddProjects;