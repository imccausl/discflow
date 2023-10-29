import { Card } from 'app/components/Card'
import { List } from 'app/components/List'

type DiscCardProps = {
    heading: string
    subheading?: string
    actions?: { label: string; onClick: () => void }[]
}

const DiscStatus = {
    IN_BAG: 'in bag',
    LOST: 'lost',
    FOUND: 'found',
    NONE: 'none',
}

const fakeData = [
    {
        name: 'Horizon MD1',
        flightNumbers: {
            speed: 5,
            glide: 6,
            turn: 0,
            fade: 0,
        },
        status: DiscStatus.IN_BAG,
        type: 'Midrange',
        image: 'https://gottagogottathrow.com/cdn/shop/files/DMLE-SE-HZSL-MD1_720x.jpg?v=1697816607',
    },
    {
        name: 'Metal Flake C-Line FD',
        flightNumbers: {
            speed: 7,
            glide: 6,
            turn: 0,
            fade: 1,
        },
        status: DiscStatus.LOST,
        type: 'Fairway Driver',
        image: 'https://discdeals.ca/cdn/shop/products/image_509474b6-3afb-49f4-ab20-aad996822fba_1100x.png?v=1667321994',
    },
    {
        name: 'Meta Essence (Zen II)',
        flightNumbers: {
            speed: 8,
            glide: 5,
            turn: -2,
            fade: 1,
        },
        status: DiscStatus.FOUND,
        type: 'Fairway Driver',
        image: 'https://discrepublic.ca/cdn/shop/products/discmania-essence-meta-zen-ii-nate-perkins-signature-series-fairway-driver-38604598837506_1024x1024.jpg?v=1671850154',
    },
    {
        name: 'Horizon DD1',
        flightNumbers: {
            speed: 11,
            glide: 5,
            turn: -1,
            fade: 2,
        },
        status: DiscStatus.NONE,
        type: 'Distance Driver',
        image: 'https://discrepublic.ca/cdn/shop/products/2023-05-2617.40.06_1024x1024.jpg?v=1685141348',
    },
]

export const DiscCard: React.FC<DiscCardProps> = ({
    heading,
    subheading,
    actions,
}) => {
    return (
        <Card heading={heading} subheading={subheading} actions={actions}>
            <ul className="min-w-full divide-y divide-gray-100">
                {fakeData.map((disc) => (
                    <List
                        key={disc.name}
                        name={disc.name}
                        flightNumbers={disc.flightNumbers}
                        type={disc.type}
                        imageUrl={disc.image}
                        status={disc.status}
                    />
                ))}
            </ul>
        </Card>
    )
}
