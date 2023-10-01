import { UserMenu } from './UserMenu'
import { HeaderLink } from './HeaderLink'
import { MobileMenu } from './MobileMenu'
import { useRef } from 'react'

type HeaderProps = {
    user: Record<string, any>
}

const HeaderLinkGroup: React.FC = () => (
    <>
        <HeaderLink to="/home" label="Home" />
        <HeaderLink to="/discs" label="My Discs" />
        <HeaderLink to="/clubs" label="Clubs" />
        <HeaderLink to="/admin" label="Admin" />
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
                        <div className="ml-4 flex items-center md:ml-6">
                            <button
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-1.5"></span>
                                <span className="sr-only">
                                    View notifications
                                </span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                    />
                                </svg>
                            </button>

                            <div className="relative ml-3">
                                {user ? (
                                    <UserMenu />
                                ) : (
                                    <HeaderLink to="/login" label="Login" />
                                )}
                            </div>
                        </div>
                    </div>

                    <MobileMenu attachTo={mobileMenuRef}>
                        <>
                            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                                <HeaderLinkGroup />
                            </div>
                            <div className="border-t border-gray-700 pb-3 pt-4">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">
                                            Tom Cook
                                        </div>
                                        <div className="text-sm font-medium leading-none text-gray-400">
                                            tom@example.com
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">
                                            View notifications
                                        </span>
                                        <svg
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    <a
                                        href="#"
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                    >
                                        Profile
                                    </a>
                                    <a
                                        href="#"
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                    >
                                        Settings
                                    </a>
                                    <a
                                        href="#"
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                    >
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </>
                    </MobileMenu>
                </div>
            </div>
            <div ref={mobileMenuRef} className="md:hidden" />
        </nav>
    )
}
