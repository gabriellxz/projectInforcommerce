import { useState } from 'react';
import './style.css'

interface PropsSearch {
    onSearch: Function;
}

export default function SearchBar(props:PropsSearch) {

    const [inputValue, setInputValue] = useState<string>("")

    function handleInputValue(e:any) {
        e.preventDefault()

        setInputValue(e.target.value)
    }

    function handleSubmitSearch(e:any) {
        e.preventDefault()

        props.onSearch(inputValue)
    }

    function clearSearch() {
        setInputValue("")
        props.onSearch(inputValue)
    }

    return (
        <form className="dsc-search-bar" onSubmit={handleSubmitSearch}>
            <button type="submit">🔎︎</button>
            <input type="text" placeholder="Nome do produto" value={inputValue} onChange={handleInputValue}/>
            <button onClick={clearSearch}>❌</button>
        </form>
    )
}