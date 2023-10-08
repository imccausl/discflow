import { UserMenu } from './UserMenu'
import { HeaderLink } from './HeaderLink'
import { MobileMenu } from './MobileMenu'
import { useRef } from 'react'
import { useDisclosure } from '../Disclosure'
import { MobileUserMenu } from './UserMenu/MobileUserMenu'
import { NotificationButton } from './NotificationButton'

type HeaderProps = {
    user: Record<string, any> | null
}

type HeaderLinkGroupProps = {
    onClick?: () => void
}

const MobileHeaderLinkGroup: React.FC<{
    user?: Record<string, any> | null
}> = ({ user }) => {
    const { closeDisclosure } = useDisclosure()

    return (
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <HeaderLinkGroup onClick={closeDisclosure} />
            <HeaderLink to="/login" label="Log in" onClick={closeDisclosure} />
        </div>
    )
}

const HeaderLinkGroup: React.FC<HeaderLinkGroupProps> = ({
    onClick = undefined,
}) => (
    <>
        <HeaderLink onClick={onClick} to="/home" label="Home" />
        <HeaderLink onClick={onClick} to="/discs" label="My Discs" />
        <HeaderLink onClick={onClick} to="/clubs" label="Clubs" />
        <HeaderLink onClick={onClick} to="/admin" label="Admin" />
    </>
)

export const Header: React.FC<HeaderProps> = ({ user }) => {
    const mobileMenuRef = useRef<HTMLDivElement>(null)

    return (
        <nav className="bg-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-8 w-8"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                alt="discflow"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <HeaderLinkGroup />
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        {user ? (
                            <div className="ml-4 flex items-center md:ml-6">
                                <NotificationButton />
                                <div className="relative ml-3">
                                    <UserMenu />
                                </div>
                            </div>
                        ) : (
                            <HeaderLink to="/login" label="Log in" />
                        )}
                    </div>

                    <MobileMenu attachTo={mobileMenuRef}>
                        <>
                            <MobileHeaderLinkGroup />
                            {user ? <MobileUserMenu /> : null}
                        </>
                    </MobileMenu>
                </div>
            </div>
            <div ref={mobileMenuRef} className="md:hidden" />
        </nav>
    )
}
