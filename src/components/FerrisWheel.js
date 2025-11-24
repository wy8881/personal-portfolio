import {motion} from 'framer-motion';
import {useMemo} from 'react';

const TECH_ICONS = [
    "java.svg",
    "jupyter.svg",
    "mongodb.svg",
    "python.svg",
    "react-js.svg",
    "springboot.svg",
    "junit5.png",
    "intelliJ.svg",
    "angular.svg",
    "typescript.svg",
    "wordpress_icon.png"
];

const ANIMATION_CONFIG = {
    itemDelay: 5,
    rotationDuration: TECH_ICONS.length * 5,
};

const getTechName = (filename) => {
    return filename.replace(/\.(svg|png)$/i, '').replace(/-/g, ' ');
};

const createAnimationVariants = (index) => {
    const delay = index * ANIMATION_CONFIG.itemDelay;
    
    return {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            rotate: -360,
            transition: {
                opacity: {
                    delay,
                    duration: 0.3
                },
                rotate: {
                    repeat: Infinity,
                    duration: ANIMATION_CONFIG.rotationDuration,
                    delay,
                    ease: "linear"
                }
            }
        }
    };
};

export const FerrisWheel = () => {
    const animationVariants = useMemo(() => 
        TECH_ICONS.map((_, index) => createAnimationVariants(index)),
        []
    );

    return (
        <div>
            {TECH_ICONS.map((iconFilename, index) => (
                <motion.div
                    className="ferris-wheel-intro"
                    key={iconFilename}
                    initial="initial"
                    animate="animate"
                    variants={animationVariants[index]}
                >
                    <div className="intro-parent">
                        <img
                            src={iconFilename === "wordpress_icon.png" 
                                ? require(`../assets/img/${iconFilename}`)
                                : require(`../assets/img/tech_icon/${iconFilename}`)}
                            alt={`${getTechName(iconFilename)} technology icon`}
                            className="intro-img"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};