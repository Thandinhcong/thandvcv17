import header from "../components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import MainProfile from "../components/main/main-info";
const HomeFage = () => {
    return `
   <div class="container container-fluid bg-dark">
   <header>
   ${header()}
   </header>
   <main>
   ${MainProfile()}
   </main>
   </div>

    `;
}
export default HomeFage;