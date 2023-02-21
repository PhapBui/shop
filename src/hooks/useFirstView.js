import { useRef } from "react";

const useFirstView = () => {
  const ref = useRef(true);
  if (ref.current) {
    ref.current = false;
    return true;
  }
  return ref.current;
};

export default useFirstView;
