"use client"

import { useToast } from "./use-toast"
import type { ToastProps } from "./toast-types"

interface ClientToastProps {
  toast: ToastProps
  onDismiss: (id: string) => void
}

export function ClientToast({ toast, onDismiss }: ClientToastProps) {
  return (
    <Toast
      key={toast.id}
      className={toast.className}
      variant={toast.variant}
      {...props}
    >
      <div className="grid gap-1">
        {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
        {toast.description && (
          <ToastDescription>{toast.description}</ToastDescription>
        )}
      </div>
      {toast.action}
      <ToastClose onClick={() => onDismiss(toast.id)} />
    </Toast>
  )
} 