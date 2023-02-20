import axios from "axios";
import { useEffect, useState } from "../../lib";

const DeltailProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get()
    }, []);
    return `
    <div class="container">
        <div>
            <img src="" />
        </div>
        <div>
            <h2></h2>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
    `;
}
export default DeltailProducts;