// Eventhough we don't have any props in component, It has a children props by default.
export default function TabButton({children, isSelected, ...props}){
    
    return(
        <li>
            <button className={isSelected ? "active" : undefined} {...props}>{children}</button>
        </li>
    )
}