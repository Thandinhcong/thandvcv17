
import axios from "axios";
import { useEffect, useState } from "../lib";

const ContactFage = () => {
    const [profiles, setProfiles] = useState([])
    useEffect(() => {
        fetch("http://localhost:3000/profiles")
            .then((response) => response.json())
            .then((data) => setProfiles(data))
    }, [])
    return `
    <div class="contact-product text-primary m-3 ">
        <h2 class="fs-3">Liên hệ</h2>
        <div class="contacts-item d-flex p-2 text-secondary">
                <div class="ps-3 flex-fill">
                    <p>Họ tên : ${profiles.name}</p>
                    <p>Email : ${profiles.email}</p>
                    <p>Địa chỉ : ${profiles.address}</p>
                    <p>Số điện thoại : ${profiles.phone}</p>
                </div>
               <div class="flex-fill">        
                    <p>Giới tính : ${profiles.sex}</p>
                    <p>Facebook : Dinhcongthan.official</p>
                    <p>Ngày sinh : ${profiles.date}</p>
                    <p>Nghề nghiệp : ${profiles.job}</p>      
               </div>
        </div>
    </div>
    `;
}
export default ContactFage;