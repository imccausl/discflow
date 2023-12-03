import { DiscCard } from './DiscCard'
import { PlusIcon } from 'app/components/Icons'

export default function Discs() {
    const actions = [
        {
            label: 'Add New Disc',
            icon: <PlusIcon />,
            onClick: () => console.log('New Disc'),
        },
    ]
    return <DiscCard heading="Discs" subheading="Test" actions={actions} />
}
