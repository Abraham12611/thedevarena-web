import { ReactNode } from "react"

export interface ToastProps {
  id: string
  title?: string
  description?: string
  action?: ReactNode
  duration?: number
  className?: string
  variant?: "default" | "destructive"
}

export interface ToastActionElement {
  altText: string
  action: () => void
} 