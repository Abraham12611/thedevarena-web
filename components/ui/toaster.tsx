"use client";

import {
  ToastProvider,
  ToastViewport,
} from "./toast/toast-primitives"
import { ClientToast } from "./toast/client-toast"
import { useToast } from "./toast/use-toast"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <ToastProvider>
      {toasts.map((toast) => (
        <ClientToast 
          key={toast.id}
          toast={toast}
          onDismiss={dismiss}
        />
      ))}
      <ToastViewport />
    </ToastProvider>
  )
}