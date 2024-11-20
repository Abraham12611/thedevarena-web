import { Toast } from "@/components/ui/toast"

export interface ToastProps extends React.ComponentPropsWithoutRef<typeof Toast> {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
} 