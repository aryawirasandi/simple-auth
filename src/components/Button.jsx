export default function Button({ type, children, className,  ...rest }){
    return (
        <button type={type} className={`p-3 rounded-sm hover:opacity-50 read-only:bg-gray ${className ? className : ''}`} {...rest}>
            {children}
        </button>
    )
}