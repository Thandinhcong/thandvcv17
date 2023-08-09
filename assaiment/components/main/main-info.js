import { useEffect, useState } from "../../lib";
import "../../src/style.css";
const MainProfile = () => {
    const [profiles, setProfile] = useState([]);
    useEffect(() => {
        fetch("https://data-git-main-thandinhcong.vercel.app/profiles")
            .then((response) => response.json())
            .then((data) => setProfile(data))
    }, {})

    return `
    <div class="main-profile d-flex justify-content-between">
   ${profiles.map((profiles) => {
        return `
        <div class="profile-introduce fs-3 text-primary " style="margin-top:30px">
            <p class="product-name text-sm-center fs-1">Hello everyone <br> My name is :<br> <label class="lable-name">${profiles?.name}</label> </p>
            <p class="ms-4 fs-2">I'm a :<lable class="item-job"> ${profiles.job}</lable></p>
            <div class="bg-dark icons">
    
            </div>
        </div>
         <div class="frofile-img ">
         <img style="margin-right="30px" src="${profiles.img}" class="info-img rounded-circle" width="300px"/>
        </div>
    `;
    })}
</div>

`;
}
export default MainProfile;