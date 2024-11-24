"use client"

import { ToastProvider } from "./toast-context"

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>
} 