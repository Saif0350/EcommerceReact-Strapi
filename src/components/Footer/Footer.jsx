import {FaLocationArrow, FaMobileAlt, FaEnvelope} from 'react-icons/fa'
import "./Footer.scss";
import Payment from '../../assets/payments.png'
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">

                    <div className="col">
                        <div className="title">About</div>
                        <div className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolorem ad iure eos deserunt molestiae quis doloremque odit illo veritatis, quo nulla quod aspernatur temporibus corrupti assumenda sapiente saepe numquam omnis minus.
                        </div>
                    </div>

                    <div className="col">
                        <div className="title">Contact</div>

                        <div className="c-item">
                            <FaLocationArrow />
                            <div className="text">
                                Address: Mumbai, Maharashtra
                            </div>
                        </div>

                        <div className="c-item">
                            <FaMobileAlt />
                            <div className="text">
                                Phone: +91 9136858496
                            </div>
                        </div>

                        <div className="c-item">
                            <FaEnvelope />
                            <div className="text">
                                Email: saifalam.st@gmail.com
                            </div>
                        </div>
                    </div>


                    <div className="col">
                            <div className="title">Categories</div>
                            <span className="text">Headphones</span>
                            <span className="text">Smart Watches</span>
                            <span className="text">Bluetooth Speakers</span>
                            <span className="text">Wireless Earbuds</span>
                            <span className="text">Home Theater</span>
                            <span className="text">Projectors</span>
                    </div>
                    <div className="col">
                        <div className="title">Pages</div>
                        <span className="text">Home</span>
                        <span className="text">About</span>
                        <span className="text">Privacy Policy</span>
                        <span className="text">Returns</span>
                        <span className="text">Terms & Conditions</span>
                        <span className="text">Contact Us</span>
                    </div>
                </div>

                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">Copyright © SAIFALAMSTORE 2023. All Rights Reserved.  Crafted By <a href="https://saifalam.com/" target='_blank'> SAIFALAM </a></div>
                        <img src={Payment} alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
