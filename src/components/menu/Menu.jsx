import './menu.scss'

export default function Menu({open, setOpen}) {
    return (
        <div className={'menu ' + (open && "active")}>
            <ul>
                <li><a href="#intro">Home</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#testemonials">Testemonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}
