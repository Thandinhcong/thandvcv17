import menus from "../../data";
import "../../src/style.css"
const Nav = () => {
    return `
    <ul class="">
        <li class="nav ">
            ${menus.map(
        (menu) => `<a href="${menu.path}" class="nav-item nav-link text-dark">${menu.name}</a>`)
            .join("")
        }
        </li>
    </ul>
    
    `;
}
export default Nav;