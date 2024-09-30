/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function LinkButton({children,to}) {
    return <Link
        className='text-xl text-stone-400 hover:text-stone-800'
        to={to}
        >
            {children}
        </Link>
}