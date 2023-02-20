
import { router, useState, useEffect } from "../../lib"
import { getprofile, updateprofile } from "../../api/profiles";
const AdminEditProfile = ({ id }) => {
  const [profile, setProfiles] = useState({})
  useEffect(() => {
    getprofile(id)
      .then(({ data }) => setProfiles(data))
      .catch((error) => console.log(error))
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
    const date = document.querySelector("#profile-date");
    const img = document.getElementById("profile-img")
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const newProfiles = {
        id,
        name: name.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        job: job.value,
        sex: sex.value,
        Education: Education.value,
        gallery: img,
        date: date.value,
      }
      updateprofile(newProfiles)
        .then(() => router.navigate("/admin/profiles"))
        .catch((error) => console.log(error))
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
        <label for="" class="form-label">image</label>
        <input type="file" id="profile-img" class="form-control" value="${profile.gallery}">
        <label for="" class="form-label">Ngày sinh</label>
        <input type="date" id="profile-date" class="form-control" value="${profile.date}">
      </div>
      <button class="btn btn-primary">Sửa</button>
    </form>
  </div>
    
    `;

}
export default AdminEditProfile;