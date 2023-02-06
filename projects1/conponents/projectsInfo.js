const ProjectsInfoFage = ({ name, teams }) => {
    return `
        <h2>${name}</h2>
        ${teams
            ? `
                    <h2>Teams</h2>
                <ul>
                    ${teams
                .map((member) => {
                    return `<li>${member.name}</li>`;
                }).join("")}
                </ul>
                `
            : ""
        }
    `;
}
export default ProjectsInfoFage;