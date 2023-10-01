import { NavLink } from '@remix-run/react'

type HeaderLinkProps = {
    to: string
    label: string
}

const baseClasses =
    'block md:flex rounded-md px-3 py-2 text-base md:text-sm font-medium'
const activeClasses = 'bg-gray-900 text-white'
const inactiveClasses = 'text-gray-300 hover:bg-gray-700 hover:text-white'

export const HeaderLink: React.FC<HeaderLinkProps> = ({ to, label }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `${isActive ? activeClasses : inactiveClasses} ${baseClasses}`
            }
        >
            {label}
        </NavLink>
    )
}
