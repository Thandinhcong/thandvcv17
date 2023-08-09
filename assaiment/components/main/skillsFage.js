import { useEffect, useState } from "../../lib";

const SkillsFageList = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch("https://data-git-main-thandinhcong.vercel.app/skills")
            .then((response) => response.json())
            .then((data) => setSkills(data))
    }, [])

    return `
    <div class="text-primary ">
    <h2>Skills</h2>
   <div class="  text-dark">
   ${skills.map((skill) => `
        <p class="">${skill.name}</p>
   `).join("")}
   </div>
    </div>
    `;
}
export default SkillsFageList;