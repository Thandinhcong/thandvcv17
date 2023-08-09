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
import "./main.css"
const ListHomeFage = () => {
    return `
   <div class="">
   <header>
   ${header()}
   </header>
   <main>
   ${MainProfile()}
   <div class="line-loading"></div>
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