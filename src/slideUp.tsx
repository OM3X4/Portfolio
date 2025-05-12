import { motion } from "framer-motion";

export default function SlideUp({ children  , className , delay}: { children: React.ReactNode , className?: string , delay?: number}) {
    return (
        <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 1 , ease: "easeInOut" , delay }}
            className={`${className} overflow-hidden`}
        >
            {children}
        </motion.div>
    );
}