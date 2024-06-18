import logo from '../image/logo.svg';
import {Img} from 'react-image'

const Header = () => {
    return <div className="shadow-md">
        <div className="bg-white w-full">
            <div className="w-full mx-auto max-w-7xl w-full">
                <div className="flex h-16 items-center justify-between">
                    <Img src={logo}/>
                </div>
            </div>
        </div>
    </div>
}
export default Header;