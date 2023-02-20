import { useEffect, useState } from "../../lib";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/style.css";
const MainProfile = () => {
    const [profiles, setProfile] = useState({});
    useEffect(() => {
        fetch("http://localhost:3000/profiles")
            .then((response) => response.json())
            .then((data) => setProfile(data))
    }, {})

    return `
    <div class="main-profile d-flex justify-content-between">
    <div class="profile-introduce fs-3 text-primary " style="margin-top:30px">
       <p class="product-name text-sm-center fs-1">Xin chào các bạn <br> Tôi tên là :<br> <label class="lable-name">${profiles.name}</label> </p>
       <p class="ms-4 fs-2">Tôi là một :<lable class="item-job"> ${profiles.job}</lable></p>
    </div>
    <div class="frofile-img ">
            <img src="${profiles.gallery}" class="rounded-circle " width="400px"/>
    </div>
</div>

`;
}
export default MainProfile;