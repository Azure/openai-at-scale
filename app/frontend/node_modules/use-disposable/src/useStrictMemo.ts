import * as React from "react";
import { getCurrentOwner } from "./useIsStrictMode";

// we know strict mode will render useMemo facory twice
// keep a weak set to detect when the second render happens
const memoSet = new WeakSet();

export function useStrictMemo<TMemoized>(
  factory: () => any,
  deps: React.DependencyList | undefined
): TMemoized | null {
  return React.useMemo(() => {
    const currentOwner = getCurrentOwner();
    if (!memoSet.has(currentOwner)) {
      memoSet.add(currentOwner);
      return null;
    }

    return factory();
  }, deps);
}
