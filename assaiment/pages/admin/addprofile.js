import { router, useEffect } from "../../lib";

const AdminAddprofile = () => {

    useEffect(() => {
        const form = document.getElementById("form-add");
        const name = document.getElementById("profile-name");
        const email = document.getElementById("profile-email");
        const phone = document.getElementById("profile-phone");
        const address = document.getElementById("profile-address");
        const job = document.getElementById("profile-job");
        const sex = document.getElementById("profile-sex");
        const Education = document.getElementById("profile-education");
        const img = document.getElementById("profile-img")
        const date = document.getElementById("profile-date")
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
                img: img.value,
                date: date.value,
            }
            fetch(" http://localhost:3000/profiles", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(newProfiles)
            })
                .then(() => router.navigate("admin/profiles"))
        })
    })
    return `
<div class="add-profile">
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
      <input type="file" id="profile-img" class="form-control">
      </div>
      <label for="" class="form-label">Ngày sinh</label>
      <input type="date" id="profile-date" class="form-control">
      </div>
      <button class="btn btn-primary">Thêm</button>
    </form>
  </div>`;
}
export default AdminAddprofile;