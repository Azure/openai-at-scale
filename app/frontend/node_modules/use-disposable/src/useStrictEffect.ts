import * as React from "react";
import { getCurrentOwner } from "./useIsStrictMode";

// we know strict mode will render useMemo facory twice
// keep a weak set to detect when the second render happens
const effectSet = new WeakSet();

export function useStrictEffect(
  effect: () => () => void,
  deps: React.DependencyList | undefined
) {
  const currentOwner = getCurrentOwner();
  React.useEffect(() => {
    if (!effectSet.has(currentOwner)) {
      effectSet.add(currentOwner);
      effect();
      return;
    }

    const dispose = effect();
    return dispose;
  }, deps);
}
