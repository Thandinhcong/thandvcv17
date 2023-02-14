import { useEffect, useState } from "../../lib"

const Adminprojects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data))
  }, [])
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.dataset.id;
      const newProjects = projects.filter((project) => project.id != id);
      setProjects(newProjects);
    }
  })
  return `
    <div class="container">
    <h1 class="product-item p-5 text-light bg-primary">Thêm dự án</h1>
    <table class="table table-bordered pt-5">
      <thead>
        <tr>
          <td>STT</td>
          <td>Tên dự án</td>
          <td>member</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
      ${projects.
      map((project, index) => `
      <tr>
      <td>${index + 1}</td>
      <td>${project.name}</td>
      <td>${project.member}</td>
      <td>
        <button class="btn btn-remove btn-danger" data-id="${project.id}">remove</button>
        <a href="">sửa</a>
      </td>
    </tr>
      
      `).join("")
    }
      </tbody>
    </table>
  </div>
    
    `;
}
export default Adminprojects;