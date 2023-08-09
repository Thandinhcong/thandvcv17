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
        <div class="profile-introduce  text-primary ">
            <h5 class="product-name ">HEY THERE !</h5>
            <p class="lable-name ">I am ${profiles.name}</p>
            <lable class="fs-2 text-secondary"> ${profiles.job}</lable>
            <div class="icons">
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
                <a href=""></a>
            </div>
        </div>
        <div class="frofile-img ">
            <img src="${profiles.img}" class="info-img " />
        </div>
    `;
    })}
    </div>

`;
}
export default MainProfile;