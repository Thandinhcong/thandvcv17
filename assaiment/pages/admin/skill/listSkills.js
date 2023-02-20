import axios from "axios";
import { useEffect, useState } from "../../../lib";


const AdminSkillFage = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/skills")
      .then(({ data }) => setSkills(data))
  }, [])
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id
        const confilm = window.confirm("Bạn có muốn xóa không ?");
        if (confilm) {
          axios.delete(`http://localhost:3000/skills/${id}`)
            .then(() => {
              const newSkills = skills.filter((skill) => skill.id != id);
              setSkills(newSkills)
            });
        }
      });
    }
  })
  return `
    <div class="main-skills">
    <h1 class="">Thông tin kĩ năng</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <td>STT</td>
          <td>Kĩ năng đã có</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
      ${skills.map((skill, index) => `
      <tr>
      <td>${index + 1}</td>
      <td>${skill.name}</td>
      <td>
        <button class="btn btn-remove btn-primary" data-id="${skill.id}">Remove</button>
        <a href="/admin/skills/${skill.id}/edit">Edit</a>
      </td>
    </tr>
      `).join("")}
      </tbody>
    </table>
  </div>`;
}
export default AdminSkillFage;