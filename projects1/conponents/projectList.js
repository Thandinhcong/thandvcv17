import { projects } from "../data";
const ProjectList = () => {
    return `
    ${projects
            .map(
                (project) => `<div class="project-item">
                    <a href="/projects/${project.id}">${project.name}</a>
                </div>`).join('')
        }
    `;
}
export default ProjectList;