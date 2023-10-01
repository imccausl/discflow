import { ActionMenu } from 'app/components/ActionMenu'
import { Avatar } from '../Avatar'
import { UserMenuButton } from './UserMenuButton'

const userMenuItems = [
    { href: '/profile', label: 'Profile' },
    { href: '/settings', label: 'Settings' },
    { href: '/logout', label: 'Sign Out' },
]

const getUserMenuItems = () => {
    return userMenuItems.map(({ href, label }) => (
        <ActionMenu.Link href={href} key={label}>
            {label}
        </ActionMenu.Link>
    ))
}

export const UserMenu: React.FC = () => (
    <ActionMenu>
        <ActionMenu.Trigger>
            <UserMenuButton>
                <Avatar imgUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            </UserMenuButton>
        </ActionMenu.Trigger>
        <ActionMenu.Menu>{getUserMenuItems()}</ActionMenu.Menu>
    </ActionMenu>
)
