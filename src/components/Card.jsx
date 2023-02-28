export default function Card({ children, className }){
   return ( <div 
    className={`p-5 shadow-lg border-black border-solid border-2 m-5 rounded-md ${className ? className : ''}`}
    >
    {children}
    </div>)
}