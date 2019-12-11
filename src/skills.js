import React, { Component } from "react"


const photos = [

    {
        src: "https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png",
        width: 1,
        height: 1
    },
    {
        src: "https://static.javatpoint.com/images/javascript/javascript_logo.png",
        width: 1,
        height: 1
    },
    {
        src: "https://i.udemycdn.com/course/750x422/1817082_cf8a_9.jpg",
        width: 1,
        height: 1
    },
    {
        src: "https://i.ytimg.com/vi/OEGm7LXAN_c/maxresdefault.jpg",
        width: 1,
        height: 1
    }

]

const photos2 = [
    {
        src: "https://miro.medium.com/max/3200/1*DiNIG4Bfpm65_wwXf_JwMA.png",
        width: 1,
        height: 1
    },
    {
        src: "https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2019/11/severless-nodejs-app.jpeg?fit=730%2C486&ssl=1",
        width: 1,
        height: 1
    },
    {
        src: "https://cw-production-assetsbucket-8j84s7jns7p2.s3.amazonaws.com/media/blog-images/drf-logo2.png",
        width: 1,
        height: 1
    },
    {
        src: "https://miro.medium.com/max/500/1*jZResH9_YJJwPnC9melvAg.png",
        width: 1,
        height: 1
    },




]



class skills extends Component {

    render() {
        const images = photos.map((image) =>
            <img src={image.src} width={300} height={300} alt="first array of images"></img>

        )

        const images2 = photos2.map((image2) =>
            <img src={image2.src} width={300} height={300} alt="second array of images"></img>
        )

        return (
            <div>
                

                <div className="contact_wrapper">


                    <div className="contacts"> <a href="https://www.linkedin.com/in/cassandra-cowens-3284a2189" target='blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" width={40} height={35} alt="linkedinlogo"></img></a></div>
                    <div className="contacts"> <a href="https://github.com/CCowens93" target='blank'><img src="http://pngimg.com/uploads/github/github_PNG20.png" width={40} height={35} alt="githublog"></img></a></div>
                    

                </div>
                <p>My continuously growing list of languages, frameworks, and databases I am proficient in can be found below!</p>
                <div className="skills_imgs">
                    {images}
                </div>

                <div className="skills_imgs2">
                    {images2}
                </div>
            </div>
        )


    }
}
export default skills