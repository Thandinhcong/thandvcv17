import menus from "../../data";
import "../../src/style.css"
const Nav = () => {
    return `
    <ul class="">
        <li class="nav nav-item">
            ${menus.map(
        (menu) => `<a href="${menu.path}" class="nav nav-link ">${menu.name}</a>`)
            .join("")
        }
        </li>
    </ul>
    
    `;
}
export default Nav;