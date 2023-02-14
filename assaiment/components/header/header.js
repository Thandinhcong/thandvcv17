import logo from "./logo.js"
import Nav from "./nav.js";
import "bootstrap/dist/css/bootstrap.min.css";
const header = () => {
    return `
<header class="header header d-flex justify-content-between bg-dark">
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