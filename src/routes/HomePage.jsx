import AboutMe from "./AboutMe";


export default function HomePage() {
    return (
        <>
            {/* <div className="container" id="home-page"> */}
            <div id="home-page">
                {/* <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-10"> */}
                        <div className="row" style={{ display: "flex"}}>

                            {/*
                            <div className="col-sm-6" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <img src="./me-oldfbpp.jpg" id="portrait" />
                            </div>

                            */}
                            <div className="col-sm-2"></div>

                            <div className="col-sm-8" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <div id="intro-div">
                                    <p id="intro-text" style={{color: "white"}}>
                                    Hi, my name is Christos Cunning. I recently graduated from McGill  
                                    with a bachelor's degree in computer engineering, and I am a passionate software
                                    developer. This is my website.
                                    </p>
                                    
                                    <div class="">
                                        <p id="contact-title">Contact Me:</p>
                                        <a href="mailto:christoscunn@gmail.com">
                                        christoscunn@gmail.com
                                        </a>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="col-sm-2"></div>
                        </div>

                        <div className="row" style={{marginTop: "4em"}}>
                            <div className="col-sm-2"></div>

                            <div className="col-sm-8">
                                <h4 style={{color: "white"}}>A bit about me...</h4>
                                <AboutMe></AboutMe>
                            </div>

                            <div className="col-sm-2"></div>
                        </div>

                    {/* </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div> */}
            </div>
        </>
    );
}