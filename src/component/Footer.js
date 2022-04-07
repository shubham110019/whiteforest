import React from 'react';
import logo from '../img/SB_Logo.png';
function Footer(){
    return(
        <>
            <footer id="footer-1" className="bg-lightgrey wide-60 footer division">
<div className="container">
<div className="row">
<div className="col-lg-5">
<div className="footer-info p-right-45 m-bottom-40"> <img src={logo} alt="footer-logo" width="173" height="40" />
<p className="m-top-20">An orci nullam tempor sapien, eget gravida integer donec ipsum porta justo at odio integer congue orci magna undo auctor gravida velna magna lacus odio ac risus auctor tempus dolor feugiat</p>
</div>
</div>
<div className="col-md-4 col-lg-2">
<div className="footer-links m-bottom-40">
<h5 className="h5-md">Useful Links</h5>
<ul className="foo-links clearfix">
<li><a href="#">How It Works?</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms of Service</a></li>
<li><a href="#">Site Map</a></li>
</ul>
</div>
</div>
<div className="col-md-4 col-lg-2">
<div className="footer-links m-bottom-40">
<h5 className="h5-md">Support</h5>
<ul className="foo-links clearfix">
<li><a href="#">FAQs</a></li>
<li><a href="#">Editor Help</a></li>
<li><a href="#">Life Chatting</a></li>
<li><a href="#">Contact Us</a></li>
</ul>
</div>
</div>
<div className="col-md-4 col-lg-3">
<div className="footer-stores-badge text-right m-bottom-40"> 

</div>
</div>
</div>
<div className="bottom-footer">
<div className="row">
<div className="col-md-12">
<div className="footer-copyright">
<p>© 2018 MobiCom. All Rights Reserved</p>
</div>
</div>
</div>
</div>
</div>
</footer>
    
        </>
    )
}
export default Footer;