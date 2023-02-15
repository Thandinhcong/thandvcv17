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
    <h1>Kĩ năng</h1>
    ${skills.map((skill) => `
    <p class="">${skill.name}</p>
    `).join("")}
    </div>
    `;
}
export default SkillsFageList;