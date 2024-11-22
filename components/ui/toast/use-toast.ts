"use client"

import { useContext } from "react"
import { ToastContext } from "./toast-context"
import type { ToastProps } from "./toast-types"

export interface UseToastReturn {
  toasts: ToastProps[]
  toast: (props: Omit<ToastProps, "id">) => void
  dismiss: (id: string) => void
}

export function useToast(): UseToastReturn {
  const context = useContext(ToastContext)
  
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  
  return {
    toasts: context.toasts,
    toast: context.addToast,
    dismiss: context.removeToast,
  }
}

export type { ToastProps } 