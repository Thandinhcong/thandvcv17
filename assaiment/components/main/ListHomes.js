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

$(document).ready(function () {
    // Thêm lớp animate để kích hoạt hiệu ứng vào các phần tử cần
    $("header").addClass("animate__animated animate__fadeInDown");
    $("main").addClass("animate__animated animate__fadeIn");

    // Xử lý sự kiện cuộn
    $(window).scroll(function () {
        var scrollPosition = $(window).scrollTop();
        var elementPosition = $(".viewer").offset().top;
        var windowHeight = $(window).height();

        if (scrollPosition > elementPosition - windowHeight) {
            $(".viewer").addClass("animate__animated animate__fadeInUp");
        }
    });
});


const ListHomeFage = () => {
    return `
    <div class="animate__animated">
        <header class="animate__animated animate__fadeInDown">
             ${header()}
        </header>
        <main class="animate__animated animate__fadeIn">
            ${MainProfile()}
            <div class="d-flex align-items-center justify-content-center">
                ${Loading()}
            </div>
            ${introduceInfo()}
            <div class="viewer animate__animated animate__fadeInUp">
                ${ContactFage()}
                ${SkillsFageList()}
                ${ListLenguage()}
            </div>
            ${ListEdu()}
            ${ListProducts()};
            ${ListProject()}
        </main>
        <footer class="animate__animated animate__fadeIn">
            ${ListFooter()}
        </footer>
    </div>
    `;
}
export default ListHomeFage;