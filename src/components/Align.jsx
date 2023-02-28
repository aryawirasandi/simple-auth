export default function Align( { children, to = 'left' } ){
    return <div className={"text-" + to}>
        { children }
    </div>
}