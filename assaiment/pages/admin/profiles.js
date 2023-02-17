import { useEffect, useState } from "../../lib";
import axios from "axios";
import { getProfiles, deleteprofile } from "../../api/profiles";
const AdminProfile = () => {
  const [profiles, setProfile] = useState([])
  useEffect(() => {
    getProfiles()
      .then(({ data }) => setProfile(data))
      .catch((error) => console.log(error))
  }, [])
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove")
    for (let btn of btns) {
      btn.addEventListener("click", function () {
        //lấy id
        const id = btn.dataset.id;
        const confirm = window.confirm("Bạn có muốn xóa nó không");
        if (confirm) {
          deleteprofile(id)
            .then(() => {
              const NewProfiles = profiles.filter((profile) => profile.id != id)
              setProfile(NewProfiles)
            })
            .catch((error) => console.log(error));
        }
      })
    }
  })
  return `
    <div class="container">
    <h1 class="info p-10 bg-primary text-light">Thông tin người dùng</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <td>STT</td>
          <td>Name</td>
          <td>Email</td>
          <td>Number phone</td>
          <td>Address</td>
          <td>Job</td>
          <td>sex</td>
          <td>Education</td>
          <td>image</td>
          <td>date</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
      ${profiles.map((profile, index) => `
      <tr>
      <td>${index + 1}</td>
      <td>${profile.name}</td>
      <td>${profile.email}</td>
      <td>${profile.phone}</td>
      <td>${profile.address}</td>
      <td>${profile.job}</td>
      <td>${profile.sex}</td>
      <td>${profile.Education}</td>
      <td><img src="${profile.gallery?.[0]}" style="width:200px;" /></td>
      <td>${profile.date}</td>
      <td>
        <button class="btn btn-remove btn-primary" data-id="${profile.id}">Remove</button>
        <a href="/admin/profiles/${profile.id}/edit">Sửa</a>
      </td>
    </tr>
      `).join("")}
       
      </tbody>
    </table>
  </div>
    
    `;
}
export default AdminProfile;