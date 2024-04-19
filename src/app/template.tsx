"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
// import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
// import { useContext, useRef } from "react";

// function FrozenRouter(props: { children: React.ReactNode }) {
//   const context = useContext(LayoutRouterContext);
//   const frozen = useRef(context).current;

//   return (
//     <LayoutRouterContext.Provider value={frozen}>
//       {props.children}
//     </LayoutRouterContext.Provider>
//   );
// }

const variants = {
  hidden: { opacity: 0, x: -150, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -150 },
};
export default function Template({ children }: { children: React.ReactNode }) {
  const key = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
      className="flex-1 w-full h-full overflow-hidden relative"
        key={key}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 18,
          duration: 0.25,
          delay: 0.1,
        }}
      >
        {children}
        {/* <FrozenRouter>{children}</FrozenRouter> */}
      </motion.div>
    </AnimatePresence>
  );
}
