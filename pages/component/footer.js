
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";



const Footer = () =>{
    return(
        <footer>
            <div className="content">
                <div className="Contact_us">
                    <p>آدرس: یزد،میدان خاتمی،کوچه طلاب، پلاک37</p>
                    <p>شماره تماس: 03537269343</p>
                </div>
                <div className="links">
                    <p>رسانه ها</p>
                    <div>
                        <a href="https://www.instagram.com/roundtrade"><span><FaInstagram/></span></a>
                        <a href="https://www.t.me/roundtrade"><span><LiaTelegramPlane/></span></a>
                    </div>
                </div>
                <div className="pages">
                    <a>قوانین</a>
                    <a>درباره ما</a>
                    <a>سوالات متداول</a>
                </div>
            </div>
            <div className="copyright">
                <a href="https://roundtrade.ir">کلیه حقوق متعلق به رند ترید است</a>
            </div>
        </footer>
    )
}


export default Footer