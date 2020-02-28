import React from 'react';

import './home.css';

const Home = () => {
    return (
        <div className='cnt-slide'>
            <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                        <img src="https://ld-wp.template-help.com/woocommerce_prod-14924/v2/wp-content/uploads/2018/02/slider1.jpg" className="d-block w-100" alt="...">
                        </img>
                    </div>

                    <div className="carousel-item" data-interval="2000">
                        <img src="https://ld-wp.template-help.com/woocommerce_prod-14924/v2/wp-content/uploads/2018/02/slider2.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://ld-wp.template-help.com/woocommerce_prod-14924/v2/wp-content/uploads/2018/02/slider3.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Home;