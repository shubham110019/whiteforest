import React from 'react';
import bannerimg from '../img/hero-10-img.png';

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
        </>
    )

}
export default Home;