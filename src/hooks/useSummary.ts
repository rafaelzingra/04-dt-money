import { useMemo } from "react"
import { TransactionsContext } from "../contexts/TransactionContext"
import { useContextSelector } from "use-context-selector"

export function useSummary () {
    
    const transactions = useContextSelector(TransactionsContext, (context) => {
        return context.transactions
    })

    const summary = useMemo(() => {
        return transactions.reduce(
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
    }, [transactions])

    return summary
}