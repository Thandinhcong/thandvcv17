import axios from "axios";
import { router, useState, useEffect } from "../../lib";
import { getprofile, updateprofile } from "../../api/profiles";
import * as yup from "yup";

const AdminEditProfile = ({ id }) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getprofile(id)
      .then(({ data }) => setProfile(data))
      .catch((error) => console.log(error));
  }, []);

  const schema = yup.object().shape({
    name: yup.string().required("Hãy nhập tên !"),
    email: yup.string().email().required("Hãy nhập email!"),
    phone: yup.number().required("hãy nhập số điện thoại"),
    address: yup.string().required("Hãy nhập địa chỉ!"),
    job: yup.string().required("Hãy nhập tên công việc !"),
    sex: yup.string().required("Hãy nhập giới tính !"),
    education: yup.string().required("Hãy nhập trường học !"),
    date: yup.string().required('Ngày sinh không được để trống.'),
  });

  useEffect(() => {
    const form = document.getElementById("form-edit");
    const name = document.getElementById("profile-name");
    const email = document.getElementById("profile-email");
    const phone = document.getElementById("profile-phone");
    const address = document.getElementById("profile-address");
    const job = document.getElementById("profile-job");
    const sex = document.getElementById("profile-sex");

    const education = document.getElementById("profile-education");
    const date = document.querySelector("#profile-date");
    const img = document.getElementById("profile-img");

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const urls = await upLoadFile(img.files);
      schema.validate({
        name: name.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        job: job.value,
        sex: sex.value,
        education: education.value,
        date: date.value,
      })
        .then(() => {
          const newProfile = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            address: address.value,
            job: job.value,
            sex: sex.value,
            education: education.value,
            img: urls,
            date: date.value,
          };
          updateprofile(id, newProfile)
            .then(() => {
              router.navigate("/admin/profiles");
              alert("Thêm thành công");
            })
            .catch((error) => console.log(error));
        })
        .catch((error) => alert(error.message));
    });
  }, []);
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
    <div class="profile-edit container">
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
        <input type="file" id="profile-img" class="form-control" value="${profile.img}">
        <label for="" class="form-label">Ngày sinh</label>
        <input type="text" id="profile-date" class="form-control" value="${profile.date}" >
      </div>
      <button class="btn btn-primary">Sửa</button>
    </form>
  </div>
    
    `;

}
export default AdminEditProfile;