"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
} from "./toast-primitives"
import type { ToastProps } from "./toast-types"

interface ClientToastProps {
  toast: ToastProps
  onDismiss: (id: string) => void
}

export function ClientToast({ toast, onDismiss }: ClientToastProps) {
  const { id, title, description, action, className, variant, ...restProps } = toast

  return (
    <Toast
      key={id}
      className={className}
      variant={variant}
      {...restProps}
    >
      <div className="grid gap-1">
        {title && <ToastTitle>{title}</ToastTitle>}
        {description && (
          <ToastDescription>{description}</ToastDescription>
        )}
      </div>
      {action}
      <ToastClose onClick={() => onDismiss(id)} />
    </Toast>
  )
} 