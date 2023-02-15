const app = document.querySelector("#app");
import "bootstrap/dist/css/bootstrap.min.css";

import { render, router } from "./lib";
import AdminAddprofile from "./pages/admin/addprofile";
import AdminEditProfile from "./pages/admin/Editprofile";
import AdminProfile from "./pages/admin/profiles";
import Adminprojects from "./pages/admin/projects";
import AdminAddSkillFage from "./pages/admin/skill/addSkills";
import AdminSkillFage from "./pages/admin/skill/listSkills";
import ContactFage from "./pages/contacts";
import HomeFage from "./pages/home";

router.on("/", () => render(HomeFage, app));
router.on("/contacts", () => render(ContactFage, app))
//admin
router.on("/admin/profiles/:id/edit", ({ data }) => render(() => AdminEditProfile(data), app))
router.on("/admin/profiles/add", () => render(AdminAddprofile, app))
router.on("/admin/profiles", () => render(AdminProfile, app))
router.on("/admin/projects", () => render(Adminprojects, app));
//skills
router.on("/admin/skills", () => render(AdminSkillFage, app));
router.on("/admin/skills/add", () => render(AdminAddSkillFage, app));
router.resolve();