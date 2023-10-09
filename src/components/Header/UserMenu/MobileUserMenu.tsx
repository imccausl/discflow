import { HeaderLink } from '../HeaderLink'
import { userMenuItems } from './UserMenu.constants'
import { useDisclosure } from 'app/components/Disclosure'
import { Avatar } from '../Avatar'
import { NotificationButton } from '../NotificationButton'
import type { User } from 'firebase/auth'

const MobileUserMenuItems: React.FC = () => {
    const { closeDisclosure } = useDisclosure()

    const menuItems = userMenuItems.map(({ href, label }) => (
        <HeaderLink
            key={label}
            to={href}
            label={label}
            onClick={closeDisclosure}
        />
    ))

    return <nav className="mt-3 space-y-1 px-2">{menuItems}</nav>
}

export const MobileUserMenu: React.FC<{
    user?: User
}> = ({ user }) => {
    console.log({ user })
    return (
        <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                    <Avatar imgUrl={user?.picture ?? ''} />
                </div>
                <div className="ml-3">
                    <div className="text-base font-medium leading-none text-black">
                        {user?.name ?? user?.email ?? ''}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                        {user?.name ? user?.email : ''}
                    </div>
                </div>
                <NotificationButton />
            </div>
            <MobileUserMenuItems />
        </div>
    )
}
