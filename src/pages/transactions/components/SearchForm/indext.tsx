import { SearchFormContainer } from "./styles";
import { MagnifyingGlass } from 'phosphor-react'

export function SearchForm () {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque uma transação"/>
            <button type="submit">
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>                
    )
}