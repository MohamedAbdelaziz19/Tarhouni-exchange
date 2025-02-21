// src/utils/flagMap.ts
import { Fr, Us, Sa, Ca, Bh, Gb, Kw, Jp, Cn, Ae, Ch, Qa } from '@next-languages/flags';

// Create an object mapping ISO country codes to flag components
export const flagMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  eu: Fr, // if you want the Eurozone flag, you might need to create a custom component or use one for a specific country.
  us: Us,
  sa: Sa,
  ca: Ca,
  bh: Bh,
  gb: Gb,
  kw: Kw,
  jp: Jp,
  cn: Cn,
  ae: Ae,
  ch: Ch,
  qa: Qa,
};
