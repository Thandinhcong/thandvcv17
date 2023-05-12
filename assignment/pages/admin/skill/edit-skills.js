import axios from "axios";
import { useEffect, useState, router } from "../../../lib";

const AdminEditSkill = ({ id }) => {
    const [skills, setSkills] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:3000/skills/${id}`)
            .then(({ data }) => setSkills(data));
    }, [])
    useEffect(() => {
        const form = document.getElementById("form-skills");
        const skillsname = document.getElementById("ip-skills");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const NewSkills = {
                name: skillsname.value,
            }
            axios.put(`http://localhost:3000/skills/${id}`, NewSkills)
                .then(() => router.navigate("/admin/skills"))
        })

    })
    return `
    <div class="add-skills text-muted">
            <h1>Thông tin kĩ năng cần có</h1>
    <form action="" class="form-control" id="form-skills">
    <label for="form-lable">NHập kĩ năng</label>
    <input type="text" id="ip-skills" class="form-control" value="${skills.name}">
    <button class="btn btn-success">Thêm</button>
    </form> 
    </div>
    `;
}

export default AdminEditSkill;