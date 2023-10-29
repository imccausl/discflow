import { Badge } from 'app/components/Badge'
import { FlightNumbers } from 'app/components/FlightNumbers'
import { IconButton, Button } from 'app/components/Button'
import {
    OutlineEditIcon,
    OutlineMapPinIcon,
    OutlinePlusIcon,
    OutlineStarIcon,
    OutlineChatBubbleIcon,
} from 'app/components/Icons'

type DiscItemProps = {
    name: string
    plastic: string
    flightNumbers: Record<string, number>
    status: string
    type: string
    imageUrl: string
}

const DiscStatus = {
    IN_BAG: 'in bag',
    LOST: 'lost',
    FOUND: 'found',
    NONE: 'none',
}

export const List: React.FC<DiscItemProps> = ({
    name,
    plastic,
    flightNumbers,
    status,
    type,
    imageUrl,
}) => {
    const { speed, turn, fade, glide } = flightNumbers
    const variantStatusMap = {
        [DiscStatus.FOUND]: 'success',
        [DiscStatus.LOST]: 'danger',
        [DiscStatus.IN_BAG]: 'primary',
    } as const

    return (
        <li className="mb-2 flex min-w-full flex-col justify-between rounded-lg border-[1px] border-gray-200 px-0 py-0 shadow-sm">
            <div className="flex flex-row items-center justify-between rounded-t-lg border-b-[1px] border-b-gray-100 bg-gray-50 px-2 py-2 pb-2">
                <p className="mr-2 flex justify-center font-semibold">
                    {name} ({plastic})
                </p>
                {status !== DiscStatus.NONE ? (
                    <Badge variant={variantStatusMap[status]}>{status}</Badge>
                ) : null}
            </div>
            <div className="flex flex-row items-center justify-between px-2 py-2">
                <img
                    className="h-12 w-12 flex-none rounded-full bg-gray-50"
                    src={imageUrl}
                    alt=""
                />
                <div className="ml-3 flex-auto flex-col">
                    <div className="flex flex-row justify-between text-sm  leading-6 text-gray-900"></div>
                    <div className="align-center mt-0 flex min-w-full flex-auto flex-row justify-between">
                        <FlightNumbers
                            speed={speed}
                            glide={glide}
                            turn={turn}
                            fade={fade}
                        />
                        <p className="truncate text-center text-xs leading-5 text-gray-500">
                            {type}
                        </p>
                    </div>
                </div>
                <div className="ml-3 flex flex-col items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-500"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            </div>
            <div className="flex flex-row items-center justify-end rounded-b-lg border-b-[1px] border-b-gray-100 bg-gray-50 px-2 py-2 pb-2">
                <div className="flex-1">
                    <Button
                        variant="plain"
                        leadingIcon={<OutlineChatBubbleIcon />}
                    >
                        10 Messages
                    </Button>
                </div>
                <IconButton label="Mark as lost">
                    <OutlineMapPinIcon />
                </IconButton>
                <IconButton label="Edit">
                    <OutlineEditIcon />
                </IconButton>
                <IconButton label="Favourite">
                    <OutlineStarIcon />
                </IconButton>
                <IconButton label="Add to bag">
                    <OutlinePlusIcon />
                </IconButton>
            </div>
        </li>
    )
}
