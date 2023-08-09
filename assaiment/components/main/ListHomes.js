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
import Loading from "./Loading";
const ListHomeFage = () => {
    return `
   <div class="">
        <header>
             ${header()}
        </header>
    <main>
        ${MainProfile()}
             <div class="d-flex align-items-center justify-content-center">
                ${Loading()}
             </div>
            ${introduceInfo()}
        <div class="viewer">
            ${ContactFage()}
            ${SkillsFageList()}
            ${ListLenguage()}
         </div>
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