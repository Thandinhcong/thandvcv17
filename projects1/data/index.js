const menus = [
    { name: "/", path: "home" },
    { name: "/abouts", path: "abouts" },
    { name: "/projects", path: "projects" },
    { name: "/posts", path: "posts" },
    { name: "/contacts", path: "contacts" },
]

const projects = [

    {
        id: 1,
        name: "Dự án 1",
        teams: [
            { id: 1, name: "Thản" },
            { id: 2, name: "Thanh" },
            { id: 3, name: "Thánh" }
        ]
    },
    {
        id: 2,
        name: "Dự án mẫu"
    },
    {
        id: 3,
        name: "Dự án tốt nghiệp",
        teams: [
            { id: 1, name: "Thản" },
            { id: 2, name: "Thế" },
            { id: 3, name: "nam" },
        ],
    }
]
export { projects, menus };