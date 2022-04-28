import React, { Component } from "react";
import "./Music.css";

class Music extends Component {
    render() {
        return (
            <div>
                <h2>music</h2>

                <div className="feature">
                    <div className="musicbox featuredbox">
                        <iframe className="musicframe" title="Stimulant" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196643901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className="musicdetails"><a className="musicanchor" href="https://soundcloud.com/tturna" title="Tturna" target="_blank" rel="noreferrer">Tturna</a> · <a className="musicanchor" href="https://soundcloud.com/tturna/stimulant" rel="noreferrer" title="Stimulant" target="_blank">Stimulant</a></div>
                    </div>

                    <a className="sclink" href="https://soundcloud.com/tturna" target="_blank" rel="noreferrer"><img src=".\imgs\socials\soundcloud.png" alt="soundcloud logo"/></a>
                </div>

                <div className="boxrow">
                    <div className="musicbox">
                        <iframe className="musicframe" title="Stimulant" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196643901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className="musicdetails"><a className="musicanchor" href="https://soundcloud.com/tturna" title="Tturna" target="_blank" rel="noreferrer">Tturna</a> · <a className="musicanchor" href="https://soundcloud.com/tturna/stimulant" rel="noreferrer" title="Stimulant" target="_blank">Stimulant</a></div>
                    </div>

                    <div className="musicbox altbox">
                        <iframe className="musicframe" title="Stimulant" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196643901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className="musicdetails"><a className="musicanchor" href="https://soundcloud.com/tturna" title="Tturna" target="_blank" rel="noreferrer">Tturna</a> · <a className="musicanchor" href="https://soundcloud.com/tturna/stimulant" rel="noreferrer" title="Stimulant" target="_blank">Stimulant</a></div>
                    </div>
                </div>

                <div className="boxrow">
                    <div className="musicbox altbox">
                        <iframe className="musicframe" title="Stimulant" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196643901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className="musicdetails"><a className="musicanchor" href="https://soundcloud.com/tturna" title="Tturna" target="_blank" rel="noreferrer">Tturna</a> · <a className="musicanchor" href="https://soundcloud.com/tturna/stimulant" rel="noreferrer" title="Stimulant" target="_blank">Stimulant</a></div>
                    </div>

                    <div className="musicbox">
                        <iframe className="musicframe" title="Stimulant" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196643901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className="musicdetails"><a className="musicanchor" href="https://soundcloud.com/tturna" title="Tturna" target="_blank" rel="noreferrer">Tturna</a> · <a className="musicanchor" href="https://soundcloud.com/tturna/stimulant" rel="noreferrer" title="Stimulant" target="_blank">Stimulant</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Music;