export const menuSlide = {
  initial: { x: "calc(100% + 50px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 50px)",
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.7 },
  },
};
export const listvariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  enter: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.2 * i },
  }),
  exit: (i: number) => ({
    x: -50,
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};
