"use client"

import { useContext } from "react"
import { ToastContext } from "./toast-context"

export function useToastClient() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
} 