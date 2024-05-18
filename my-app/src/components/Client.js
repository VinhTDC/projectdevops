import React from 'react';

function Client() {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
    };
    
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
    };

    return (
        <html lang="en">
            <head>
                {/* basic */}
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {/* mobile metas */}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
                {/* site metas */}
                <title>Client</title>
                <meta name="keywords" content="" />
                <meta name="description" content="" />
                <meta name="author" content="" />
                {/* bootstrap css */}
                <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css" />
                {/* style css */}
                <link rel="stylesheet" type="text/css" href="css/style.css" />
                {/* Responsive*/}
                <link rel="stylesheet" href="css/responsive.css" />
                {/* fevicon */}
                <link rel="icon" href="images/fevicon.png" type="image/gif" />
                {/* Scrollbar Custom CSS */}
                <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />
                {/* Tweaks for older IEs */}
                <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
                {/* fonts */}
                <link href="https://fonts.googleapis.com/css?family=Great+Vibes|Open+Sans:400,700&display=swap&subset=latin-ext" rel="stylesheet" />
                {/* owl stylesheets */}
                <link rel="stylesheet" href="css/owl.carousel.min.css" />
                <link rel="stylesheet" href="css/owl.theme.default.min.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen" />
                <link href="https://unpkg.com/gijgo@1.9.13/css/gijgo.min.css" rel="stylesheet" type="text/css" />
            </head>
            <body>
                {/* header section start */}
                <div className="header_section">
                    <div className="container-fluid">
                        <nav className="navbar navbar-light bg-light justify-content-between">
                            <div id="mySidenav" className="sidenav">
                                <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                                <a href="index.html">Home</a>
                                <a href="products.html">Products</a>
                                <a href="about.html">About</a>
                                <a href="client.html">Client</a>
                                <a href="contact.html">Contact</a>
                            </div>
                            <span className="toggle_icon" onClick={openNav}><img src="images/toggle-icon.png" alt="toggle icon" /></span>
                            <a className="logo" href="index.html"><img src="images/logo.png" alt="logo" /></a>
                            <form className="form-inline ">
                                <div className="login_text">
                                    <ul>
                                        <li><a href="#"><img src="images/user-icon.png" alt="user icon" /></a></li>
                                        <li><a href="#"><img src="images/bag-icon.png" alt="bag icon" /></a></li>
                                        <li><a href="#"><img src="images/search-icon.png" alt="search icon" /></a></li>
                                    </ul>
                                </div>
                            </form>
                        </nav>
                    </div>
                </div>
                {/* header section end */}
                {/* customer section start */}
                <div className="customer_section layout_padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h1 className="customer_taital">What says customers</h1>
                            </div>
                        </div>
                        <div id="main_slider" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="client_section_2">
                                        <div className="client_main">
                                            <div className="client_left">
                                                <div className="client_img"><img src="images/client-img.png" alt="client" /></div>
                                            </div>
                                            <div className="client_right">
                                                <h3 className="name_text">Jonyro</h3>
                                                <p className="dolor_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation eu </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="client_section_2">
                                        <div className="client_main">
                                            <div className="client_left">
                                                <div className="client_img"><img src="images/client-img.png" alt="client" /></div>
                                            </div>
                                            <div className="client_right">
                                                <h3 className="name_text">Jonyro</h3>
                                                <p className="dolor_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation eu </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="client_section_2">
                                        <div className="client_main">
                                            <div className="client_left">
                                                <div className="client_img"><img src="images/client-img.png" alt="client" /></div>
                                            </div>
                                            <div className="client_right">
                                                <h3 className="name_text">Jonyro</h3>
                                                <p className="dolor_text">consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation eu </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
                                <i className="fa fa-angle-left"></i>
                            </a>
                            <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* customer section end */}
                {/* footer section start */}
                <div className="footer_section layout_padding margin_top90">
                    <div className="container">
                        <div className="footer_logo"><a href="index.html"><img src="images/footer-logo.png" alt="footer logo" /></a></div>
                        <div className="contact_section_2">
                            <div className="row">
                                <div className="col-sm-4">
                                    <h3 className="address_text">Contact Us</h3>
                                    <div className="address_bt">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-map-marker" aria-hidden="true"></i><span className="padding_left10">Address : Loram Ipusm</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-phone" aria-hidden="true"></i><span className="padding_left10">Call : +01 1234567890</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-envelope" aria-hidden="true"></i><span className="padding_left10">Email : demo@gmail.com</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="footer_logo_1"><a href="index.html"><img src="images/footer-logo.png" alt="footer logo" /></a></div>
                                    <p className="dummy_text">commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                                </div>
                                <div className="col-sm-4">
                                    <div className="main">
                                        <h3 className="address_text">Best Products</h3>
                                        <p className="ipsum_text">dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="social_icon">
                            <ul>
                                <li>
                                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* footer section end */}
                {/* copyright section start */}
                <div className="copyright_section">
                    <div className="container">
                        <p className="copyright_text">2020 All Rights Reserved. Design by <a href="https://html.design">Free html Templates</a></p>
                    </div>
                </div>
                {/* copyright section end */}
                {/* Javascript files*/}
                <script src="js/jquery.min.js"></script>
                <script src="js/popper.min.js"></script>
                <script src="js/bootstrap.bundle.min.js"></script>
                <script src="js/jquery-3.0.0.min.js"></script>
                <script src="js/plugin.js"></script>
                {/* sidebar */}
                <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
                <script src="js/custom.js"></script>
                {/* javascript */}
                <script src="js/owl.carousel.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js"></script>
                <script src="https://unpkg.com/gijgo@1.9.13/js/gijgo.min.js" type="text/javascript"></script>
            </body>
        </html>
    );
}

export default Client;
