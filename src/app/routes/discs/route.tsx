import { DiscCard } from './DiscCard'

export default function Discs() {
    const actions = [
        {
            label: 'New Disc',
            onClick: () => console.log('New Disc'),
        },
    ]
    return <DiscCard heading="Discs" subheading="Test" actions={actions} />
}
