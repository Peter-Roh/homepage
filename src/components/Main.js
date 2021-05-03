import React from 'react';
import anime from 'animejs';

class Main extends React.Component {
    anime() {
        anime.timeline({loop: false})
        .add({
            targets: '#progress',
            value: ['0%', '100%'],
            round: 1,
            easing: 'easeInOutExpo',
            delay: 1000,
        })
        .add({
            targets: '#progress, .circle-dark-dashed',
            opacity: 0,
            duration: 1000,
            easing: 'easeOutExpo',
            delay: 500,
        })
        .add({
            targets: '.line',
            opacity: [0.5, 1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 700
        })
        .add({
            targets: '.line',
            duration: 600,
            easing: "easeOutExpo",
            translateY: (el, i) => (-3 + 3*2*i) + "em"
          })
        .add({
            targets: '.letters, .btn',
            opacity: 1,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 100,
        });
    }

    anime2() {
        anime.timeline({loop: false})
        .add({
            targets: '.circle-dark-dashed',
            rotateZ: 360,
            duration: 5000,
            easing: "linear",
        })
    }

    componentDidMount() {
        this.anime();
        this.anime2();
    }

    render() {
        return (
            <>
                <div className="circle-dark-dashed"></div>
                <input id="progress" />
                <div className="main-box">
                    <span className="intro_box">
                        <span className="line line1"></span>
                        <span className="letters">Peter Roh</span>
                        <span className="line line2"></span>
                    </span>
                <div className="btn-box">
                    <a href="/me">
                        <input type="button" className="btn btn1" value="Welcome!" />
                    </a>
                    <a href="https://github.com/Peter-Roh">
                        <input type="button" className="btn btn2" value="View Github" />
                    </a>
                </div>
                </div>
            </>
        );
    }
}

export default Main;
