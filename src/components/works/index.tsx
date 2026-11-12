import { useState } from "react";
import Intro from "./sections/intro";
import Track from "./sections/track";
import Outro from "./sections/outro";
import { goWorks, works, type ArchiveLang } from "./data";

const ITEMS = { js: works, go: goWorks } as const;
const COUNTS = { js: works.length, go: goWorks.length };

const Works = () => {
  const [lang, setLang] = useState<ArchiveLang>("js");
  // keep nudging toward the other stack until the visitor has tried it once
  const [explored, setExplored] = useState(false);

  const onChange = (l: ArchiveLang) => {
    if (l !== lang) setExplored(true);
    setLang(l);
  };

  const switchProps = { value: lang, counts: COUNTS, onChange, hint: !explored };

  return (
    <div className="bg-[#0A0B0A] text-[#F4F1EA]" data-theme="dark">
      <Intro switchProps={switchProps} />
      <Track lang={lang} items={ITEMS[lang]} switchProps={switchProps} />
      <Outro />
    </div>
  );
};

export type SwitchProps = {
  value: ArchiveLang;
  counts: Record<ArchiveLang, number>;
  onChange: (l: ArchiveLang) => void;
  hint: boolean;
};

export default Works;
