import * as React from "react";
import type { DisposableFactory } from "./types";
import { useIsStrictMode } from "./useIsStrictMode";
import { useStrictEffect } from "./useStrictEffect";
import { useStrictMemo } from "./useStrictMemo";

/**
 * Creates a disposable instance during **render time** that will
 * be created once (based on dependency array) even during strict mode.
 * The disposable will be disposed based on the dependency array similar to
 * useEffect.
 *
 * ⚠️ This can only be called **once** per component
 * @param factory - factory for disposable and its dispose function
 * @param deps - Similar to a React dependency array
 * @returns - The disposable instance
 */
export function useDisposable<TInstance>(
  factory: DisposableFactory<TInstance>,
  deps: any[]
) {
  // In production, strict mode does not require special handling
  const isStrictMode =
    useIsStrictMode() && process.env.NODE_ENV !== "production";

  const useMemo = isStrictMode ? useStrictMemo : React.useMemo;
  const useEffect = isStrictMode ? useStrictEffect : React.useEffect;

  const [disposable, dispose] = useMemo(() => factory(), deps) ?? [
    null,
    () => null,
  ];
  useEffect(() => {
    return dispose;
  }, deps);

  return disposable;
}
