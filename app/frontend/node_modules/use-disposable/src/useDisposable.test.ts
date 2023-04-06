import { describe, it, vi, expect, beforeAll, afterAll } from "vitest";
import { renderHook } from "@testing-library/react";
import * as React from "react";
import { useDisposable } from "./useDisposable";

describe("useDisposable", () => {
  describe("in strict mode", () => {
    it("should call factory once during mount", () => {
      const factory = vi.fn().mockReturnValue(["foo", vi.fn()]);
      renderHook(() => useDisposable(factory, []), {
        wrapper: React.StrictMode,
      });

      expect(factory).toHaveBeenCalledTimes(1);
    });

    it("should not call dispose on mount", () => {
      const dispose = vi.fn();
      renderHook(() => useDisposable(() => ["foo", dispose], []), {
        wrapper: React.StrictMode,
      });

      expect(dispose).toHaveBeenCalledTimes(0);
    });

    it("should call dispose on unmount", () => {
      const dispose = vi.fn();
      const { unmount } = renderHook(
        () => useDisposable(() => ["foo", dispose], []),
        {
          wrapper: React.StrictMode,
        }
      );

      unmount();

      expect(dispose).toHaveBeenCalledTimes(1);
    });

    it("should call dispose and call factory if dependencies update", () => {
      const dispose = vi.fn();
      const factory = vi.fn().mockReturnValue(["foo", dispose]);
      let dep = "foo";
      const { rerender } = renderHook(() => useDisposable(factory, [dep]), {
        wrapper: React.StrictMode,
      });

      dep = "bar";
      rerender();

      expect(dispose).toHaveBeenCalledTimes(1);
      expect(factory).toHaveBeenCalledTimes(2);
    });
  });

  describe("not strict mode", () => {
    it("should call factory once during mount", () => {
      const factory = vi.fn().mockReturnValue(["foo", vi.fn()]);
      renderHook(() => useDisposable(factory, []), {});

      expect(factory).toHaveBeenCalledTimes(1);
    });

    it("should not call dispose on mount", () => {
      const dispose = vi.fn();
      renderHook(() => useDisposable(() => ["foo", dispose], []), {});

      expect(dispose).toHaveBeenCalledTimes(0);
    });

    it("should call dispose on unmount", () => {
      const dispose = vi.fn();
      const { unmount } = renderHook(
        () => useDisposable(() => ["foo", dispose], []),
        {}
      );

      unmount();

      expect(dispose).toHaveBeenCalledTimes(1);
    });

    it("should call dispose and call factory if dependencies update", () => {
      const dispose = vi.fn();
      const factory = vi.fn().mockReturnValue(["foo", dispose]);
      let dep = "foo";
      const { rerender } = renderHook(() => useDisposable(factory, [dep]), {});

      dep = "bar";
      rerender();

      expect(dispose).toHaveBeenCalledTimes(1);
      expect(factory).toHaveBeenCalledTimes(2);
    });
  });
});
