import * as React from "react";
import { renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";

import { useIsStrictMode } from "./useIsStrictMode";

describe("useIsStrictMode", () => {
  beforeEach(() => {
    process.env.NODE_ENV = "test";
  });

  it("should return `true` if wrapped with StrictMode", () => {
    const { result } = renderHook(useIsStrictMode, {
      wrapper: React.StrictMode,
    });

    expect(result.current).toBe(true);
  });

  it("should return `false` if not wrapped with StrictMode", () => {
    const { result } = renderHook(useIsStrictMode);

    expect(result.current).toBe(false);
  });

  it("should return `false` always in production mode", () => {
    process.env.NODE_ENV = "production";

    const { result } = renderHook(useIsStrictMode, {
      wrapper: React.StrictMode,
    });

    expect(result.current).toBe(false);
  });
});
