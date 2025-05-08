export default function Tabs({children, buttons, ButtonsContainer="div"}){
    //Above we are setting default props value to the prop
    //Here We don't have custome component "ButtonsContainer", Just for the reusablity of Tabs with dynamic wrapper element. 
    // const ButtonsContainer = buttonsContainer;
    return(
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}