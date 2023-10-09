interface Table extends React.FC<React.PropsWithChildren> {
    Head: typeof TableHead
    Row: typeof TableRow
    Column: typeof TableColumn
    Body: typeof TableBody
}

const Table: Table = ({ children }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            {children}
        </table>
    )
}

const TableHead: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <thead className="bg-white font-semibold text-black">{children}</thead>
    )
}

const TableBody: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <tbody className="divide-y divide-gray-200 bg-white text-gray-500">
            {children}
        </tbody>
    )
}

const TableRow: React.FC<React.PropsWithChildren> = ({ children }) => {
    return <tr>{children}</tr>
}

const TableColumn: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <td className="whitespace-nowrap px-3 py-4 text-sm text-inherit first:pl-0 last:pr-0 last:text-right">
            {children}
        </td>
    )
}

Table.Head = TableHead
Table.Body = TableBody
Table.Row = TableRow
Table.Column = TableColumn

export { Table }
