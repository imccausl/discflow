import { Disclosure, useDisclosure } from 'app/components/Disclosure'

const DisclosureTrigger: React.FC = () => {
    const { isShowing } = useDisclosure()

    return (
        <Disclosure.Trigger>
            <div className="-mr-2 flex md:hidden">
                <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className={`${isShowing ? 'hidden' : 'block'} h-6 w-6`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                    <svg
                        className={`${isShowing ? 'block' : 'hidden'} h-6 w-6`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </Disclosure.Trigger>
    )
}

export const MobileMenu: React.FC<
    React.PropsWithChildren & { attachTo: React.RefObject<HTMLElement> }
> = ({ children, attachTo }) => {
    return (
        <Disclosure>
            <DisclosureTrigger />
            <Disclosure.Content attachTo={attachTo}>
                {children}
            </Disclosure.Content>
        </Disclosure>
    )
}
