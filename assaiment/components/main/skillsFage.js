import { useEffect, useState } from "../../lib";

const SkillFage = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch("http:/localhost:3000/profiles")
    })
}
export default SkillFage;