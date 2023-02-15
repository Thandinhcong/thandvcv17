import { router, useEffect } from "../../../lib";

const AdminAddSkillFage = () => {
    useEffect(() => {
        const form = document.getElementById("form-skills");
        const skillsname = document.getElementById("ip-skills");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const NewSkills = {
                name: skillsname.value,
            }
            fetch("http://localhost:3000/skills", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(NewSkills)
            })
                .then(() => router.navigate("/admin/skills"))
        })

    })
    return `
    <div class="add-skills text-muted">
    <h1>Thông tin kĩ năng cần có</h1>
    <form action="" class="form-control" id="form-skills">
      <label for="form-lable">NHập kĩ năng</label>
      <input type="text" id="ip-skills" class="form-control">
      <button class="btn btn-success">Thêm</button>
    </form>
  </div>
    
    `;
}

export default AdminAddSkillFage;