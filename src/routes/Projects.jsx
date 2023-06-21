

export default function Projects() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-3" />
                    <div className="col-sm-6">
                    {/* Content goes here */}
                    <h3 className="center-text" style={{ marginBottom: "1em" }}>
                        Check out my GitHub at the link below to view some of my projects!
                    </h3>
                    <div className="center-div">
                        <a href="https://www.github.com/christoscunning">
                        github.com/christoscunning
                        </a>
                    </div>
                    <br />
                    <br />
                    <h5>Research Paper:</h5>
                    <h5>Can Cryptocurrencies Make the (Digital) World Go Round?</h5>
                    <a href="crypto-paper-v3.html">Link</a>
                    <br />
                    <br />
                    <br />
                    </div>
                    <div className="col-sm-3" />
                </div>
            </div>
        </>
    );
}