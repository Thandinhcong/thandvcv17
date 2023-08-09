
// import axios from "axios";
import { useEffect, useState } from "../lib";

const ContactFage = () => {
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        fetch("https://data-git-main-thandinhcong.vercel.app/profiles")
            .then((response) => response.json())
            .then((data) => setProfiles(data))
    }, [])
    return `
    <div class="contact-product  ">
        <h2 class=" text-primary ">Contact</h2>
        <div class="contacts-item">
        ${profiles.map((profile) => (
        ` <div class="">
                <p><img width="30" height="30" src="https://img.icons8.com/bubbles/50/new-post.png" alt="new-post"/> ${profile.email}</p>
                <p><img width="30" height="30" src="https://img.icons8.com/color/48/order-delivered.png" alt="order-delivered"/> ${profile.address}</p>
                <p><img width="30" height="30" src="https://img.icons8.com/color/48/apple-phone.png" alt="apple-phone"/> ${profile.phone}</p>
                <p><img width="30" height="30" src="https://img.icons8.com/color/48/facebook-new.png" alt="facebook-new"/> Dinhcongthan.official</p>     
            </div>`
    )).join("")}
        </div>
    </div>
    `;
}
export default ContactFage;