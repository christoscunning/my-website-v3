

export default function HomePage() {
    return (
        <>
            {/* <div className="container" id="home-page"> */}
            <div id="home-page">
                {/* <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-10"> */}
                        <div className="row" style={{ display: "flex", margin: "0"}}>
                            <div className="col-sm-6" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <img src="./me-oldfbpp.jpg" id="portrait" />
                            </div>
                            <div className="col-sm-6" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <div id="intro-div">
                                    <p id="intro-text">
                                    Hi, I'm Christos Cunning, a recent graduate Computer
                                    Engineering at McGill University and a passionate software
                                    developer. I also enjoy playing hockey, ultimate
                                    and{" "}
                                    <a
                                        className="hidden-link"
                                        href="https://store.steampowered.com/app/212680/FTL_Faster_Than_Light/"
                                    >
                                        video games
                                    </a>{" "}
                                    in my spare time.
                                    </p>
                                    <p id="contact-title">Contact Me:</p>
                                    <a href="mailto:christos.cunning@mail.mcgill.ca">
                                    christoscunn@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    {/* </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div> */}
            </div>
        </>
    );
}