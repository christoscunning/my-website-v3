

export default function HomePage() {
    return (
        <>
            <div className="container" id="home-page">
                <div className="row">
                    <div className="col-sm-1" />
                    <div className="col-sm-10">
                    <div className="row" style={{ position: "relative", height: "100%" }}>
                        <div className="col-sm-6">
                        <img src="./me-oldfbpp.jpg" id="portrait" />
                        </div>
                        <div className="col-sm-6">
                        <div id="intro-div">
                            <p id="intro-text">
                            Hi, I'm Christos Cunning, a student currently studying Computer
                            Engineering at McGill University and a passionate software
                            developer in my spare time. I also enjoy playing hockey, ultimate
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
                            christos.cunning@mail.mcgill.ca
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-sm-1" />
                </div>
            </div>
        </>
    );
}