import { forwardRef } from 'react'

type ButtonVariant = (typeof Variant)[keyof typeof Variant]

type ButtonProps = React.PropsWithChildren &
    React.HTMLAttributes<HTMLButtonElement> & {
        variant?: ButtonVariant
        leadingIcon?: React.ReactNode
        disabled?: boolean
    }

export const Variant = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
    DANGER: 'danger',
    PLAIN: 'plain',
    DEFAULT: 'default',
} as const

const variantStyleMap = {
    [Variant.PRIMARY]: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    [Variant.SECONDARY]: 'bg-gray-200 hover:bg-gray-300 text-gray-900',
    [Variant.DANGER]: 'bg-red-600 hover:bg-red-700 text-white',
    [Variant.PLAIN]: 'bg-transparent hover:bg-gray-100 text-gray-900',
    [Variant.DEFAULT]: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
}

const borderStyleMap = {
    [Variant.PRIMARY]: 'ring-1 ring-inset ring-gray-300',
    [Variant.SECONDARY]: 'ring-1 ring-inset ring-gray-300',
    [Variant.DANGER]: 'ring-1 ring-inset ring-red-600',
    [Variant.PLAIN]: 'ring-0 ring-transparent ring-inset',
    [Variant.DEFAULT]: 'ring-1 ring-inset ring-gray-300',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            children,
            disabled = false,
            variant = Variant.DEFAULT,
            leadingIcon,
            ...restProps
        },
        ref,
    ) => {
        return (
            <button
                className={`${variantStyleMap[variant]} ${borderStyleMap[variant]} flex flex-row items-center justify-between rounded-md px-2 py-1 text-xs font-semibold text-gray-400 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600`}
                ref={ref}
            >
                {leadingIcon ? (
                    <span aria-hidden="true" className="mr-1">
                        {leadingIcon}
                    </span>
                ) : null}
                {children}
            </button>
        )
    },
)

Button.displayName = 'Button'

type IconButtonProps = {
    label: string
}

const IconButton = forwardRef<HTMLButtonElement, ButtonProps & IconButtonProps>(
    ({ children, label, ...restProps }) => {
        return (
            <Button aria-label={label} variant={Variant.PLAIN} {...restProps}>
                {children}
            </Button>
        )
    },
)

IconButton.displayName = 'IconButton'

export { Button, IconButton }
