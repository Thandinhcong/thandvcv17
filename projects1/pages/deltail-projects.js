import header from "../conponents/Header";
import ProjectsInfoFage from "../conponents/projectsInfo";
import { projects } from "../data"
import { router } from "../lib";
const DeltaiProjectFage = ({ id }) => {
    const currentProject = projects.find((project) => project.id == id);
    if (!currentProject) return router.navigate("/projects");

    return `
    ${header()}
    <div class="project-info">
    ${ProjectsInfoFage(currentProject)}
    </div>
    `;
}
export default DeltaiProjectFage;