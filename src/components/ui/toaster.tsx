import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/hooks/use-toast"
import { CircleCheck } from "lucide-react"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider duration={1000}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast variant={props.variant} key={id} {...props}>
            <div className="grid gap-1">
              {title && (
                <div className="flex items-center gap-2">
                  <CircleCheck color="white" />
                  <ToastTitle>{title}</ToastTitle>
                </div>
              )}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
