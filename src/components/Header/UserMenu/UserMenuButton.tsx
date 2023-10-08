export const UserMenuButton: React.FC<
    React.PropsWithChildren & {
        onClick?: () => void
    }
> = ({ children, ...restProps }) => (
    <button
        type="button"
        className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
        id="user-menu-button"
        aria-expanded="false"
        aria-haspopup="true"
        {...restProps}
    >
        <span className="absolute -inset-1.5"></span>
        <span className="sr-only">Open user menu</span>
        {children}
    </button>
)
