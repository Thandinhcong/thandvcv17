const app = document.querySelector("#app");
import { router, render } from "./lib";
import AboutsFage from "./pages/abouts";
import AdminProjects from "./pages/admin/projects";
import ContactsFage from "./pages/contacts";
import DeltaiProjectFage from "./pages/deltail-projects";
import HomeFage from "./pages/homes";
import PostsFage from "./pages/posts";
import ProjectsFage from "./pages/projects";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminAddProjects from "./pages/admin/projects-add";


// hiển thị ra ngoài màn hình
router.on("/", () => render(HomeFage, app));
router.on("/contacts", () => render(ContactsFage, app));
router.on("/abouts", () => render(AboutsFage, app));
router.on("/posts", () => render(PostsFage, app));
router.on("/projects", () => render(ProjectsFage, app));
router.on("/projects/:id", ({ data }) => render(() => DeltaiProjectFage(data), app));
//admin
router.on("/admin/projects/add", () => render(AdminAddProjects, app));
router.on("/admin/projects", () => render(AdminProjects, app));
//not found để thông báo khi chuyển trang mà không có đường dẫn
router.notFound(() => render(notFound, app));
// sử dụng resolve để hiển thị giao diện
router.resolve();