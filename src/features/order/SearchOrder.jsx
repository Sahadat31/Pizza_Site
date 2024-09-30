import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SearchOrder() {
    const [query,setQuery] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!query) return
        navigate(`/order/${query}`)
        setQuery("")
    }
    return <form onSubmit={handleSubmit}>
        <input 
        className=
        "w-72 px-4 py-2 bg-slate-100 placeholder:text-slate-500 text-sm border-2 border-zinc-100 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-50"
        placeholder="Search Order #"
        value={query}
        onChange={(e)=> setQuery(e.target.value)}
        />
    </form>
}