import { FC } from "react"
import {
  Root,
  Portal,
  Overlay,
  Title,
  Description,
  Cancel,
  Action,
  Content,
} from "@radix-ui/react-alert-dialog"
import styles from "./AlertDialog.module.scss"

export const AlertDialog: FC<{
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
  onCancel?: () => void
  confirmBtnLabel: string
  cancelBtnLabel?: string
  title?: string
  description?: string
}> = ({
  isOpen,
  onOpenChange,
  title,
  description,
  onCancel,
  onConfirm,
  confirmBtnLabel,
  cancelBtnLabel,
}) => {
  return (
    <Root open={isOpen} onOpenChange={onOpenChange}>
      <Portal>
        <Overlay className={styles.overlay}>
          <Content className={styles.content}>
            {title && (
              <Title asChild>
                <h2>{title}</h2>
              </Title>
            )}
            {description && (
              <Description asChild>
                <p>{description}</p>
              </Description>
            )}
            <Action asChild>
              <button onClick={onConfirm}>{confirmBtnLabel}</button>
            </Action>
            {onCancel && (
              <Cancel asChild>
                <button onClick={onCancel}>{cancelBtnLabel}</button>
              </Cancel>
            )}
          </Content>
        </Overlay>
      </Portal>
    </Root>
  )
}

export default AlertDialog
