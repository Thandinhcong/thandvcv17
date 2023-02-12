
import { useEffect, useState } from "../../lib"
const AdminProjects = () => {
  //Khởi tạo biến data và setData ,giá trị là một mảng rỗng
  const [projects, setProjects] = useState([]);
  //lấy dữ liệu từ localStorage gán vào biến data
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then(response => response.json())
      .then(data => setProjects(data))
    // const projects = JSON.parse(localStorage.getItem('projects')) || [];
    // setData(projects)
  }, [])
  useEffect(() => {

    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        //lấy id từ data id cuat button
        const id = btn.dataset.id;
        //lọc ra các phần tử có id khác với id cuart button
        const newProjects = projects.filter((project) => project.id != id);
        //lưu vào localstorage
        localStorage.setItem("projects", JSON.stringify(newProjects));
        //gán lại giá trị cho biến data
        setData(newProjects);
      })
    }
  })
  return `
    <div class="container pt-5">
    <h1>Quản lý dự ÁN</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <td>STT</td>
          <td>Tên dự án</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
      ${projects
      .map((project, index) => `
      <tr>
      <td>${index + 1}</td>
      <td>${project.name}</td>
      <td with="150">
        <button class="btn btn-danger btn-remove" data-id="${project.id}">Remove</button>
        <a href="/admin/projects/${project.id}/edit">Sửa</a>
      </td>
    </tr>
        `).join("")
    }
      </tbody>
    </table>
  </div>
    `;
}
export default AdminProjects;