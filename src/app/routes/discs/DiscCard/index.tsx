import { Disc } from 'app/components/Disc'
import { PageHeader, type Action } from 'app/components/PageHeader'

type DiscCardProps = {
    heading: string
    subheading?: string
    actions?: Action[]
}

const DiscStatus = {
    IN_BAG: 'in bag',
    LOST: 'lost',
    FOUND: 'found',
    NONE: 'none',
}

const fakeMessagesData: Record<string, any> = {
    '1': {
        id: '1',
        discId: '1',
        messages: [
            {
                user: '1',
                text: 'This is a message',
            },
        ],
    },
}

const fakeUserData = {
    '1': {
        id: '1',
        name: 'John Doe',
        email: '',
    },
}

const fakeDiscData = [
    {
        id: '1',
        belongsTo: '1',
        name: 'MD1',
        plastic: 'Horizon',
        manufacturer: 'Discmania',
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
        id: '2',
        belongsTo: '1',
        name: 'FD',
        plastic: 'Metal Flake C-Line',
        manufacturer: 'Discmania',
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
        id: '1',
        belongsTo: '1',
        name: 'Zen 2 Essence',
        plastic: 'Meta',
        manufacturer: 'Discmania',
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
        id: '1',
        belongsTo: '1',
        name: 'DD1',
        plastic: 'Horizon',
        manufacturer: 'Discmania',
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
    {
        id: '1',
        belongsTo: '1',
        name: 'CD1',
        plastic: 'S-Line',
        manufacturer: 'Discmania',
        flightNumbers: {
            speed: 9,
            glide: 5,
            turn: -1,
            fade: 2,
        },
        status: DiscStatus.IN_BAG,
        type: 'Fairway Driver',
        image: 'https://discrepublic.ca/cdn/shop/files/2023-10-0712.27.50_1024x1024.jpg?v=1696709248',
    },
    {
        id: '1',
        belongsTo: '1',
        name: 'DD3 Cloud Breaker 3',
        plastic: 'S-Line',
        manufacturer: 'Discmania',
        flightNumbers: {
            speed: 12,
            glide: 5,
            turn: -1,
            fade: 3,
        },
        status: DiscStatus.LOST,
        type: 'Distance Driver',
        image: 'https://discrepublic.ca/cdn/shop/products/discmania-dd3-special-blend-s-line-cloud-breaker-3-eagle-mcmahon-signature-series-distance-driver-38447931031810_1024x1024.jpg?v=1669340829',
    },
    {
        id: '1',
        belongsTo: '1',
        name: 'Vanguard',
        plastic: 'S-Line',
        manufacturer: 'Discmania',
        flightNumbers: {
            speed: 9,
            glide: 5,
            turn: 0,
            fade: 2,
        },
        status: DiscStatus.IN_BAG,
        type: 'Fairway Driver',
        image: 'https://discrepublic.ca/cdn/shop/products/2023-07-2012.58.54_1024x1024.jpg?v=1691960003',
    },
    {
        id: '1',
        belongsTo: '1',
        name: 'MD3',
        plastic: 'Chroma',
        manufacturer: 'Discmania',
        flightNumbers: {
            speed: 5,
            glide: 5,
            turn: 0,
            fade: 1,
        },
        status: DiscStatus.FOUND,
        type: 'Midrange',
        image: 'https://mydisc.ca/cdn/shop/products/IronSamurai4OrangeDMSU_300x300.jpg?v=1667397890',
    },
]

export const DiscCard: React.FC<DiscCardProps> = ({
    heading,
    subheading,
    actions,
}) => {
    return (
        <>
            <PageHeader title="My Discs" actions={actions} />

            <ul className="min-w-full">
                {fakeDiscData.map((disc) => (
                    <li key={`${disc.name}-${disc.plastic}`}>
                        <Disc
                            name={disc.name}
                            plastic={disc.plastic}
                            flightNumbers={disc.flightNumbers}
                            type={disc.type}
                            imageUrl={disc.image}
                            status={disc.status}
                            messages={fakeMessagesData[disc.id]?.messages}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}
