import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

export default function Header(){
    return <div>
        <header className="bg-rose-500">
            <Link to="/">Fast Pizza</Link>
            <SearchOrder/>
            <p>Sahadat</p>
        </header>
    </div>
}