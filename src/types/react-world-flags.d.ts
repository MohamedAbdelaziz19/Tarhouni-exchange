declare module "react-world-flags" {
    import React from "react";
  
    interface FlagProps {
      country: string;
      className?: string;
    }
  
    const Flag: React.FC<FlagProps>;
    export default Flag;
  }
  