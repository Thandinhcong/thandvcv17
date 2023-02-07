import { router, useEffect } from "../../lib";

const AdminAddProjects = () => {
    useEffect(() => {
        //lấy dữ liệu từ localstorage
        const projects = JSON.parse(localStorage.getItem("projects"));
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            //thêm phần tử vào mảng
            projects.push({ id: projects.length + 1, name: projectName.value });
            //lưu vào localStorage và trả vể giá trị chuỗi
            localStorage.setItem("projects", JSON.stringify(projects));
            //chuyển huownbgs về trang admin project
            router.navigate("/admin/projects");

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