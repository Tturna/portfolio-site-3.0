import React, { Component } from "react";

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

                <a href="https://github.com/Tturna" target="_blank" rel="noreferrer">
                    <img id="projectlink" src=".\imgs\socials\github.png" alt="github logo"/>
                </a>

            </div>
        );
    }
}

export default Projects;