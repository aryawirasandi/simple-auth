export default function Input({ type = "text", label, title, ...rest}) {
    return (
        <div className="my-5" id={"form" + " " + label }>
           <label htmlFor={label}>
            {title}
            <input type={type} {...rest} name={label} className="border-black border-solid border-2 my-3 p-3 rounded-md w-full"/>
           </label>
        </div>
    )
}