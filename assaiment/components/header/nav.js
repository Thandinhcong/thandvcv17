import { menus } from "../../data";
import "bootstrap/dist/css/bootstrap.min.css";
const Nav = () => {
    return `
    <ul class=""nav>
        <li class="nav nav-item">
            ${menus.map(
        (menu) => `<a href="${menu.path}" class="nav nav-link p-5">${menu.name}</a>`)
            .join("")
        }
        </li>
    </ul>
    
    `;
}
export default Nav;