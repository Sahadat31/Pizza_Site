import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

export default function Header(){
    return <div>
        <header 
        className="flex items-center justify-between bg-rose-600 uppercase px-6 py-6 border-b-4 border-stone-200">
            <Link to="/" className="text-slate-50 text-3xl tracking-[10px]">Fast Pizza</Link>
            <SearchOrder/>
            <UserName/>
        </header>
    </div>
}