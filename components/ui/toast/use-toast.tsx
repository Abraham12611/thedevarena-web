"use client"

import { useToastClient } from "./use-toast-client"
import type { ToastProps } from "./toast-types"

const NOOP = {
  toasts: [] as ToastProps[],
  toast: () => {},
  dismiss: () => {},
}

export function useToast() {
  // Early return if we're in a non-browser environment
  if (typeof window === 'undefined') {
    return NOOP
  }

  try {
    return useToastClient()
  } catch {
    // If the hook fails (e.g., not within provider), return no-op implementation
    return NOOP
  }
}

export type { ToastProps } 