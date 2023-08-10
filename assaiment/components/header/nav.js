import menus from "../../data";
import "../../src/style.css"
import "./Header.css"
const Nav = () => {
    return `
    <ul class="">
        <li class="tabs ">
            ${menus.map(
        (menu) => `<a href="${menu.path}" class=" tab-item active text-decoration-none">${menu.name}</a>`)
            .join("")
        }
        </li>
    </ul>
    
    `;
}
export default Nav;