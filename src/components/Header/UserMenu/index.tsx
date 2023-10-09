import { ActionMenu } from 'app/components/ActionMenu'
import { Avatar } from '../Avatar'
import { UserMenuButton } from './UserMenuButton'
import { userMenuItems } from './UserMenu.constants'

const getUserMenuItems = () => {
    return userMenuItems.map(({ href, label }) => (
        <ActionMenu.Link href={href} key={label}>
            {label}
        </ActionMenu.Link>
    ))
}

type UserMenuProps = {
    avatarUrl: string
}

export const UserMenu: React.FC<UserMenuProps> = ({ avatarUrl }) => (
    <ActionMenu>
        <ActionMenu.Trigger>
            <UserMenuButton>
                <Avatar imgUrl={avatarUrl} />
            </UserMenuButton>
        </ActionMenu.Trigger>
        <ActionMenu.Menu>{getUserMenuItems()}</ActionMenu.Menu>
    </ActionMenu>
)
