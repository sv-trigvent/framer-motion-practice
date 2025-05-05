import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

import Ricon from '../assets/react.png';
import JSicon from '../assets/js.png';
import Codeicon from '../assets/code.png';
import D3inco from '../assets/d3.png';
import Dockericon from '../assets/docker.png';
import Giticon from '../assets/git.png';
import K8sicon from '../assets/k8s.png';
import Tcssicon from '../assets/tcss.png';


export default function Partical () {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 1,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    links: {
                        color: "#ffffff",
                        distance: 180,
                        enable: false,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 8,
                    },
                    opacity: {
                        value: 0.3,
                    },
                    shape: {
                        type: "images",
                        options: {
                            images: [
                                {
                                    src: Ricon.src,
                                    width: 100,
                                    height: 100
                                },
                                {
                                    src: JSicon.src,
                                    width: 100,
                                    height: 100
                                },
                                {
                                    src: Codeicon.src,
                                    width: 100,
                                    height: 100
                                },
                                {
                                    src: D3inco.src,
                                    width: 100,
                                    height: 100
                                },
                                {
                                    src: Dockericon.src,
                                    width: 100,
                                    height: 100
                                },
                                {
                                    src: Giticon.src,
                                    width: 100,
                                    height: 100
                                },
                                {
                                    src: K8sicon.src,
                                    width: 100,
                                    height: 100
                                },
                                {
                                    src: Tcssicon.src,
                                    width: 100,
                                    height: 100
                                },

                            ]
                        }
                    },
                    size: {
                        value: { min: 20, max: 20 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};