import {Img} from "react-image";
import close from "../image/close.svg";

const CloseButton = ({ onClick, children }) => {
    return <div className="flex flex-row cursor-pointer">
        <Img src={close}/>
    </div>
}
export default CloseButton