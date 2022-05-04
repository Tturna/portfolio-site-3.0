import React, { Component } from "react";
import "./Music.css";

class Music extends Component {
    render() {
        return (
            <div className="footermargin">
                <h1 className="centercontent">Music</h1>

                <div className="descarea centercontent">
                    <div className="descbox">
                        <p>
                            I make music as a hobby. Here you can find some tracks that
                            I've marked as "finished". I try to combine metal into
                            different types of electronic music from time to time.
                        </p>
                    </div>

                    <img id="img" src=".\imgs\avatar_yellow_portrait_small.jpg" alt="avatar icon"/>
                </div>

                <div className="feature">
                    <div className="musicbox featuredbox">
                        <iframe className="musicframe" title="Stimulant" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1196643901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className="musicdetails"><a className="musicanchor" href="https://soundcloud.com/tturna" title="Tturna" target="_blank" rel="noreferrer">Tturna</a> · <a className="musicanchor" href="https://soundcloud.com/tturna/stimulant" rel="noreferrer" title="Stimulant" target="_blank">Stimulant</a></div>
                    </div>

                    <a className="sclink" href="https://soundcloud.com/tturna" target="_blank" rel="noreferrer"><img src=".\imgs\socials\soundcloud.png" alt="soundcloud logo"/></a>
                </div>

                <div className="boxrow">
                    <div className="musicbox">
                        <iframe className="musicframe" title="Geostationary" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1232013070&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className="musicdetails"><a className="musicanchor" href="https://soundcloud.com/tturna" title="Tturna" target="_blank" rel="noreferrer">Tturna</a> · <a className="musicanchor" href="https://soundcloud.com/tturna/geostationary" rel="noreferrer" title="Geostationary" target="_blank">Geostationary</a></div>
                    </div>

                    <div className="musicbox altbox">
                        <iframe className="musicframe" title="Rampage" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1045623589&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className="musicdetails"><a className="musicanchor" href="https://soundcloud.com/tturna" title="Tturna" target="_blank" rel="noreferrer">Tturna</a> · <a className="musicanchor" href="https://soundcloud.com/tturna/rampage" rel="noreferrer" title="Rampage" target="_blank">Rampage</a></div>
                    </div>
                </div>

                <div className="boxrow">
                    <div className="musicbox altbox">
                        <iframe className="musicframe" title="Rupture Inc." scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/942399277&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className="musicdetails"><a className="musicanchor" href="https://soundcloud.com/tturna" title="Tturna" target="_blank" rel="noreferrer">Tturna</a> · <a className="musicanchor" href="https://soundcloud.com/tturna/rupture-inc" rel="noreferrer" title="Rupture Inc." target="_blank">Rupture Inc.</a></div>
                    </div>

                    <div className="musicbox">
                        <iframe className="musicframe" title="Retro Dreams" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/939404446&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div className="musicdetails"><a className="musicanchor" href="https://soundcloud.com/tturna" title="Tturna" target="_blank" rel="noreferrer">Tturna</a> · <a className="musicanchor" href="https://soundcloud.com/tturna/retro-dreams" rel="noreferrer" title="Retro Dreams" target="_blank">Retro Dreams</a></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Music;