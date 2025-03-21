'use client';
import { FC, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface MyComponentProps {
  children: React.ReactNode;
}

const MyComponent: FC<MyComponentProps> = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });  // ✅ Corrected Usage

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

export default MyComponent;
