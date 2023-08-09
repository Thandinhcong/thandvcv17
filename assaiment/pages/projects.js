import ListFooter from "../components/footer/ListFooter";
import header from "../components/header/header";
import ListProducts from "../components/main/ListProducts";

const ProjectPage = () => {
  return `
  <div class="">
    ${header()}
    ${ListProducts()}
    ${ListFooter()}
  </div>
    `;
}
export default ProjectPage;
