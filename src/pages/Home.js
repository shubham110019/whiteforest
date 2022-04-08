import React from 'react';
import bannerimg from '../assets/img/hero-10-img.png';
import phoneimg from '../assets/img/image-10.png';
import appleDl from '../assets/img/appstore-grey.png';
import androidDl from '../assets/img/googleplay-grey.png';
function Home()
{
    return(
        <>
            <section id="hero-10" className="bg-fixed bg-lightgrey hero-section division">
				<div className="container">	
					<div className="row d-flex align-items-center">


					
						<div className="col-md-7 col-lg-6">
							<div className="hero-txt">	


								
								<h2 className="h2-xs " >

                                UNLEASH THE POWER OF <span className="green-color">YOUR BRAIN</span>. BE A BETTER VERSION OF YOURSELF
								</h2>

								
								<div className="modal-video grey-color " >
									<a className="video-popup" href="https://www.youtube.com/watch?v=kuceVNBTJio">		
										<span><i className="far fa-play-circle"></i></span>
										Watch the Overview
									</a>
								</div>

									
							</div>	   
						</div>	 


					
						<div className="col-md-5 col-lg-4 offset-lg-2 " >	
							<div className="hero-img">				
                            <img class="img-fluid" src={bannerimg} alt="hero-image"/>
							</div>
						</div>


					</div>	  
				</div>     
			</section>	






            <section id="features-2" class="bg-lightgrey p-top-60 p-bottom-60 featuress-section division">
				<div class="container">


				
					<div class="row">	
						<div class="col-md-10 offset-md-1 section-title">	

						
							<h2 class="h2-lg">MEMORY LAPSES</h2>	

					
							<p>Aliquam a augue suscipit, luctus neque purus ipsum neque dolor primis libero tempus, 
							   tempor posuere ligula varius
							</p>
								
						</div>		
					</div> 	


			 		<div class="row">


						<div class="col-md-6 col-lg-4 ">
							<div class="fbox-2 box-icon-lg green-icon">
								<span class="pe-7s-piggy"></span>
								<h5 class="h5-md">MISPLACE YOUR THINGS VERY OFTEN</h5>	
							</div>							
						</div>

						<div class="col-md-6 col-lg-4 ">
							<div class="fbox-2 box-icon-lg green-icon">
								<span class="pe-7s-piggy"></span>
								<h5 class="h5-md">WHERE DID I PARK THE CAR</h5>	
							</div>							
						</div>


						<div class="col-md-6 col-lg-4 ">
							<div class="fbox-2 box-icon-lg green-icon">
								<span class="pe-7s-piggy"></span>
								<h5 class="h5-md">FORGETTING IMPORTANT DATES</h5>	
							</div>							
						</div>
				

			 		</div>	  


			 	</div>	  	
			</section>	




			<section id="download-3" class="bg-lightgrey wide-100 download-section">
<div class="bg-scroll bg-inner bg-dark division">
<div class="container white-color">
<div class="row d-flex align-items-center">
<div class="col-md-5 col-lg-4 ">
<div class="download-3-img text-center ind-15"><img class="img-fluid" src={phoneimg} alt="download-image" /></div>
</div>
<div class="col-md-7 col-lg-7 offset-lg-1">
<div class="download-txt ind-30">
<h2 class="h2-xs ">It’s perfect time to join MobiCom</h2>
<p class="p-lg ">Feugiat eros, ac tincidunt ligula massa in faucibus orci luctus posuere cubilia curae integer congue leo metus</p>
<div class="stores-badge "> <a class="store" href="#"> <img class="appstore-grey" src={appleDl} alt="appstore-logo" width="158" height="50" /> </a> <a class="store" href="#"> <img class="googleplay-grey" src={androidDl} alt="googleplay-logo" width="168" height="50" /> </a></div>
</div>
</div>
</div>
</div>
</div>
</section>
        </>
    )

}
export default Home;