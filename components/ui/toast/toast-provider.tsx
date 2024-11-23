"use client"

import * as React from "react"
import { ToastProvider as ToastProviderPrimitive } from "@radix-ui/react-toast"
import { useToast } from "./use-toast"
import type { ToastProps } from "./toast-types"

interface ToastProviderProps {
  children: React.ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = React.useState<ToastProps[]>([])

  const addToast = React.useCallback((toast: Omit<ToastProps, "id">) => {
    setToasts((current) => [
      ...current,
      { ...toast, id: Math.random().toString(36).substr(2, 9) },
    ])
  }, [])

  const dismissToast = React.useCallback((id: string) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const value = React.useMemo(
    () => ({
      toasts,
      addToast,
      dismissToast,
    }),
    [toasts, addToast, dismissToast]
  )

  return (
    <ToastProviderPrimitive>
      {children}
    </ToastProviderPrimitive>
  )
} 