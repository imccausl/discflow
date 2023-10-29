import { Input } from '../Input'

type Action = {
    onClick: () => void
    label: string
}

type PageHeaderProps = {
    title: string
    subtitle?: string
    actions?: Action[]
}

const SearchIcon: React.FC = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6 text-gray-400"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
    </svg>
)

export const PageHeader: React.FC<PageHeaderProps> = ({
    title,
    subtitle,
    actions,
}) => {
    return (
        <div className="mb-4 lg:flex lg:items-center lg:justify-between">
            <div className="flex min-w-0 flex-1 items-center justify-between">
                <h2 className="text-xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
                    {title}
                </h2>
                <div className="flex-2">
                    <Input
                        name="search"
                        placeholder="Search discs"
                        icon={<SearchIcon />}
                    />
                </div>
            </div>
        </div>
    )
}
