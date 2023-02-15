import { useEffect, useState } from "../../lib";

const SkillsFageList = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/skills")
            .then((response) => response.json())
            .then((data) => setSkills(data))
    }, [])

    return `
    <div class="product-skill text-primary ps-3 ">
    <h2>Kĩ năng</h2>
   <div class="d-flex">
   ${skills.map((skill) => `
   <p class="p-3">${skill.name}</p>
   `).join("")}
   </div>
    </div>
    `;
}
export default SkillsFageList;