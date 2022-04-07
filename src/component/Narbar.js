import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/img/SB_Logo.png';
function Navbar(){
	const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
          setScroll(window.scrollY > 50);
        });
      }, []);

    return(
        <>
        <header id="header" className="header">
				<nav className={scroll ? "navbar fixed-top navbar-expand-lg navbar-dark bg-tra scroll" : "navbar fixed-top navbar-expand-lg navbar-dark bg-tra"}>
					<div className="container">


				 		<Link to="/" className="navbar-brand logo-white"><img src={logo} width="150" height="60" alt="header-logo"/></Link>
				 		<Link to="/" className="navbar-brand logo-black"><img src={logo} width="150" height="60" alt="header-logo"/></Link>


				 
				 		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				   		 	<span className="navbar-toggler-icon"></span>
				  		</button>


				  	
				  		<div id="navbarSupportedContent" className="collapse navbar-collapse">
					   		<ul className="navbar-nav ml-auto">
			      		
			      			
							   <li className="nav-item nl-simple"><Link className="nav-link" to="/">Home</Link></li>
					      		<li className="nav-item nl-simple"><Link className="nav-link" to="/about">About Us</Link></li>
								  <li className="nav-item dropdown">
							        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							           Services 
							        </a>
							        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
							        	<Link className="dropdown-item" to="#features-2">Speed Reading</Link>
							        	<Link className="dropdown-item" to="#content-2">Memorizing Names</Link>
							        	<Link className="dropdown-item" to="#team-1">Remembering Numbers</Link>
							         	<Link className="dropdown-item" to="#video-4">Memorizing Dates</Link>
							         	<Link className="dropdown-item" to="#reviews-2">Memory Sports</Link>
							        </div>
							    </li>

					      		<li className="nav-item nl-simple"><Link className="nav-link pre-link" to="/blogs">Blogs</Link></li>
					      		<li className="nav-item nl-simple"><Link className="nav-link" to="/Contact-Us">Contact us</Link></li>					      		

						

					      	</ul>
					    </div>


					</div>	 
				</nav>	 
			</header>	
        </>
    )
}
export default Navbar;