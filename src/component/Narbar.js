import {Link} from 'react-router-dom';
import logo from '../img/SB_Logo.png';
function Navbar(){
    return(
        <>
        <header id="header" className="header">
				<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-tra">
					<div className="container">


				 		<a href="#hero-10" className="navbar-brand logo-white"><img src={logo} width="150" height="60" alt="header-logo"/></a>
				 		<a href="#hero-10" className="navbar-brand logo-black"><img src={logo} width="150" height="60" alt="header-logo"/></a>


				 
				 		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				   		 	<span className="navbar-toggler-icon"></span>
				  		</button>


				  	
				  		<div id="navbarSupportedContent" className="collapse navbar-collapse">
					   		<ul className="navbar-nav ml-auto">
			      		
			      			
					      		<li className="nav-item dropdown">
							        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							          About
							        </a>
							        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
							        	<a className="dropdown-item" href="#features-2">Features</a>
							        	<a className="dropdown-item" href="#content-2">Why MobiCom</a>
							        	<a className="dropdown-item" href="#team-1">Our Team</a>
							         	<a className="dropdown-item" href="#video-4">How It Works</a>
							         	<a className="dropdown-item" href="#reviews-2">Reviews</a>
							          	<div className="dropdown-divider"></div>
							         	<a className="dropdown-item" href="#press-1">Press About Us</a>
							        </div>
							    </li>

					      		<li className="nav-item nl-simple"><a className="nav-link" href="#screens-1">Screens</a></li>
					      		<li className="nav-item nl-simple"><a className="nav-link pre-link" href="#pricing-1">Go Premium<span></span></a></li>
					      		<li className="nav-item nl-simple"><a className="nav-link" href="#faqs-1">FAQs</a></li>					      		

						

					      	</ul>
					    </div>


					</div>	 
				</nav>	 
			</header>	
        </>
    )
}
export default Navbar;