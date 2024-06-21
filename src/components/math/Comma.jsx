import {Img} from "react-image";
import comma from "../../image/comma.svg";

const Comma = ({onClick, className}) => {
    return <div className={className} onClick={onClick}>
        <div className="pt-6">
            <Img src={comma}/>
        </div>
    </div>
}
export default Comma