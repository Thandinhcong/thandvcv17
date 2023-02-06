import header from "../conponents/Header";
import ProjectList from "../conponents/projectList";


const ProjectsFage = () => {
    return `
    ${header()}
    <h1></h1>
    <div class="project-item">
    <aside>loc theo :</aside>
    ${ProjectList()}
    </div>
    `;
}
export default ProjectsFage;