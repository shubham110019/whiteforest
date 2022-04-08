import React from 'react';

function Newletter(){
    return(
        <>

<section id="newsletter-2" className="bg-scroll bg-green newsletter-section division">
<div className="container white-color">
<div className="row d-flex align-items-center">
<div className="col-lg-6">
<div className="newsletter-txt">
<h3 className="h3-xs">Stay up to date with our news, ideas and updates</h3>
</div>
</div>
<div className="col-lg-6"><form className="newsletter-form p-left-30">
<div className="input-group"><input id="s-email" className="form-control" required="" type="email" placeholder="Your email address" /> <button className="btn" type="submit"></button></div>
 <label className="form-notification" for="s-email"></label></form></div>
</div>
</div>
</section>

       
    
        </>
    )
}
export default Newletter;