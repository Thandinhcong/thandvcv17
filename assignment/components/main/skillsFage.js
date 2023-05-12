import { useEffect, useState } from "../../lib";

const SkillsFageList = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch("https://data-git-main-thandinhcong.vercel.app/skills")
            .then((response) => response.json())
            .then((data) => setSkills(data))
    }, [])

    return `
    <div class="product-skill text-primary ps-3 ">
    <h2>Skills</h2>
   <div class="skill-item  text-secondary">
   ${skills.map((skill) => `
        <p class="pt-3">${skill.name}</p>
   `).join("")}
   </div>
    </div>
    `;
}
export default SkillsFageList;