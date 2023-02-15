import { useEffect, useState } from "../../../lib";

const ListSkills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetch(" http://localhost:3000/skills")
            .then((response) => response.json)
            .then((data) => setSkills(data))
    }, [])
    useEffect(() => {

    })
    return

}
export default ListSkills;