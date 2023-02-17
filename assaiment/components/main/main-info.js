import { useEffect, useState } from "../../lib";
import ProjectGallery from "../projectGalery";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";
const MainProfile = () => {
    const [profiles, setProfile] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/profiles")
            .then((response) => response.json())
            .then((data) => setProfile(data))
    }, [])

    return `
<div class="main-profile d-flex justify-content-between">
    <div class="profile-introduce fs-3 text-primary " style="margin-top:20px">
       ${profiles.map((profile) => `
       <p class="product-name text-sm-center fs-1">Xin chào các bạn <br> Tôi tên là :<br> <label class="lable-name">${profile.name}</label> </p>
       <p class="ms-4 fs-2">Tôi là một :<lable class="item-job"> ${profile.job}</lable></p>
       `).join("")
        }
    </div>
    <div class="frofile-img ">
        ${ProjectGallery({
            img: "https://danviet.mediacdn.vn/zoom/700_438/2021/3/13/359-16156314575361327375368-crop-16156314855551135612326.jpg"
        })
        }
    </div>
</div>

`;
}
export default MainProfile;