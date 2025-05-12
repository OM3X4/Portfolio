import { motion } from "framer-motion";


export default function FadingDown({ children  , className}: { children: React.ReactNode , className?: string}) {
    return (
        <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: "0", opacity: 1 }}
            transition={{ duration: 2.5 , ease: "linear" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}