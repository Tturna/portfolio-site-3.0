import React, { Component } from "react";
import "./Git.css";

class Projects extends Component {
    render() {
        return (
            <div className="centercontent footermargin">
                <h1>Projects</h1>

                <div className="descarea">
                    <div className="descbox">
                        <p>
                            I plan on having interactive projects and info about my current
                            projects here in the future.
                            For now, you can find my current and some past projects
                            on my Github page.
                        </p>
                    </div>

                    <img id="img" src=".\imgs\avatar_yellow_portrait_small.jpg" alt="avatar icon"/>
                </div>

                <div className="gitbox">

                    <a href="https://github.com/Tturna" target="_blank" rel="noreferrer">
                        <img id="projectlink" src=".\imgs\socials\github.png" alt="github logo"/>
                    </a>

                    <a className="pin tl" href="https://github.com/Tturna/portfolio-site-3.0" target="_blank" rel="noreferrer">
                        <img src=".\imgs\gitpins\site.png" alt="github pin" />
                    </a>

                    <a className="pin tr" href="https://github.com/Tturna/AutoNotifier" target="_blank" rel="noreferrer">
                        <img src=".\imgs\gitpins\autonotifier.png" alt="github pin" />
                    </a>

                    <a className="pin bl" href="https://github.com/Tturna/NotSkyrim" target="_blank" rel="noreferrer">
                        <img src=".\imgs\gitpins\notskyrim.png" alt="github pin" />
                    </a>

                    <a className="pin br" href="https://github.com/Tturna/ChatBot21" target="_blank" rel="noreferrer">
                        <img src=".\imgs\gitpins\chatbot.png" alt="github pin" />
                    </a>
                </div>

            </div>
        );
    }
}

export default Projects;