import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faVimeoV, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <>
            <div className="xl:h-[10rem] w-full bg-white text-black py-4 " id='contact'  >
                <div className="w-full h-full xl:max-w-[1250px] mx-auto px-4 flex flex-col xl:flex-row items-center" >
                    <div className="flex-1" >
                        <p className="text-[1.3rem] font-medium text-center xl:text-start " >Stay in the loop</p>
                        <p className="text-sm mt-2 text-center xl:text-start" >
                            Subscribe to receive the latest news and updates about DGB.
                            We promise not to spam you!
                        </p>
                    </div>

                    <div className="px-[1rem] flex items-end mt-4 xl:mt-0 " >
                        <div className="h-[3rem] w-full xl:w-[26rem] bg-black rounded-lg flex items-center p-1" >
                            <input type="text" placeholder="Enter email address" className="border-0 outline-none text-sm flex-1 px-2 bg-transparent text-white placeholder-gray-400" />
                            <button className="h-full px-4 xl:w-[8rem] bg-[#d80027] rounded-lg text-sm " >Continue</button>
                        </div>

                    </div>

                </div>
            </div>
            <footer className="main-footer">
                <div className="container">
                    <div className="footer-content">
                        <div className="row">
                                {/* <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                    <div className="logo-widget footer-widget">
                                        <figure className="logo-box">
                                            <a href="#">
                                                <img src="https://i.ibb.co/QDy827D/ak-logo.png" alt="Logo" />
                                            </a>
                                        </figure>
                                        <div className="text">
                                            <p>Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure.</p>
                                        </div>
                                        <ul className="footer-social text-center">
                                            <li><a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                            <li><a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                            <li><a href="https://www.vimeo.com"><FontAwesomeIcon icon={faVimeoV} /></a></li>
                                            <li><a href="https://www.google.com"><FontAwesomeIcon icon={faGooglePlusG} /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 offset-lg-2 footer-column">
                                    <div className="service-widget footer-widget">
                                        <div className="footer-title text-center">Services</div>
                                        <ul className="list text-center">
                                            <li><a href="#">Water Surve</a></li>
                                            <li><a href="#">Education for all</a></li>
                                            <li><a href="#">Food Serving</a></li>
                                            <li><a href="#">Animal Saves</a></li>
                                            <li><a href="#">Help Orphan</a></li>
                                        </ul>
                                    </div>
                                </div> */}
                            <div className="col-lg-4 col-md-6 col-sm-12 footer-widget">
                                <div className="contact-widget footer-widget">
                                    <div className="footer-title">Contacts</div>
                                    <div className="text">
                                        <p>A gaming website where players can explore, compete, and connect with others online.</p>
                                        <p>987654321</p>
                                        <p>dreamgamebuilders@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                <div className="copyright">
                                    <a href="#">dreamgamebuilders</a> &copy; 2019 All Right Reserved
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 column">
                                <ul className="footer-nav">
                                    <li><a href="#">Terms of Service</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer