import { forwardRef } from 'react'

type ButtonProps = React.PropsWithChildren &
    React.HTMLAttributes<HTMLButtonElement>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...restProps }, ref) => {
        return <button ref={ref}>{children}</button>
    },
)

Button.displayName = 'Button'

export { Button }
