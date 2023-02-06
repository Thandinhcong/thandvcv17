import menus from "../data";

const Nav = () => {
    return `
    <li>
    ${menus.map(
        (menu) => `<a href=${menu.id}>${menu.name}</a>`

    ).join("")}
    </li>
`;
}
export default Nav;