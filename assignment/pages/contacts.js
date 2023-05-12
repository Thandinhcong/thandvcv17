
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
    <div class="contact-product text-primary m-3 ">
        <h2 class="fs-3">Contact</h2>
        <div class="contacts-item d-flex p-2 text-secondary">
        ${profiles.map((profile) => {
        return ` <div class="ps-3 flex-fill">
                <p>Name : ${profile.name}</p>
                <p>Email : ${profile.email}</p>
                <p>Address: ${profile.address}</p>
                <p>Phone number : ${profile.phone}</p>
            </div>
           <div class="contact-item flex-fill">        
                <p>Gender : ${profile.sex}</p>
                <p>Facebook : Dinhcongthan.official</p>
                <p>Date of bith : ${profile.date}</p>
                <p>Job : ${profile.job}</p>      
           </div>`

    })}
        </div>
    </div>
    `;
}
export default ContactFage;