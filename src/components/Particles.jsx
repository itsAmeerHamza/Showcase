import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState, useRef } from "react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesComponent = (props) => {
  const [init, setInit] = useState(false);
  const clickCountRef = useRef(0);
  const lastClickTimeRef = useRef(0);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const handleClick = (event) => {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTimeRef.current;
    
    // Throttle clicks - only allow 1 click per 500ms
    if (timeSinceLastClick < 500) {
      return;
    }
    
    // Limit total clicks - max 5 particles can be added
    if (clickCountRef.current >= 5) {
      return;
    }
    
    lastClickTimeRef.current = now;
    clickCountRef.current += 1;
    
    // Reset click count after 5 seconds
    setTimeout(() => {
      clickCountRef.current = Math.max(0, clickCountRef.current - 1);
    }, 5000);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
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
          resize: {
            enable: true,
          },
        },
        detectOn: "canvas",
        modes: {
          push: {
            quantity: 1,
            duration: 0.3,
          },
          repulse: {
            distance: 80,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#667eea", "#764ba2", "#f093fb", "#4dabf7"],
        },
        links: {
          color: {
            value: "#ffffff",
          },
          distance: 200,
          enable: true,
          opacity: 0.1,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 1000,
          },
          value: 30,
          limit: 60,
        },
        opacity: {
          value: { min: 0.1, max: 0.5 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
          animation: {
            enable: true,
            speed: 1,
            sync: false,
          },
        },
      },
      detectRetina: true,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      smooth: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles 
        id={props.id} 
        init={particlesLoaded} 
        options={options}
        onClick={handleClick}
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;