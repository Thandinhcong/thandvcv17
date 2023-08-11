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
    <div class="animate__animated">
        <header  data-aos="fade-up"">
             ${header()}
        </header>
        <main  data-aos="fade-up" >
            ${MainProfile()}
            <div  data-aos="fade-up" class="d-flex align-items-center justify-content-center">
                ${Loading()}
            </div>
            <div  data-aos="fade-up" class="introduce">
                ${introduceInfo()}
            </div>
            <div  data-aos="fade-up" class="viewer">
                ${ContactFage()}
                ${SkillsFageList()}
                ${ListLenguage()}
            </div>
            ${ListEdu()}
            ${ListProducts()};
            ${ListProject()}
        </main>
        <footer >
            ${ListFooter()}
        </footer>
    </div>
    `;
}
export default ListHomeFage;