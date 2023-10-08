import { HeaderLink } from '../HeaderLink'
import { userMenuItems } from './UserMenu.constants'
import { useDisclosure } from 'app/components/Disclosure'
import { Avatar } from '../Avatar'
import { NotificationButton } from '../NotificationButton'

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

    return <div className="mt-3 space-y-1 px-2">{menuItems}</div>
}

export const MobileUserMenu: React.FC = () => {
    return (
        <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                    <Avatar imgUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                </div>
                <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                        Tom Cook
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                        tom@example.com
                    </div>
                </div>
                <NotificationButton />
            </div>
            <MobileUserMenuItems />
        </div>
    )
}
