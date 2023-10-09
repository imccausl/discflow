type HeadingProps = {
    heading: string
    description?: string
}

export const Heading: React.FC<React.PropsWithChildren & HeadingProps> = ({
    heading,
    description,
    children,
}) => {
    return (
        <div className=" flex w-full flex-row items-center justify-between">
            <div className="w-full flex-grow">
                <h1 className="text-base font-semibold text-gray-900">
                    {heading}
                </h1>
                {description ? (
                    <p className="pt-1 text-sm text-gray-700">{description}</p>
                ) : null}
            </div>
            <div className="flex items-center">{children}</div>
        </div>
    )
}
