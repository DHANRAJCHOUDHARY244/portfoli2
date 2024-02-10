const MenuIcon = (props) => {
    return (
        <>
            <span className="icon-menu" onClick={()=>props.Open()}>
                <span className="bar" />
                <span className="bar" />
            </span>

        </>
    )
}

export default MenuIcon