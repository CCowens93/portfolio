import React, { Component } from "react"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import HPTrivia from './HPTrivia.png';
import mvsm from './mvsm.png';
import wellness from './wellness.png'
import writers from './writers.png'

class projects extends Component {
    render() {
        return (
            <div>
            <div className="contact_wrapper">


            <div className="contacts"> <a href="https://www.linkedin.com/in/cassandra-cowens-3284a2189" target='blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" width={40} height={35} alt="linkedinlogo"></img></a></div>
            <div className="contacts"> <a href="https://github.com/CCowens93" target='blank'><img src="http://pngimg.com/uploads/github/github_PNG20.png" width={40} height={35} alt="githublog"></img></a></div>
            
           
        </div>
        <p>All project repositories can be viewed in my github! Link up top!</p>
        
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={35}
                totalSlides={4}
            >
            
            
            <Slider>
                <Slide index={0}>
                    <a href="https://dashboard.heroku.com/apps/vast-peak-66418" target='blank'>
                    <div className="project_imgs">Check Me Out!
                    <img src={wellness} width={800} height={460} alt="wellnesstracker" target="blank">
                        </img>
                        </div>
                        </a>
                </Slide>
                <Slide index={1}>
                    <a href="https://heuristic-leakey-615fe1.netlify.com/#" target='blank'>Check Me Out!
                    <div className="project_imgs" ><img src={HPTrivia} width={800} height={460} alt="hptrivia" >
                        </img>
                        </div>
                        </a>
                </Slide>
                <Slide index={2}>
                    <a href="https://dry-wildwood-56838.herokuapp.com/" target='blank'>Check Me Out!
                    <div className="project_imgs"><img src={mvsm} width={800} height={460} alt="m-vs-m">
                        </img>
                        </div>
                        </a>
                </Slide>
                <Slide index={3}>
                    <a href="https://hidden-lowlands-05898.herokuapp.com/" target='blank'>Check Me Out!
                    <div className="project_imgs"><img src={writers} width={800} height={460} alt="writers">
                        </img>
                        </div>
                        </a>
                </Slide>
                
            </Slider>
            
            <ButtonBack><div className="button">Back</div></ButtonBack>
            <ButtonNext><div className="button">Next</div></ButtonNext>
            </CarouselProvider >
            </div>
            
            
        );
    }
}

export default projects