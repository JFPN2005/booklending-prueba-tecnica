import { PossessionWithReturnDate } from "../../types"
import { formatDate } from "../../utils/formatDate"

type PossessionDetailsProps = {
    possession: PossessionWithReturnDate
}

export default function PossessionDetails({ possession }: PossessionDetailsProps) {
    return (
        <>
            <tr className="border-b">
                <td className="border-b">
                    {possession.client}
                </td>
                <td className="border-b">
                    {possession.idCard}
                </td>
                <td className="border-b">
                    {possession.phone}
                </td>
                <td className="border-b">
                    {possession.book}
                </td>
                <td className="border-b">
                    {formatDate(possession.orderDate)}
                </td>
                <td className="border-b">
                    {formatDate(possession.returnDate)}
                </td>
            </tr>
        </>
    )
}
