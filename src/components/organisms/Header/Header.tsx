import { SearchInput } from "../../atoms/SearchInput/SearchInput"
import { Nav } from "../../molecules/Nav/Nav"
import "./Header.css"


export const Header = () => {
  return (
    <header className="header">
        <h1>RedFlix</h1>
        <Nav/>
        <SearchInput />
    </header>
  )
}

