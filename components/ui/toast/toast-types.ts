import { Toast } from "./toast"
import { ReactNode } from "react"

export interface ToastProps extends React.ComponentPropsWithoutRef<typeof Toast> {
  id: string
  title?: string
  description?: string
  action?: ReactNode
}

export interface ToastActionElement {
  altText: string
  action: () => void
}

export interface ToastState {
  toasts: ToastProps[]
} 