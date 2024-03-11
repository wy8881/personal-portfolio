import {useEffect, useState}  from "react";
import {motion} from "framer-motion";

export const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
        }
    }


    useEffect(() => {
        window.addEventListener("mousemove", e => {
            setMousePosition( {x: e.clientX, y: e.clientY});
            console.log(e.clientX, e.clientY)
        })
        return () => {
            window.removeEventListener("mousemove", () => {});
        }
    },[]);



    return (
        <div className="cursor">
            <motion.div
                className="circle"
                variants={variants}
                animate={"default"}

            ></motion.div>
        </div>
    )
}