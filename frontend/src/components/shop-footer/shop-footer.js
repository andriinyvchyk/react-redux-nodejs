import React from 'react';
import './shop-footer.css'

const ShopFooter = () => {
    return (
        <div className='container'>

            <div className='ctn-footer'>
                <div className='container d-flex justify-content-between'>
                    <div className='footer-block-categories'>
                        <p className='footer-block-p'>Categories</p>
                        <a href='#'>Help Contact Us</a>
                        <a href='#'>Returns Refunds</a>
                        <a href='#'>Online Stores</a>
                        <a href='#'>Terms Conditions</a>
                    </div>
                    <div className='footer-block-ourStore'>
                        <p className='footer-block-p'>Our Store</p>
                        <a href='#'>About</a>
                        <a href='#'>Blog</a>
                        <a href='#'>Shop</a>
                        <a href='#'>Contacts</a>
                    </div>
                    <div className='footer-block-protfile'>
                        <p className='footer-block-p'>Protfile</p>
                        <a href='#'>Checkout</a>
                        <a href='#'>My account</a>
                        <a href='#'>Order tracking</a>
                        <a href='#'>Help support</a>
                    </div>
                    <div className='footer-block-aboutUs'>
                        <p className='footer-block-p'>About Us</p>
                        <span>
                            Variegated is the place where everyone can is able to find some clothing called to highlight one’s individuality! We are waiting right for you!
                    </span>
                    </div>
                </div>
                <div className='line'></div>
                <div className='container d-flex justify-content-between'>
                    <div className='infoCreatingWebSite'>
                        <p>© 2020 Variegated. All Rights Reserved.</p>
                    </div>
                    <div className='footer-link-neetwork'>
                        <a href='#'><i className="fab fa-facebook-f"></i></a>
                        <a href='#'><i className="fab fa-instagram"></i></a>
                        <a href='#'><i className="fab fa-google"></i></a>
                        <a href='#'><i className="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopFooter;