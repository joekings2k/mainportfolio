import { ReactNode, useRef } from "react";

const Tooltip = ({
  children,
  text,
  direction = "top", // Default direction
}: {
  children: ReactNode;
  text: string;
  direction?: "top" | "bottom" | "left" | "right";
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="group relative inline-block"
      ref={containerRef}
      onMouseEnter={({ clientX }) => {
        if (!tooltipRef.current || !containerRef.current) return;
        const { left } = containerRef.current.getBoundingClientRect();
        tooltipRef.current.style.left = clientX - left + "px";
      }}
    >
      {children}
      {/* Tooltip container */}
      <div
        ref={tooltipRef}
        className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500 transition bg-[#0D1321] text-white p-2 absolute rounded-xl whitespace-nowrap flex items-center ${
          direction === "top"
            ? "bottom-full left-1/2 -translate-x-1/2 mb-2"
            : direction === "bottom"
            ? "top-full left-1/2 -translate-x-1/2 mt-2"
            : direction === "left"
            ? "right-full top-1/2 -translate-y-1/2 mr-2"
            : "left-full top-1/2 -translate-y-1/2 ml-2"
        }`}
      >
        <span>{text}</span>
        {/* Arrow */}
        <div
          className={`w-0 h-0 border-solid absolute ${
            direction === "top"
              ? "border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-[#0D1321] bottom-[-4px] left-1/2 -translate-x-1/2"
              : direction === "bottom"
              ? "border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-[#0D1321] top-[-4px] left-1/2 -translate-x-1/2"
              : direction === "left"
              ? "border-t-4 border-b-4 border-l-4 border-t-transparent border-b-transparent border-l-[#0D1321] right-[-4px] top-1/2 -translate-y-1/2"
              : "border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-[#0D1321] left-[-4px] top-1/2 -translate-y-1/2"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Tooltip;

// import { ReactNode, useRef } from "react";

// const Tooltip = ({ children, text }: { children: ReactNode; text: string }) => {
//   const tooltipRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   return (
//     <div
//       className="group relative inline-block"
//       ref={containerRef}
//       onMouseEnter={({ clientX }) => {
//         if (!tooltipRef.current || !containerRef.current) return;
//         const { left } = containerRef.current?.getBoundingClientRect();
//         tooltipRef.current.style.left = clientX - left + "px";
//       }}
//     >
//       {children}
//       <div
//         ref={tooltipRef}
//         className="invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-500 transition bg-blue-700 text-white p-1 absolute top-0 rounded-xl whitespace-nowrap flex flex-col items-center"
//       >
//         <span className="px-2 py-1">{text}</span>
//         <div className="arrow"></div>
//       </div>
//     </div>
//   );
// };

// export default Tooltip;
