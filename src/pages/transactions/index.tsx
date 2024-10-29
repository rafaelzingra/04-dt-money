import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { Pricehighlight, TransactionsContainer, TransactionsTable } from "./styles"

export function Transactions() {
    return(
        <div>
            <Header />
            <Summary />

            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de Site</td>
                            <td>
                                <Pricehighlight variant='income'>
                                    R$ 12.000,00
                                </Pricehighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Hamburguer</td>
                            <td>
                                <Pricehighlight variant='outcome'>
                                - R$ 59,00
                                </Pricehighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>10/04/2024</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    )
}