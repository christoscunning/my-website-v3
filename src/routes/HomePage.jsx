

export default function HomePage() {
    return (
        <>
            {/* <div className="container" id="home-page"> */}
            <div id="home-page">
                {/* <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-10"> */}
                        <div className="row" style={{ display: "flex", margin: "0"}}>

                            {/*
                            <div className="col-sm-6" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <img src="./me-oldfbpp.jpg" id="portrait" />
                            </div>

                            */}
                            <div className="col-sm-2"></div>

                            <div className="col-sm-8" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <div id="intro-div">
                                    <p id="intro-text">
                                    Hi, I'm Christos Cunning. I recently graduated from McGill University 
                                    with a bachelor's in computer engineering, and I am a passionate software
                                    developer.
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
                    {/* </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div> */}
            </div>
        </>
    );
}