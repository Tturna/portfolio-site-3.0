import React, { Component } from "react";

// Shit that I've done (Content):
/*
    - * Speech assistant with Python
    - * Automatic Windows desktop notifications with C#
    - * Wireless Arduino position measurement and processing with Python, C++ and Wekinator
    - * Computer vision project with Python and Raspberry Pi computers
    - * Web development with HTML, CSS, JavaScript, PHP and the React framework
    - * Several small games with Unity and C#
    - 3 months of work experience in a small software company
    - Over 4 months of experience as a vocational assistant in a vocational college
    - Over 7 months of experience as a programmer, 3D modeler and virtual training instructor in the Finnish army
    - Small time music
*/

class Portfolio extends Component {
    render() {
        return (
            <div className="centercontent">
                <h2>Portfolio</h2>

                <div className="descarea">
                    <div className="descbox">
                        <img src=".\imgs\mainimg.jpg" alt="main background"/>
                        <p>
                            Here is a list of mostly personal hobby projects that
                            I've done through the years. This doesn't quite include
                            everything, since some projects are similar to others.
                            As one could probably tell, my interests are diverse.
                            You can find my work experience on my LinkedIn page.
                        </p>
                    </div>

                    <div id="img">

                    </div>
                </div>

                <div className="contentarea" id="portfolio">
                    <div className="contentrow">
                        <div className="contentbox">
                            <img src=".\imgs\exhibits\pythonyoink.jpg" alt="python logo"/>
                            <p>
                                Test text about the thing I'm describing, which in this case
                                is something I've done like a project or something.
                            </p>
                        </div>
                        <div className="contentbox">
                            <img src=".\imgs\exhibits\csharpyoink.jpg" alt="c sharp logo"/>
                            <p>
                                Test text about the thing I'm describing, which in this case
                                is something I've done like a project or something.
                            </p>
                        </div>
                    </div>

                    <div className="contentrow">
                        <div className="contentbox">
                            <img src=".\imgs\exhibits\arduino.jpg" alt="arduino board"/>
                            <p>
                                Test text about the thing I'm describing, which in this case
                                is something I've done like a project or something.
                            </p>
                        </div>
                        <div className="contentbox">
                            <img src=".\imgs\exhibits\opencv.png" alt="open cv logo"/>
                            <p>
                                Test text about the thing I'm describing, which in this case
                                is something I've done like a project or something.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;