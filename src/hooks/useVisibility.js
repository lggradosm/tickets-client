import { useState } from "react";
export default function useVisibility() {
  const [visibility, setVisibility] = useState(false);

  const active = () => {
    setVisibility(true);
  };

  const disable = () => {
    setVisibility(false);
  };

  const toggle = () => {
    setVisibility((prev) => !prev);
  };

  return { visibility, active, disable, toggle };
}
