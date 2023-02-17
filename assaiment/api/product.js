import instance from "./config";
const getProducts = () => {
    return instance.get('/products');
}
const getProduct = (id) => {
    return instance.get(`/products/${id}`)
}
const addProduct = (product) => {
    return instance.post(`/products`, product);
}
const updateProduct = (product) => {
    return instance.put(`/products/${product.id}`, product);
}
const deleteProduct = (id) => {
    return instance.delete(`/products/${id}`);
}
export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };