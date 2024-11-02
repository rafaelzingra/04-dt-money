import { useContext, useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm/indext"
import { Pricehighlight, TransactionsContainer, TransactionsTable } from "./styles"
import { TransactionsContext } from "../../contexts/TRansactionContext"

export function Transactions() {
    
    const { transactions } = useContext(TransactionsContext)

    return(
        <div>
            <Header />
            <Summary />            
            <TransactionsContainer>
                <SearchForm/>
                <TransactionsTable>
                    <tbody>
                        {transactions.map(transaction => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <Pricehighlight variant={transaction.type}>
                                            {transaction.price}
                                        </Pricehighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })}                            
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}