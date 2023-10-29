import React, { useContext, createContext } from 'react'

type Action = {
    onClick: () => void
    label: string
}
interface Card
    extends React.FC<
        React.PropsWithChildren & {
            heading: string
            subheading?: string
            actions?: Action[]
        }
    > {}

type CardContext = null | {}
const CardContext = createContext<CardContext>(null)

export const useCardContext = () => {
    const context = useContext(CardContext)

    if (!context) {
        throw new Error(
            `The Card compound components cannot be rendered outside the Card component`,
        )
    }

    return context
}

const CardHeadingAction: React.FC<
    React.PropsWithChildren & { onClick: () => void }
> = ({ children, onClick }) => {
    return <div className="flex-shrink-0">{children}</div>
}

const CardHeadingActions: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <div className="flex items-center space-x-1">{children}</div>
}

const CardHeading: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <h2 className="text-lg font-medium text-gray-900">{children}</h2>
}

const CardSubheading: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <p className="text-sm text-gray-500">{children}</p>
}
const CardHeader: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex items-center justify-between border-b-gray-200">
            {children}
        </div>
    )
}

const Card: Card = ({ children, heading, subheading, actions }) => {
    return (
        <CardContext.Provider value={{}}>
            <CardHeader>
                <div className="mb-2 flex flex-col px-2 py-0">
                    <CardHeading>{heading}</CardHeading>
                    <CardSubheading>{subheading}</CardSubheading>
                </div>
                {actions ? (
                    <CardHeadingActions>
                        {actions.map((action) => (
                            <CardHeadingAction
                                key={action.label}
                                onClick={action.onClick}
                            >
                                {action.label}
                            </CardHeadingAction>
                        ))}
                    </CardHeadingActions>
                ) : null}
            </CardHeader>
            {children}
        </CardContext.Provider>
    )
}

export { Card }
