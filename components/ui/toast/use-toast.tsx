"use client"

import { useToastClient } from "./use-toast-client"
import type { ToastProps } from "./toast-types"

const NOOP = {
  toasts: [] as ToastProps[],
  toast: () => {},
  dismiss: () => {},
}

function useServerToast() {
  return NOOP
}

export function useToast() {
  const hook = typeof window === 'undefined' ? useServerToast : useToastClient
  return hook()
}

export type { ToastProps } 