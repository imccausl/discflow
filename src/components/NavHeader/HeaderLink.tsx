import { NavLink } from '@remix-run/react'

type HeaderLinkProps = {
    to: string
    label: string
    onClick?: () => void
}

const baseClasses =
    'block md:flex rounded-md px-3 py-2 text-base md:text-sm font-medium'
const activeClasses = 'bg-gray-100 text-gray-900'
const inactiveClasses = 'text-inherit hover:bg-gray-50 hover:text-gray-900'

export const HeaderLink: React.FC<HeaderLinkProps> = ({
    to,
    label,
    onClick = undefined,
}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${isActive ? activeClasses : inactiveClasses} ${baseClasses}`
            }
            onClick={onClick}
        >
            {label}
        </NavLink>
    )
}
