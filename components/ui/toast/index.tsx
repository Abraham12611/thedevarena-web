"use client"

import * as React from "react"
import { ToastProvider as ToastProviderPrimitive } from "@radix-ui/react-toast"
import { ToastProvider as ToastContextProvider, useToastContext } from "./toast-context"
import {
  Toast,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "./toast-primitives"
import type { ToastProps } from "./toast-types"

// Combine both providers into a single ToastProvider
const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastContextProvider>
      <ToastProviderPrimitive>{children}</ToastProviderPrimitive>
    </ToastContextProvider>
  )
}

// Create a barrel export
export {
  useToastContext as useToast,
  Toast,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastProvider,
}

export type { ToastProps } 