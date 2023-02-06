import { projects } from "../../data"
import { useEffect, useState } from "../../lib"
const AdminProjects = () => {
    const [data, setData] = useState(projects);
    useEffect(() => {
        const btns = document.querySelectorAll("#btn-remove");
        for (let btn of btns) {
            btn.addEventListener("click", function () {
                const id = btn.setdata.id;
                const newProjects = projects.filter((project) => project.id != id);
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
      ${data
            .map((project, index) => `
      <tr>
      <td>${index + 1}</td>
      <td>${project.name}</td>
      <td>
        <button class="btn btn-danger btn-remove" data-id="${project.id}">Remove</button>
        <a href="/admin/projects//edit">Sửa</a>
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