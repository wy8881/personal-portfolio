import {motion} from 'framer-motion'

export const FerrisWheel = () => {
    const ferriesOfSelf = [
        "java.svg",
        "jupyter.svg",
        "mongodb.svg",
        "python.svg",
        "react-js.svg",
        "springboot.svg",
        "junit5.png",
        "intelliJ.svg",
        "angular.svg",
        "typescript.svg"
    ]
    return(
        <div>
            {ferriesOfSelf.map((intro, index:number) => {
                return (
                        <motion.div
                            className={"ferris-wheel-intro"}
                            key={index+1}
                            initial="initial"
                            animate={['animate', 'initialHide',]}
                            variants={{
                                initial: {
                                    opacity: 0
                                },
                                initialHide: {
                                    opacity: 1,
                                    transition: {
                                        delay:index*5
                                    }
                                },
                                animate: {
                                    rotate: -360,
                                    transition: {
                                        repeat: Infinity,
                                        duration: ferriesOfSelf.length*5,
                                        delay:index*5,
                                        ease: "linear"
                                    }
                                },
                            }}
                        >
                            <div className="intro-parent">
                                <img
                                    src={require(`../assets/img/tech_icon/${intro}`)}
                                    alt={intro}
                                    className="intro-img"
                                />
                            </div>
                        </motion.div>
                    )
                    
            })}

        </div>


    )
}