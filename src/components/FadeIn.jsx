'use client';

import { motion } from 'framer-motion';

export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as: Component = 'div',
  ...rest
}) {
  const offsets = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
  };
  const initial = { opacity: 0, ...offsets[direction] };

  const MotionComponent = motion[Component] || motion.div;

  return (
    <MotionComponent
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
}
