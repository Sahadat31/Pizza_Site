/* eslint-disable react/prop-types */
export default function Button({children,disabled}) {
    return <button
        className="bg-rose-600 font-semibold tracking-wide uppercase text-slate-100 px-3 py-2 inline-block rounded-full hover:bg-rose-400
             transition-colors duration-300 focus:outline-none focus:ring focus:ring-rose-500 focus:ring-offset-2 disabled:cursor-not-allowed"
        disabled={disabled}
    >
        {children}
    </button>
}