import { UserMenu } from './UserMenu'
import { HeaderLink } from './HeaderLink'
import { MobileMenu } from './MobileMenu'
import { useRef } from 'react'
import { useDisclosure } from '../Disclosure'
import { MobileUserMenu } from './UserMenu/MobileUserMenu'
import { NotificationButton } from './NotificationButton'
import { HeaderLogo } from './HeaderLogo'
import type { User } from 'firebase/auth'

type HeaderProps = {
    user: User | null
}

type HeaderLinkGroupProps = {
    onClick?: () => void
}

const MobileHeaderLinkGroup: React.FC<{ user: User | null }> = ({ user }) => {
    const { closeDisclosure } = useDisclosure()

    return (
        <nav className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            <HeaderLinkGroup onClick={closeDisclosure} />
            {!user ? (
                <HeaderLink
                    to="/login"
                    label="Log in"
                    onClick={closeDisclosure}
                />
            ) : null}
        </nav>
    )
}

const HeaderLinkGroup: React.FC<HeaderLinkGroupProps> = ({
    onClick = undefined,
}) => (
    <>
        <HeaderLink onClick={onClick} to="/home" label="Home" />
        <HeaderLink onClick={onClick} to="/discs" label="Discs" />
        <HeaderLink onClick={onClick} to="/clubs" label="Clubs" />
        <HeaderLink onClick={onClick} to="/admin" label="Admin" />
    </>
)

export const Header: React.FC<HeaderProps> = ({ user }) => {
    const mobileMenuRef = useRef<HTMLDivElement>(null)
    return (
        <header className="fixed left-0 top-0 z-[1000] w-full border-b-[1px] border-b-gray-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-shrink-0">
                        <HeaderLogo />
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <nav className="flex w-full items-baseline justify-center space-x-4">
                                <HeaderLinkGroup />
                            </nav>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        {user ? (
                            <div className="ml-4 flex items-center md:ml-6">
                                <NotificationButton />
                                <div className="relative ml-3">
                                    <UserMenu avatarUrl={user?.picture ?? ''} />
                                </div>
                            </div>
                        ) : (
                            <HeaderLink to="/login" label="Log in" />
                        )}
                    </div>

                    <MobileMenu attachTo={mobileMenuRef}>
                        <>
                            <MobileHeaderLinkGroup user={user} />
                            {user ? <MobileUserMenu user={user} /> : null}
                        </>
                    </MobileMenu>
                </div>
            </div>
            <div ref={mobileMenuRef} className="md:hidden" />
        </header>
    )
}
