const app = document.querySelector("#app");
import "bootstrap/dist/css/bootstrap.min.css";
import ListContact from "./components/main/ListContact";
import { render, router } from "./lib";

import AdminAddprofile from "./pages/admin/addprofile";
import AdminEditProfile from "./pages/admin/Editprofile";
import AdminAddProducts from "./pages/admin/products/add-products";
import AdminEditProduct from "./pages/admin/products/edit-products";
import AdminProducts from "./pages/admin/products/products";
import AdminProfile from "./pages/admin/profiles";
import Adminprojects from "./pages/admin/projects";
import AdminAddSkillFage from "./pages/admin/skill/addSkills";
import AdminEditSkill from "./pages/admin/skill/edit-skills";
import AdminSkillFage from "./pages/admin/skill/listSkills";
import HomeFage from "./pages/home";
import NotFound from "./pages/not-found";
import ProjectPage from "./pages/projects";

router.on("/", () => render(HomeFage, app));
router.on("/contacts", () => render(ListContact, app));
router.on("/projects", () => render(ProjectPage, app));

//admin
router.on("/admin/profiles/:id/edit", ({ data }) => render(() => AdminEditProfile(data), app))
router.on("/admin/profiles/add", () => render(AdminAddprofile, app))
router.on("/admin/profiles", () => render(AdminProfile, app))
router.on("/admin/projects", () => render(Adminprojects, app));
//products
router.on("/admin/products", () => render(AdminProducts, app));
router.on("/admin/products/add", () => render(AdminAddProducts, app));
router.on("/admin/products/:id/edit", ({ data }) => render(() => AdminEditProduct(data), app));
//skills
router.on("/admin/skills", () => render(AdminSkillFage, app));
router.on("/admin/skills/add", () => render(AdminAddSkillFage, app));
router.on("/admin/skills/:id/edit", ({ data }) => render(() => AdminEditSkill(data), app));
//
router.notFound(() => render(NotFound, app));
router.resolve();