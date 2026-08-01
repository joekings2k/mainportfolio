/**
 * Code-drawn cover art for projects with no (or no-worth-showing) frontend.
 * Renders a small architecture diagram that ACCENTS the backend layer and dims
 * the client node — "promote my own work". Crisp at any size, matches the mono
 * aesthetic, and needs no image asset.
 */
export type ArchCover = {
  type: "architecture";
  /** dimmed top node — the part that isn't the story (e.g. the frontend). */
  client: string;
  /** the accented core node (the thing you built). */
  api: string;
  /** up to 3 backend services hanging off the API. */
  services: string[];
};

const NODE = "fill-[#0E100E]";

const CoverArt = ({ cover }: { cover: ArchCover }) => {
  const services = cover.services.slice(0, 3);
  const centers = services.map(
    (_, i) => (400 / services.length) * (i + 0.5)
  );

  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#101310] to-[#0A0B0A]">
      <svg
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
      >
        {/* blueprint grid */}
        <defs>
          <pattern
            id="grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M24 0H0V24"
              fill="none"
              stroke="#FFFFFF"
              strokeOpacity="0.03"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" />

        <text
          x="20"
          y="22"
          fill="#6E7470"
          fontSize="9"
          letterSpacing="2"
        >
          SYSTEM · BACKEND
        </text>

        {/* connectors: API → services (accented) */}
        {centers.map((cx, i) => (
          <line
            key={i}
            x1="200"
            y1="168"
            x2={cx}
            y2="222"
            stroke="#35563C"
            strokeWidth="1.5"
          />
        ))}
        {/* connector: client → API (dimmed) */}
        <line x1="200" y1="74" x2="200" y2="120" stroke="#2A2E2A" strokeWidth="1.5" />
        <text x="208" y="100" fill="#6E7470" fontSize="9">
          REST
        </text>

        {/* client node — dashed + muted (not my work) */}
        <rect
          x="120"
          y="30"
          width="160"
          height="44"
          rx="10"
          className={NODE}
          stroke="#2A2E2A"
          strokeWidth="1.5"
          strokeDasharray="5 4"
        />
        <text
          x="200"
          y="57"
          textAnchor="middle"
          fill="#6E7470"
          fontSize="13"
        >
          {cover.client}
        </text>

        {/* API node — the accented core */}
        <rect
          x="110"
          y="120"
          width="180"
          height="48"
          rx="11"
          fill="#10130F"
          stroke="#7BC47F"
          strokeWidth="1.5"
        />
        <text
          x="200"
          y="149"
          textAnchor="middle"
          fill="#F4F1EA"
          fontSize="15"
          fontWeight="600"
        >
          {cover.api}
        </text>

        {/* service nodes — grouped with the API as "mine" */}
        {services.map((s, i) => (
          <g key={s}>
            <rect
              x={centers[i] - 52}
              y="222"
              width="104"
              height="44"
              rx="9"
              className={NODE}
              stroke="#35563C"
              strokeWidth="1.5"
            />
            <text
              x={centers[i]}
              y="248"
              textAnchor="middle"
              fill="#B9BCB6"
              fontSize="12"
            >
              {s}
            </text>
          </g>
        ))}
      </svg>

      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.12em] uppercase text-[#7BC47F]">
        <span className="w-1.5 h-1.5 rounded-full bg-[#7BC47F]" />
        Backend architecture
      </span>
    </div>
  );
};

export default CoverArt;
