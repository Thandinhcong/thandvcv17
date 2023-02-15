import { useState } from "../../../lib";

const AdminAddSkillFage = () => {
    const [skills, setSkills] = useState([]);
    useState(() => {
        fetch("http://localhost:3000/skills")
            .then((response) => response.json())
            .then((data) => setSkills(data))
    }, [])
}
export default AdminAddSkillFage;