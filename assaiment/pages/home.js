import header from "../components/header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import MainProfile from "../components/main/main-info";
import introduceInfo from "../components/main/introduce";
import ContactFage from "./contacts";
import SkillsFageList from "../components/main/skillsFage";
import ListLenguage from "../components/main/Lenguage";
import ListProducts from "../components/main/ListProducts";
import ListEdu from "../components/main/education";
import ListFooter from "../components/footer/ListFooter";
import ListProject from "../components/main/ListProjects";
const HomeFage = () => {
    return `
   <div class="container container-fluid bg-dark">
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
export default HomeFage;