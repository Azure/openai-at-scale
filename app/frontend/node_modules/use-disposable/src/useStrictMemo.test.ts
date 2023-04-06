import { describe, it, vi, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { useStrictMemo } from "./useStrictMemo";

describe("useStrictMemo", () => {
  it("should not call factory twice on mount in strict mode", () => {
    const factory = vi.fn();
    renderHook(() => useStrictMemo(factory, []), {
      wrapper: React.StrictMode,
    });

    expect(factory).toHaveBeenCalledTimes(1);
  });

  it("should call factory if dependencies update", () => {
    const factory = vi.fn();
    let dep = "foo";
    const { rerender } = renderHook(() => useStrictMemo(factory, [dep]), {
      wrapper: React.StrictMode,
    });

    dep = "bar";
    rerender();

    expect(factory).toHaveBeenCalledTimes(2);
  });
});
