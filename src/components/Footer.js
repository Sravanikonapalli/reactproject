import '../styles/footer.css';
import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGooglePay, FaCcApplePay } from "react-icons/fa";
import { CgPaypal } from "react-icons/cg";
import { LiaCcAmex } from "react-icons/lia";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { GiUsaFlag } from "react-icons/gi";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [showMettaMuse, setShowMettaMuse] = useState(false);
    const [showQuickLinks, setShowQuickLinks] = useState(false);
    const [showFollowUs, setShowFollowUs] = useState(false);

    const handleSubscribe = () => {
        // Clear email input field after subscribing
        setEmail("");
    };

    return (
        <>
        <div className='large-screens'>
        <div className='footer-container'>
            <div className='contact-container'>
                <div className='sub-sections'>
                    <h1>BE THE FIRST TO KNOW</h1>
                    <p>Sign up for updates from metta use</p>
                    <div className='input-field-btn'>
                    <input type="email"
                     className='email-field'
                     placeholder='Enter your e-mail...'
                     value={email}
                     onChange={(e)=>setEmail(e.target.value)}/>
                    <button type="button"
                     className='subscribe-btn'
                     onClick={handleSubscribe}>SUBSCRIBE</button>
                    </div>
                </div>
                <div className='sub-sections'>
                    <h1>CONTACT US</h1>
                    <p>+44 221 133 5360</p>
                    <p>customercare@mettamuse.com</p>
                    <h2>CURRENCY</h2>
                    <p><GiUsaFlag size={25}/>  . USD</p>
                    <p>Transactions will be completed in Euros and currency reference is available in hover</p>
                </div>
            </div>
            <hr className='hr-line'/>
            <div className='followus-container'>
                <div className='sub-sections'>
                    <h1>metta muse</h1>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact US</p>
                    <p>Eu compliances Docs</p>
                </div>
                <div className='sub-sections'>
                    <h1>QUICK LINKS</h1>
                    <p>Orders & shipping</p>
                    <p>Join/Login as a Seller</p>
                    <p>Payment and Pricing</p>
                    <p>Return & Refunds</p>
                    <p>FAQs</p>
                    <p>Privacy Policies</p>
                    <p>Terms and Conditions</p>
                </div>
                <div className='sub-sections'>
                    <h1>FOLLOW US</h1>
                    <div className='social-media-apps'>
                        <a href='https://www.instagram.com/metta_muse/'><FaInstagram size={25}/></a>
                        <a href="https://www.linkedin.com/company/metta-muse/"><FaLinkedin size={25}/></a>
                    </div>
                    <h1>metta muse ACCEPTS</h1>
                    <div className='payments-section'>
                        <CgPaypal size={35}/>
                        <FaGooglePay size={35}/>
                        <LiaCcAmex size={35}/>
                        <FaCcApplePay size={35}/>
                    </div>    
                </div>
            </div>
            <hr className='hr-line'/>
            <div className='copyright-section'>
                <p>&copy; 2025 Metta Muse. All rights reserved.</p>
            </div>
        </div>
        </div>


        {/* display on small screens  */}

        <div className='small-screens'>
        <div className='footer-container'>
            {/* BE THE FIRST TO KNOW Section */}
            <div className='sub-sections'>
                <h1>BE THE FIRST TO KNOW</h1>
                <p>Sign up for updates from Metta Muse</p>
                <div className='input-field-btn'>
                <input 
                    type="email" 
                    className='email-field' 
                    placeholder='Enter your e-mail...'
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <button 
                    type="button" 
                    className='subscribe-btn' 
                    onClick={handleSubscribe}
                >
                    SUBSCRIBE
                </button>
                </div>
            </div>
            <hr className='hr-line' />

            {/* Call Us Section */}
            <div className='sub-sections'>
                <h1>CALL US</h1>
                <p>+44 221 133 5360   . customercare@mettsmuse.com</p>
            </div>    
            <hr className='hr-line' />
            <div className='sub-sections'>    
                <h1>CURRENCY</h1>
                <p><GiUsaFlag size={25}/>  . USD</p>
            </div>
            <hr className='hr-line' />

            {/* Metta Muse Section */}
            <div className='collapsible-section'>
                <div className='collapsible-header' onClick={() => setShowMettaMuse(!showMettaMuse)}>
                    <h1>Metta Muse</h1>
                    {showMettaMuse ? <IoIosArrowUp size={20} className='arrow'/> : <IoIosArrowDown size={20} className='arrow'/>}
                </div>
                {showMettaMuse && (
                    <div className='collapsible-content'>
                        <p>About Us</p>
                        <p>Stories</p>
                        <p>Artisans</p>
                        <p>Boutiques</p>
                        <p>Contact Us</p>
                        <p>EU Compliance Docs</p>
                    </div>
                )}
                <hr className='hr-line' />
            </div>

            {/* Quick Links Section */}
            <div className='collapsible-section'>
                <div className='collapsible-header' onClick={() => setShowQuickLinks(!showQuickLinks)}>
                    <h1>Quick Links</h1>
                    {showQuickLinks ? <IoIosArrowUp size={20} className='arrow'/> : <IoIosArrowDown size={20} className='arrow'/>}
                </div>
                {showQuickLinks && (
                    <div className='collapsible-content'>
                        <p>Orders & Shipping</p>
                        <p>Join/Login as a Seller</p>
                        <p>Payment and Pricing</p>
                        <p>Return & Refunds</p>
                        <p>FAQs</p>
                        <p>Privacy Policies</p>
                        <p>Terms and Conditions</p>
                    </div>
                )}
                <hr className='hr-line' />
            </div>

            {/* Follow Us Section */}
            <div className='collapsible-section'>
                <div className='collapsible-header' onClick={() => setShowFollowUs(!showFollowUs)}>
                    <h1>Follow Us</h1>
                    {showFollowUs ? <IoIosArrowUp size={20} className='arrow'/> : <IoIosArrowDown size={20} className='arrow'/>}
                </div>
                {showFollowUs && (
                    <div className='collapsible-content'>
                        <div className='social-media-apps'>
                            <a href='https://www.instagram.com/metta_muse/'><FaInstagram size={25} /></a>
                            <a href='https://www.linkedin.com/company/metta-muse/'><FaLinkedin size={25} /></a>
                        </div>
                    </div>
                )}
                <hr className='hr-line' />
            </div>

            {/* Payment Methods Section */}
            <div className='sub-sections'>
                <h1>Metta Muse ACCEPTS</h1>
                <div className='payments-section'>
                    <CgPaypal size={40} />
                    <FaGooglePay size={40} />
                    <LiaCcAmex size={40} />
                    <FaCcApplePay size={40} />
                </div>
            </div>
            <hr className='hr-line' />
            {/* Copyright Section */}
            <div className='copyright-section'>
                <p>&copy; 2025 Metta Muse. All rights reserved.</p>
            </div>
        </div>
        </div>
        </>
  )
}

export default Footer;