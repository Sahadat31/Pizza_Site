import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header(){
    return <div>
        <header>
            <Link to="/">Fast Pizza</Link>
            <SearchOrder/>
            <p>Sahadat</p>
        </header>
    </div>
}