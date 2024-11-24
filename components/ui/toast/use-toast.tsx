import { useToastClient } from "./use-toast-client"

export function useToast() {
  if (typeof window === 'undefined') {
    return {
      toasts: [],
      toast: () => {},
      dismiss: () => {},
    }
  }
  return useToastClient()
} 