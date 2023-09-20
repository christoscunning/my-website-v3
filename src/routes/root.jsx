/*
    Rest of the routes will render inside of this 'root' route.
    This will be the global layout for the app.
*/
import { Outlet, NavLink } from "react-router-dom";

export default function Root() {
    return (
        <>
        <div className="container" id="site-background">
        <div className="row">
        <div className="col-sm-2"></div>
        <div className="col-sm-8" id="content-col">

            <div id="header">
                <div className="jumbotron">
                    <div className="container">
                        {/* <div id="jumbo-title-backdrop">
                            <h1 className="jumbotron-text">Christos Cunning</h1>
                            <p className="jumbotron-text">
                                This website is about me and my interests
                            </p>
                        </div> */}
                    </div>
                </div>
                
                <div className="container" style={{maxWidth: "100%", padding: "0"}}>

                <div className="row row-eq-height" id="cnavbar">
                {/* <div className="row"> */}
                    
                    <div className="col">
                    {/* <div className="col-sm" style={{ borderWidth: "0px!important" }}> */}
                        <h4>&nbsp;</h4>
                    </div>

                    <div className="col">
                    {/* <div className="col-sm" id="page1"> */}
                        {/* <h4 id="page1text">Home</h4> */}
                        <NavLink to={'/'} className={({isActive}) => isActive ? "navbar-link-active": "navbar-link" }>Home</NavLink>
                    </div>

                    {/* Remove about me from navbar */}
                    {/* <div className="col-sm" id="page3">
                        <NavLink to={'aboutme'} className={({isActive}) => isActive ? "navbar-link-active": "navbar-link" }>About Me</NavLink>
                    </div> */}
                    
                    <div className="col">
                    {/* <div className="col-sm" id="page2"> */}
                        {/* <h4 id="page2text">Résumé</h4> */}
                        <NavLink to={'resume'} className={({isActive}) => isActive ? "navbar-link-active": "navbar-link" }>Resume</NavLink>
                    </div>
                    
                    <div className="col">
                    {/* <div className="col-sm" id="page4"> */}
                        {/* <h4 id="page4text">Projects</h4> */}
                        <NavLink to={'projects'} className={({isActive}) => isActive ? "navbar-link-active": "navbar-link" }>Projects</NavLink>
                    </div>
                    
                    <div className="col">
                    {/* <div className="col-sm" style={{ borderWidth: "0px!important" }}> */}
                        <h4>&nbsp;</h4>
                    </div>
                </div>

                </div>
            </div>

            <div id="body">
                <Outlet />
            </div>

            <footer id="footer" className="container">
                <div className="row">
                    <div className="col-sm-3">&nbsp;</div>
                    <div className="col-sm-3">
                        <p className="footertext">
                            Website {" "}
                            <NavLink to={'testbench'} className="hidden-link">created</NavLink> 
                            {" "} by Christos Cunning
                        </p>
                    </div>
                    <div className="col-sm-3">
                        {/* add little external link buttons */}
                        <div className="row footertext">
                            <div className="col-sm-2">&nbsp;</div>
                            <div className="col-sm-2">
                                <a href="http://www.github.com/christoscunning">
                                    <img
                                        src="./github-favicon.jpg"
                                        className="footercirclelink"
                                    />
                                </a>
                            </div>
                            <div className="col-sm-2">
                                <a href="http://www.linkedin.com/in/christoscunning">
                                    <img
                                        src="./linkedin-favicon.png"
                                        className="footercirclelink"
                                    />
                                </a>
                            </div>
                            <div className="col-sm-2">
                                <a href="https://twitter.com/christoscunn">
                                    <img
                                        src="./twitter-favicon.png"
                                        className="footercirclelink"
                                    />
                                </a>
                            </div>
                            <div className="col-sm-2">
                                {/*  Can add another link here later if I want
                                            <a href=""><img src="" class="footercirclelink"></a>
                                        */}
                            </div>
                            <div className="col-sm-2">&nbsp;</div>
                        </div>
                    </div>
                    <div className="col-sm-3">&nbsp;</div>
                </div>
            </footer>

        </div>
        
        <div className="col-sm-2"></div>
        </div>
        </div>
        </>
    );
}