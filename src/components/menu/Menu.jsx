import './menu.scss'

export default function Menu({open, setOpen}) {
    const activateMenu = ()=>setOpen(false)
    
    return (
        <div className={'menu ' + (open && "active")}>
            <ul>
                <li onClick={activateMenu}><a href="#intro">Home</a></li>
                <li onClick={activateMenu}><a href="#portfolio">Portfolio</a></li>
                <li onClick={activateMenu}><a href="#projects">Projects</a></li>
                <li onClick={activateMenu}><a href="#testemonials">Testemonials</a></li>
                <li onClick={activateMenu}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
