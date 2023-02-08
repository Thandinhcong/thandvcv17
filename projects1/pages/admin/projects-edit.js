
import { router, useEffect } from "../../lib"

const AdminEditProject = ({ id }) => {
    //lấy dữ liệu từ localstorage
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    const currentProject = projects.find((project) => project.id == id);
    useEffect(() => {
        const form = document.getElementById("form-add");
        const projectName = document.getElementById("project-name");
        form.addEventListener("submit", function (e) {
            //sự kiện chặn reload lại trình duyệt
            e.preventDefault();
            //tạo ra một mảng mới
            const newProject = {
                id: currentProject.id,
                name: projectName.value
            }
            const newProjects = projects.map((project) => {
                // nếu project.id == newProject.id thì trả về mảng đã cập nhật phần tử mới
                //nếu không sẽ ko trả về gì cả
                return project.id == newProject.id ? newProject : project
            })
            localStorage.setItem("projects", JSON.stringify(newProjects));
            //chuyển hướng về trang admin project
            router.navigate("/admin/projects");
        })
    })
    return `
    <div class="container">
        <h1>Sửa sản phẩm</h1>
        <form action="" id="form-add">
          <div class="form-group">
            <label for="" class="form-label">Tên dự án</label>
            <input type="text" class="form-control" id="project-name" 
            value="${currentProject.name}"/>
          </div>
          <button class="btn btn-primary">Cập nhật</button>
        </form>
      </div>
    `;
}
export default AdminEditProject;