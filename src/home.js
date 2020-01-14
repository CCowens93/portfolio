import React, { Component } from "react";
import portfolio_img from './portfolio_home.jpg'
import profilepic from './profilepic.jpg'

class home extends Component {

    render() {
        return (
            <div>
                <div className="home_background">
                         
                <div className="contact_wrapper">

                    
                    <div className="contacts"> <a href="https://www.linkedin.com/in/cassandra-cowens-3284a2189" target='blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" width={40} height={35} alt="linkedinlogo"></img></a></div>
                    <div className="contacts"> <a href="https://github.com/CCowens93" target='blank'><img src="http://pngimg.com/uploads/github/github_PNG20.png" width={40} height={35} alt="githublog"></img></a></div>
                    {/* <div className="contacts"> <a href="mailto:cassandracowens93@gmail.com" target='blank'><img src="https://imageog.flaticon.com/icons/png/512/281/281769.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" width={40} height={35} alt="gamil"></img></a></div> */}

                </div>
                <div className="me">
                    <div className="headshot">
                        <img src={profilepic} height={200} width={200} alt="headshot"></img>
                    </div>
                    <h1>Cassandra Cowens</h1>
                    <h2>Full Stack Software Engineer</h2>
                    
                    </div>
                </div>
                <footer>
                    @artwork by Pablo Romero
                </footer>
            </div>


        )
    }
}
export default home