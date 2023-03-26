'use client'

import { motion } from "framer-motion";
import Menu from "./menu";

const Navigation = ({open, handleMenuItemClick}:{open:boolean, handleMenuItemClick:(page:string) => void}) => {
   
    if(open) {   
       return ( 
       <motion.div id="navlayer" animate={{left:'0%'}}>
            <Menu handleMenuItemClick={handleMenuItemClick}/>
       </motion.div>
       )
    }
    return (
        <motion.div id="navlayer" animate={{left:'-100%'}}>
             <Menu handleMenuItemClick={handleMenuItemClick}/>
        </motion.div>
    )
}

export default Navigation;