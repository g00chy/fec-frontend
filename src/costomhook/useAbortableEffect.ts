import React, { useEffect, useRef, useCallback } from "react";
import { useMountedState } from "./useMountedState";

// abort when unmount
export const useAbortableEffect = (
  func: (isMounted: () => boolean, didMounted: () => boolean) => any,
  abort: () => void,
  deps: React.DependencyList | undefined
) => {
  const isMounted = useMountedState();
  const didMountedRef = useRef(false);
  const didMounted = useCallback(() => didMountedRef.current, []);

  useEffect(() => {
    func(isMounted, didMounted);
    didMountedRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  // unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => abort, []);
};