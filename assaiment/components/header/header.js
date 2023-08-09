import logo from "./logo.js"
import Nav from "./nav.js";

const header = () => {
    return `
<header class="header  d-flex justify-content-between ">
   <div class="logo">
   ${logo()}
   </div>
   <div class="menus">
   ${Nav()}
   </div>
</header>
`;
}
export default header;