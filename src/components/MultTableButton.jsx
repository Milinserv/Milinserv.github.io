import {Img} from "react-image";
import multTable from "../image/multiplicationTable.svg";
import xMark from "../image/x-mark.svg";

const MultTableButton = () => {
    return <>
        <div className="group relative flex flex-col items-center h-16 justify-center">
            <div className="flex flex-row rounded-2xl cursor-pointer bg-sky-100 w-64 h-full pl-8 text-black shadow-sm">
                <Img className="flex" src={xMark} width={20} height={20}/>
                <span className="pt-5 pl-4">Таблица умножения</span>
            </div>
            <div
                className="absolute left-1/2 top-10 pt-10 ml-auto mr-auto min-w-max -translate-x-1/2 scale-0 transform rounded-2xl px-3 py-2 text-xs font-medium transition-all duration-500 group-hover:scale-100">
                <div className="flex rounded-2xl max-w-xs flex-col items-center border">
                    <div className="rounded-2xl bg-white p-2 text-center text-xs text-white">
                        <Img src={multTable}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default MultTableButton;