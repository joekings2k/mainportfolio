import { Fragment, type ReactNode } from "react";

type Segment = { text: string; italic?: boolean };

export function splitWords(segments: Segment[]): ReactNode {
  return segments.map((seg, segIdx) => {
    const parts = seg.text.split(/(\s+)/);
    const nodes = parts.map((part, i) => {
      if (!part) return null;
      if (/^\s+$/.test(part)) return <Fragment key={`s-${segIdx}-${i}`}>{part}</Fragment>;
      return (
        <span key={`w-${segIdx}-${i}`} className="w">
          {part}
        </span>
      );
    });
    if (seg.italic) {
      return (
        <em
          key={`seg-${segIdx}`}
          className="font-['Instrument_Serif'] italic font-normal"
        >
          {nodes}
        </em>
      );
    }
    return <Fragment key={`seg-${segIdx}`}>{nodes}</Fragment>;
  });
}
