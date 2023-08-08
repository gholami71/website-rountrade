import { MdOutlineNavigateNext } from "react-icons/md";

const Header = () =>{
    return(
        <header>
            <div className="LogoContainer">
                <img src='/img/logo.svg'></img>
                <img src='/img/subLogo.svg'></img>
            </div>
            <div className="login">
                <a href="app.roundtrade.ir">
                    <span className="next">
                        <span><MdOutlineNavigateNext/></span>
                        <span><MdOutlineNavigateNext/></span>
                        <span><MdOutlineNavigateNext/></span>
                    </span>
                    <span className="enter">ورود به برنامه</span>
                    </a>
            </div>
        </header>
    )
}
export default Header