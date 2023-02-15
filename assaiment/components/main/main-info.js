import { useEffect, useState } from "../../lib";
import ProjectGallery from "../projectGalery";
import "bootstrap/dist/css/bootstrap.min.css";
const MainProfile = () => {
    const [profiles, setProfile] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/profiles")
            .then((response) => response.json())
            .then((data) => setProfile(data))
    }, [])

    return `
<div class="main-profile">
    <div class="profile-introduce fs-3 text-primary ">
       ${profiles.map((profile) => `
       <p class="text-sm-center">Xin chào ,<br> Tôi tên là ${profile.name} </p>
       <p>Tôi là một ${profile.job}</p>
       `).join("")
        }
    </div>
    <div class="frofile-img">
        ${ProjectGallery({
            img: "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/326361015_508357044733965_592092809156967959_n.jpg?stp=cp6_dst-jpg&_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lbtl-sfVSCEAX-8LsBF&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBB0TPK7m0WDWfg4vf755h9KZppjyN5SiIkPbRxbwXgfw&oe=63EF7DBD",
        })
        }
    </div>
</div>

`;
}
export default MainProfile;