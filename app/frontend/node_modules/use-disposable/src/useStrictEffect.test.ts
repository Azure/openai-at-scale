import { describe, it, vi, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { useStrictEffect } from "./useStrictEffect";

describe("useStrictEffect", () => {
  it("should only dispose on unmount in strict mode", () => {
    const dispose = vi.fn();
    const { unmount } = renderHook(
      () =>
        useStrictEffect(() => {
          return dispose;
        }, []),
      { wrapper: React.StrictMode }
    );

    expect(dispose).toHaveBeenCalledTimes(0);

    unmount();

    expect(dispose).toHaveBeenCalledTimes(1);
  });

  it("should dispose when dependency array changes", () => {
    const dispose = vi.fn();
    let dep = "foo";
    const { rerender } = renderHook(
      () =>
        useStrictEffect(() => {
          return dispose;
        }, [dep]),
      { wrapper: React.StrictMode }
    );

    expect(dispose).toHaveBeenCalledTimes(0);

    dep = "bar";
    rerender();

    expect(dispose).toHaveBeenCalledTimes(1);
  });
});
