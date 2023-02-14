
import { router, useState, useEffect } from "../../lib"

const AdminEditProfile = ({ id }) => {
    const [profile, setProfiles] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3000/profiles/${id}`)
            .then((response) => response.json())
            .then((data) => setProfiles(data))
    }, [])
    useEffect(() => {
        const form = document.getElementById("form-edit");
        const name = document.getElementById("profile-name");
        const email = document.getElementById("profile-email");
        const phone = document.getElementById("profile-phone");
        const address = document.getElementById("profile-address");
        const job = document.getElementById("profile-job");
        const sex = document.getElementById("profile-sex");
        const Education = document.getElementById("profile-education");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const newProfiles = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                address: address.value,
                job: job.value,
                sex: sex.value,
                Education: Education.value,
            }
            fetch(`http://localhost:3000/profiles/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newProfiles),
            })
                .then(() => router.navigate("/admin/profiles"));
        });
    })
    return `
    <div class="profile-edit">
    <h1>Edit thông tin</h1>
    <form action="" id="form-edit">
      <div class="form-group">
        <label for="" class="form-label">Họ tên</label>
        <input type="text" placeholder="Nhập họ tên" id="profile-name" class="form-control" value="${profile.name}">
        <label for="" class="form-label">Email</label>
        <input type="text" placeholder="Nhập email" id="profile-email" class="form-control" value="${profile.email}">
        <label for="" class="form-label">Số điện thoại</label>
        <input type="text" placeholder="Nhập số điện thoại" id="profile-phone" class="form-control" value="${profile.phone}">
        <label for="" class="form-label">Địa chỉ</label>
        <input type="text" placeholder="Nhập địa chỉ" id="profile-address" class="form-control" value="${profile.address}">
        <label for="" class="form-label">Công việc</label>
        <input type="text" placeholder="Nhập công việc" id="profile-job" class="form-control" value="${profile.job}">
        <label for="" class="form-label">Gioi tính</label>
        <input type="text" placeholder="Nhập giói tính" id="profile-sex" class="form-control" value="${profile.sex}">
        <label for="" class="form-label">Trường học</label>
        <input type="text" placeholder="Nhập Trường học" id="profile-education" class="form-control" value="${profile.Education}">
      </div>
      <button class="btn btn-primary">Sửa</button>
    </form>
  </div>
    
    `;

}
export default AdminEditProfile;