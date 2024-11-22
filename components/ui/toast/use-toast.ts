"use client"

import { useContext } from "react"
import { ToastContext } from "./toast-context"
import type { ToastProps } from "./toast-types"

export function useToast() {
  const context = useContext(ToastContext)
  
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  
  return {
    toasts: context.toasts,
    toast: context.addToast,
    dismiss: context.removeToast,
  } as const
}

export type { ToastProps } 