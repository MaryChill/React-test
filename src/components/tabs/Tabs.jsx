
export default function Tabs({children, onClick}) {
    return (
        <p onClick={() => onClick()}>{children}</p>
    )
    
}