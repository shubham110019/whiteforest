import React, { useEffect, useState } from 'react';
import Aboutimg from '../assets/img/5437683.png';

function About() {
    return(
        <>
            <section id="team-1" class="bg-fixed bg-lightgrey wide-100 team-section division">
				<div class="container">

                <div class="row">	
						<div class="col-md-10 offset-md-1 section-title">	
							<h3 class="h2-lg"></h3>	
							<h2 className='mt-5'>IT’S NOT ABOUT WHAT YOU LEARN,<br/>
                                IT’S ABOUT HOW YOU LEARN
							</h2>
										
						</div> 	 	
					</div>

				 	<div class="row align-items-center" bis_skin_checked="1">
                        <div class="col-lg-5" >
                            <img src={Aboutimg} className="img-fluid"/>
                        </div>

                        <div class="col-lg-7">
                        <p>We have been taught to rote learn since time immemorial. Rote method of learning may have been successful in the earlier century but in today’s time, we need a better method.</p>

                        <p>A learning method that is exciting, engaging, and at par with the current time and trends.</p>

                        <p>This is information age; there is information explosion all around us. There is too much to learn but too little time to learn. The only skill that we need right now is the Skill Of Fast And Efficient Learning.</p>

                        <p>WhiteForest is an endeavour dedicated to the forest of 100 billion neurons. An endeavour dedicated to the information super highway of 100 trillion neural connections inside your head. An endeavour dedicated to human brain and brain training.</p>
                        </div>

                        <div class="col-lg-12">
                            <h3>Why Brain Training?</h3>
                            <p>In the last two decades the technology around has changed tremendously. A task that use to take 7 days for completion can now be completed in just 1 day. A task that use to take 24 hours for completion can now be accomplished in just 1 hour. Everything around us has become very fast and there is humungous data, being produced every day.</p>

                            <h3>How much we have upgraded?</h3>
                            <p>We human beings, in flesh and bone alone, how much have we upgraded to keep up with the fast-paced technology. We have not improved at all. Rather, we are becoming more and more dependent on technology and hardly using our brain. one important fact about the brain is:</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}
export default About;