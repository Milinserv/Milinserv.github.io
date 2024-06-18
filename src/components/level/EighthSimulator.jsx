import Comma from "../math/Comma";
import CustomInput from "../CustomInput";
import Dot from "../math/Dot";
import Equals from "../math/Equals";
import MultTableButton from "../MultTableButton";
import {Img} from "react-image";
import "../../css/line.css";
import goodboy from "../../image/goodboy.svg";

const EighthSimulator = () => {

    return <div className="flex flex-col space-y-12">
        <div className="flex justify-end pr-8 pt-2">
            <MultTableButton/>
        </div>
        <div className="flex flex-col pl-8">
            <div className="flex pb-28 justify-center">
                <div className="flex flex-col">
                    <div className="rounded-2xl ml-5 bg-orange-300">
                        <span className="flex py-4 px-2 font-medium">Убираем запятые</span>
                    </div>
                    <div className="flex pl-24">
                        <div className="pointer"></div>
                        <div className="pointer-reversed"></div>
                    </div>
                </div>
            </div>
            <div className="flex mb-2 space-x-2">
                <CustomInput value={'2'}/>
                <Comma/>
                <CustomInput value={'7'}/>
                <Dot/>
                <CustomInput value={'0'}/>
                <Comma/>
                <CustomInput value={'8'}/>
                <CustomInput value={'5'}/>
                <Equals/>
                <CustomInput trueNum={'2'}/>
                <Comma/>
                <CustomInput trueNum={'7'}/>
                <Dot/>
                <CustomInput trueNum={'0'}/>
                <Comma/>
                <CustomInput trueNum={'8'}/>
                <CustomInput trueNum={'5'}/>
            </div>
            <div className="flex justify-center pr-8 pt-8">
                <div className="rounded-2xl ml-16 bg-orange-200">
                    <span className="flex py-1 px-2 font-medium text-center">Нажми,<br></br> запятая пропадет</span>
                </div>
            </div>
            <div className="flex justify-end pr-6 pt-6">
                <Img src={goodboy}/>
            </div>
        </div>
    </div>
}
export default EighthSimulator;