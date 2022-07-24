import "./navbar.scss" ;
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

const Navbar = () => {
    return(
        <div className="navbar" >
            <div className="wrapper" >
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchIcon />
                </div>
                <div className="items" >
                    <div className="item" >
                        <LanguageIcon className="icon"/>
                        English
                    </div>
                    <div className="item" >
                        <DarkModeIcon className="icon"/>
                    </div>
                    <div className="item" >
                        <FullscreenExitIcon className="icon"/>
                    </div>
                    <div className="item" >
                        <NotificationsNoneIcon className="icon"/>
                        <div className="counter" >1</div>
                    </div>
                    <div className="item" >
                        <ChatBubbleOutlineIcon className="icon"/>
                        <div className="counter" >2</div>
                    </div>
                    <div className="item" >
                        <ListIcon className="icon"/>
                    </div>
                    <div className="item" >
                        <img 
                            src="https://media-exp1.licdn.com/dms/image/C4D03AQGzNlOg9gZcMQ/profile-displayphoto-shrink_800_800/0/1657030714519?e=1664409600&v=beta&t=jD3o7ZTSBXN27H1Zk57JoJh0_XHG09JczNglx4o7mRw"
                            alt="avatar"
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar ;