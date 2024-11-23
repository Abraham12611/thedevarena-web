import { ToastProvider as ToastProviderPrimitive } from "./toast-primitives"
import { ToastProvider as ToastContextProvider } from "./toast-context"
import {
  Toast,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} from "./toast-primitives"
import { useToast } from "./use-toast"
export type { ToastProps } from "./toast-types"

// Combine both providers into a single ToastProvider
export function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <ToastContextProvider>
      <ToastProviderPrimitive>{children}</ToastProviderPrimitive>
    </ToastContextProvider>
  )
}

export {
  useToast,
  Toast,
  ToastViewport,
  ToastTitle,
  ToastDescription,
  ToastClose,
} 