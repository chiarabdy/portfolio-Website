import './topbar.scss'
import {PersonPin, MailOutline} from '@material-ui/icons'

export default function Topbar({ open, setOpen }) {
    return (
        <div className={"topbar " + (open && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>Portfolio.</a>
                    <div className="itemContainer">
                        <PersonPin className='icon' />
                        <span>+41 76 379 05 76</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className='icon'/>
                        <span>chiar.abdi@powercoders.org</span>
                    </div>
                </div>
                <div className="right">
                    <div className="burgerMenue" 
                    onClick = {
                        ()=> {
                            setOpen(!open)
                        }
                    }
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            </div>
            
        </div>
    )
}
