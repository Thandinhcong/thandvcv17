
import { router, useEffect, useState } from "../../lib"

const AdminEditProject = ({ id }) => {
  //lấy dữ liệu từ localstorage
  // const projects = JSON.parse(localStorage.getItem("projects")) || [];
  // const currentProject = projects.find((project) => project.id == id);
  const [project, setProject] = useState({});
  useEffect(() => {
    fetch(`"http://localhost:3000/projects/${id}"`)
      .then((response) => response.json())
      .then((data) => setProject(data))
  }, [])
  useEffect(() => {
    const form = document.getElementById("form-add");
    const projectName = document.getElementById("project-name");
    form.addEventListener("submit", function (e) {
      //sự kiện chặn reload lại trình duyệt
      e.preventDefault();
      //tạo ra một mảng mới
      const newProject = {
        name: projectName.value,
      };
      fetch(`"http://localhost:3000/projects/${id}"`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject)
      }).then(() => router.navigate("admin/projects"));
    });
  });
  return `
    <div class="container">
        <h1>Sửa sản phẩm</h1>
        <form action="" id="form-add">
          <div class="form-group">
            <label for="" class="form-label">Tên dự án</label>
            <input type="text" class="form-control" id="project-name" 
            value="${project.name}"/>
          </div>
          <button class="btn btn-primary">Cập nhật</button>
        </form>
      </div>
    `;
}
export default AdminEditProject;