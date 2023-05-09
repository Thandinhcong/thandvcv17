import header from "../header/header";
import MainProfile from "./main-info";
import introduceInfo from "./introduce";
import ContactFage from "../../pages/contacts";
import SkillsFageList from "./skillsFage";
import ListLenguage from "./Lenguage";
import ListProducts from "./ListProducts";
import ListEdu from "./education";
import ListFooter from "../footer/ListFooter";
import ListProject from "./ListProjects";
const ListHomeFage = () => {
    return `
   <div class="container container-xxl bg-dark">
   <header>
   ${header()}
   </header>
   <main>
   ${MainProfile()}
   ${introduceInfo()}
   ${ContactFage()}
   ${SkillsFageList()}
   ${ListLenguage()}
   ${ListEdu()}
   ${ListProducts()};
   ${ListProject()}
   </main>
   <footer>
   ${ListFooter()}
   </footer>
   </div>
    `;
}
export default ListHomeFage;