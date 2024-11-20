// Importing from the actual toast package
import { useToast as useToastOriginal } from "@/components/ui/toast";
import { ToastProps } from "@/types/toast"

// Re-exporting the hook
export const useToast = useToastOriginal;

interface ToastActionElement {
  altText: string
  action: () => void
}

export interface ToastState {
  toasts: ToastProps[]
}