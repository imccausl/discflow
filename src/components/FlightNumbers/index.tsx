type FlightNumbersProps = {
    speed: number
    glide: number
    turn: number
    fade: number
}

const baseClasses =
    'inline-flex items-center justify-center rounded-full w-4 h-4 px-0 py-0 text-[10px] font-medium ring-1 ring-inset'

export const FlightNumbers: React.FC<FlightNumbersProps> = ({
    speed,
    glide,
    turn,
    fade,
}) => {
    return (
        <div className="flex flex-row items-center">
            <div
                className={`${baseClasses} mr-1 bg-purple-50 text-purple-700 ring-purple-700/10`}
            >
                {speed}
            </div>
            <div
                className={`${baseClasses} mr-1 bg-blue-50 text-blue-700 ring-blue-700/10`}
            >
                {glide}
            </div>
            <div
                className={`${baseClasses} mr-1 bg-red-50 text-red-800 ring-yellow-600/10`}
            >
                {turn}
            </div>
            <div
                className={`${baseClasses} bg-orange-50 text-orange-700 ring-indigo-700/10`}
            >
                {fade}
            </div>
        </div>
    )
}
