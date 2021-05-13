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
        this.anime2();
        this.anime();
    }

    render() {
        return (
            <>
                <div className="w-full h-screen flex flex-col justify-center items-center cute">
                    <div className="circle-dark-dashed absolute w-40 rounded-full border-2 border-dashed border-indigo-800 bg-transparent rounded-full h-40"></div>
                    <input id="progress" className="absolute rounded-full border-none text-center w-12 font-medium text-xl" />
                    <div className="flex justify-center items-center">
                        <span className="flex justify-center items-center">
                            <span className="line absolute bg-black h-0.5 w-2/3 sm:w-2/5 lg:w-1/5 line1"></span>
                            <span className="letters opacity-0 font-semibold text-3xl bree">Peter Roh</span>
                            <span className="line absolute bg-black h-0.5 w-2/3 sm:w-2/5 lg:w-1/5 line2"></span>
                        </span>
                    <div className="btn-box absolute mt-80">
                        <a href="/me">
                            <input type="button" className="btn opacity-0 bg-white font-medium border-t-2 border-b-2 border-solid border-black w-32 h-12 mr-4 hover:bg-black hover:text-white cursor-pointer text-xl" value="Welcome!" />
                        </a>
                        <a href="https://github.com/Peter-Roh">
                            <input type="button" className="btn opacity-0 bg-white font-medium border-t-2 border-b-2 border-solid border-black w-32 h-12 ml-4 hover:bg-black hover:text-white cursor-pointer text-xl" value="View Github" />
                        </a>
                    </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Main;
