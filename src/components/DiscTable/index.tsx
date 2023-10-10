import { Table } from '../Table'
import { Heading } from '../Heading'

export const DiscTable: React.FC = () => {
    return (
        <div className="px-5">
            <Heading content="Discs" description="A list of all your discs.">
                <button>Add Disc</button>
            </Heading>
            <div className="py-5">
                <Table>
                    <Table.Head>
                        <Table.Row>
                            <Table.Column>Disc Name</Table.Column>
                            <Table.Column>Speed</Table.Column>
                            <Table.Column>Glide</Table.Column>
                            <Table.Column>Turn</Table.Column>
                            <Table.Column>Fade</Table.Column>
                            <Table.Column>Type</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>In Bag</Table.Column>
                            <Table.Column>
                                <span className="sr-only">Actions</span>
                            </Table.Column>
                        </Table.Row>
                    </Table.Head>
                    <Table.Body>
                        <Table.Row>
                            <Table.Column>
                                <span className="font-semibold text-black">
                                    Discraft Buzzz
                                </span>
                            </Table.Column>
                            <Table.Column>5</Table.Column>
                            <Table.Column>4</Table.Column>
                            <Table.Column>-1</Table.Column>
                            <Table.Column>1</Table.Column>
                            <Table.Column>Midrange</Table.Column>
                            <Table.Column>Lost</Table.Column>
                            <Table.Column>Yes</Table.Column>
                            <Table.Column>
                                <button className="text-right text-indigo-600">
                                    Edit
                                </button>
                            </Table.Column>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </div>
    )
}
