import instance from "./config";
const getProfiles = () => {
    return instance.get('/profiles');
}
const getprofile = (id) => {
    return instance.get(`/profiles/${id}`)
}
const addprofile = (profile) => {
    return instance.post(`/profiles`, profile);
}
const updateprofile = (profile) => {
    return instance.put(`/profiles/${profile.id}`, profile);
}
const deleteprofile = (id) => {
    return instance.delete(`/profiles/${id}`);
}
export { getProfiles, getprofile, addprofile, updateprofile, deleteprofile };