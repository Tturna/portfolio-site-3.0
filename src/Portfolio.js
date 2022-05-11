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
            <div className="centercontent footermargin">
                <h1>Portfolio</h1>

                <div className="descarea">
                    <div className="descbox">
                        <p>
                            Here are some hobby projects that
                            I've done through the years.
                            As one could probably tell, my interests are diverse.
                            Find my work experience on my LinkedIn page.
                        </p>
                    </div>

                    <img id="img" src=".\imgs\avatar_yellow_portrait_small.jpg" alt="avatar icon"/>
                </div>

                <div className="contentarea" id="portfolio">
                    <div className="contentrow">
                        <div className="contentbox">
                            <img src=".\imgs\exhibits\python1.jpg" alt="python code and logo"/>
                            <p>
                                I worked on an assistant bot that would listen to voice commands
                                and reply using text-to-speech. The bot could read and show videos of
                                recents news, play Youtube videos or Google something for me, just to
                                list a couple features. I made it using Python.
                            </p>
                        </div>
                        <div className="contentbox">
                            <img src=".\imgs\exhibits\arduino.jpg" alt="Arduino board"/>
                            <p>
                                To improve my knowledge in Arduinos, I've worked on a project to translate
                                human movements and gestures to digital signals, especially MIDI. I've used 
                                C++ to measure the acceleration and rotation of the Arduino Nano 33 IoT board.
                                I made a socket server with Python to receive and process the data.
                            </p>
                        </div>
                    </div>

                    <div className="contentrow">
                        <div className="contentbox">
                            <img src=".\imgs\exhibits\rpi.jpg" alt="Raspberry Pi board"/>
                            <p>
                                While I was in vocational college, I started a computer vision project
                                using Python and OpenCV. I used a Raspberry Pi and a web cam to detect humans
                                in real time and measure their movements. The Pi streamed the image data to a 
                                custom server over the internet for image processing.
                            </p>
                        </div>
                        <div className="contentbox">
                            <img src=".\imgs\exhibits\csharpyoink.jpg" alt="c sharp code and logo"/>
                            <p>
                                One time I wanted to look into making desktop applications with C#, so I 
                                made an automatic event notifier using Windows Forms. The program would allow 
                                me to set up custom timed events that it would fire as pop ups. This system
                                helped me stand up and stretch frequently.
                            </p>
                        </div>
                    </div>

                    <div className="contentrow">
                        <div className="contentbox">
                            <img src=".\imgs\exhibits\js.jpg" alt="javascript code and logo"/>
                            <p>
                                I've worked on small time websites for over 4 years. I've made sites using
                                HTML, CSS, JavaScript, PHP and recently, the React framework, which this site 
                                was made with. I plan on learning more about popular frameworks and web technologies in the future.
                            </p>
                        </div>
                        <div className="contentbox">
                            <img src=".\imgs\exhibits\unity.png" alt="a Unity game scene"/>
                            <p>
                                Ever since I started vocational college in 2017, I've done countless small 
                                game development projects with Unity and C#. I have yet to release a long term
                                game project, but I hope to do that by 2023. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portfolio;