"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "./toast/toast-primitives"
import { ClientToast } from "./toast/client-toast"

export function Toaster() {
  return (
    <ToastProvider>
      <ClientToast />
      <ToastViewport />
    </ToastProvider>
  )
}