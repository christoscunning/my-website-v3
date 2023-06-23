import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Content goes here */}
                <h3 className="center-text" style={{ marginBottom: "1em" }}>
                    Check out my GitHub at the link below to view some of my projects!
                </h3>
                <a href="https://www.github.com/christoscunning">
                    github.com/christoscunning
                </a>
                <br />
                <br />
                <h5>Research Paper:</h5>
                <h5>Can Cryptocurrencies Make the (Digital) World Go Round?</h5>
                <a href="crypto-paper-v3.html">Link</a>
                <br />
                <br />
                <br />

                <h5>Play Quarto!</h5>
                <Link to={'/quarto'}>Link</Link>

            </div>
        </>
    );
}