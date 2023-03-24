import { router, useEffect } from "../../lib";
import axios from "axios";
import { addprofile } from "../../api/profiles";
const AdminAddprofile = () => {
    useEffect(() => {
        const form = document.getElementById("form-add");
        const name = document.getElementById("profile-name");
        const email = document.getElementById("profile-email");
        const phone = document.getElementById("profile-phone");
        const address = document.getElementById("profile-address");
        const job = document.getElementById("profile-job");
        const sex = document.getElementById("profile-sex");
        const education = document.getElementById("profile-education");
        const date = document.getElementById("profile-date")
        const img = document.getElementById("profile-img")

        form.addEventListener("submit", async function (e) {

            e.preventDefault();
            const urls = await upLoadFile(img.files);
            const newProfiles = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                address: address.value,
                job: job.value,
                sex: sex.value,
                Education: education.value,
                date: date.value,
                img: urls,
            }
            addprofile(newProfiles)
                .then(() => router.navigate("/admin/profiles"))
                .catch((error) => console.log(error))
        })
    })

    const upLoadFile = async (files) => {
        if (files) {
            const CloudName = 'dxzlnojyv';
            const Preset_Name = 'demo-upload';
            const Foldel_Name = "ES6";
            const urls = [];
            const api = `https://api.cloudinary.com/v1_1/${CloudName}/image/upload`;

            const formData = new FormData();
            formData.append('upload_preset', Preset_Name);
            formData.append("folder", Foldel_Name);
            for (const file of files) {
                formData.append("file", file);
                const response = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                });
                urls.push(response.data.secure_url)
            }
            return urls;
        }
    }
    return `

<h1>Thêm thông tin người dùng</h1>
<form action="" id="form-add">
    <div class="form-group">
        <label for="" class="form-label">Họ tên</label>
        <input type="text" placeholder="Nhập họ tên" id="profile-name" class="form-control">
        <label for="" class="form-label">Email</label>
        <input type="text" placeholder="Nhập email" id="profile-email" class="form-control">
        <label for="" class="form-label">Số điện thoại</label>
        <input type="text" placeholder="Nhập số điện thoại" id="profile-phone" class="form-control">
        <label for="" class="form-label">Địa chỉ</label>
        <input type="text" placeholder="Nhập địa chỉ" id="profile-address" class="form-control">
        <label for="" class="form-label">Công việc</label>
        <input type="text" placeholder="Nhập công việc" id="profile-job" class="form-control">
        <label for="" class="form-label">Gioi tính</label>
        <input type="text" placeholder="Nhập giói tính" id="profile-sex" class="form-control">
        <label for="" class="form-label">Trường học</label>
        <input type="text" placeholder="Nhập Trường học" id="profile-education" class="form-control">
        <label for="" class="form-label">image</label>
        <input type="file" id="profile-img" multiple class="form-control">
        <label for="" class="form-label">Ngày sinh</label>
        <input type="date" id="profile-date"  class="form-control">
    </div>
      <button type='submit' class="btn btn-primary">Thêm</button>
</form>`
        ;
}
export default AdminAddprofile;