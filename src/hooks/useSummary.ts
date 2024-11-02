import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionContext"

export function useSummary () {
    
    const { transactions } = useContext(TransactionsContext)

    const summary = transactions.reduce(
        (acc, transaciton) => {
            if (transaciton.type === 'income') {
                acc.income += transaciton.price
                acc.total += transaciton.price
            } else {
                acc.outcome += transaciton.price
                acc.total -= transaciton.price
            }
            return acc
        }, 
        {
            income:0,
            outcome:0,
            total:0
        }
    )

    return summary
}