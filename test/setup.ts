import "@testing-library/jest-dom";
import React from "react";
import { vi } from "vitest";

// Make React available globally in JSDOM tests
(globalThis as unknown as { React: typeof React }).React = React;

// Polyfill window.matchMedia for JSDOM
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Polyfill scrollIntoView for JSDOM
window.HTMLElement.prototype.scrollIntoView = vi.fn();

