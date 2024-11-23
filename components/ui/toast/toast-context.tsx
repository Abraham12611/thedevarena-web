"use client"

import * as React from "react"
import type { ToastProps } from "./toast-types"

interface ToastContextValue {
  toasts: ToastProps[]
  addToast: (toast: Omit<ToastProps, "id">) => void
  dismissToast: (id: string) => void
}

export const ToastContext = React.createContext<ToastContextValue | undefined>(undefined)

export function useToastContext() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
} 