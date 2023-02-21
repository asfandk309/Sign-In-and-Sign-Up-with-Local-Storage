import './Header.css'
import Toggle from '../Toggle/Toggle'
function Header() {
    return (
        <div className="container-header mt-5">
            <div className="item-1">
                <h1>devfinder</h1>
            </div>
            <div className="item-2">
                <Toggle />
            </div>
        </div>
    )
}

export default Header;



