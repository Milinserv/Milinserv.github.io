import Comma from "../math/Comma";
import CustomInput from "../CustomInput";
import Dot from "../math/Dot";
import Equals from "../math/Equals";
import MultTableButton from "../MultTableButton";
import {Img} from "react-image";
import "../../css/line.css";
import goodboy from "../../image/goodboy.svg";
import cn from "classnames";
import BlockWithArrows from "../BlockWithArrows";
import CustomInputForCount from "../CustomInputForCount";
import InfoBlock from "../InfoBlock";
import Multiply from "../math/Multiply";
import Slash from "../math/Slash";
import Plus from "../math/Plus";
import CloseButton from "../CloseButton";
import React, {useEffect, useState} from "react";

const EighthSimulator = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [viewCommaClickAction, setViewCommaClickAction] = useState(false);
    const [numberMultByColumnOne, setNumberMultByColumnOne] = useState(0);
    const [numberMultByColumnTwo, setNumberMultByColumnTwo] = useState(0);
    const [viewMultByColumn, setViewMultClickAction] = useState(false);
    const [calcValueOne, setCalcValueOne] = useState(0);
    const [calcValueTwo, setCalcValueOTwo] = useState(0);
    const [calcValueThree, setCalcValueOThree] = useState(0);
    const [calcValueFour, setCalcValueFour] = useState(0);
    const [viewResultCalc, setViewResultCalc] = useState(false);
    const [numberOfSymbols, setNumberOfSymbols] = useState(0);
    const [clickOfTrueComma, setClickOfTrueComma] = useState(false);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            valueMultByColumn();
        }, 1000);

        return () => clearTimeout(timer);
    }, [numberMultByColumnOne === '27' && numberMultByColumnTwo === '85'])

    useEffect(() => {
        handleChangeDivision()
    }, [calcValueOne === '2' && calcValueTwo === '2' && calcValueThree === '9' && calcValueFour === '5'])

    const valueMultByColumn = () => {
        if (numberMultByColumnOne === '27' && numberMultByColumnTwo === '85') {
            setViewMultClickAction(true);
        }
    }

    const handleChangeDivision = () => {
        if (calcValueOne === '2' && calcValueTwo === '2' && calcValueThree === '9' && calcValueFour === '5') {
            setViewResultCalc(true);
        }
    }

    return <div className={cn("flex flex-col")}>
        <div className="flex justify-end pr-8 pt-2">
            <MultTableButton/>
        </div>
        <div className="flex flex-col pl-8">
            {
                isVisible && !viewMultByColumn ? <div
                    className={cn("flex flex-row justify-end w-full pb-16 pt-8", {"justify-center": !viewCommaClickAction})}>
                    <div className={cn({"pl-64": !viewCommaClickAction}, "flex pr-60")}>
                        <BlockWithArrows label={'Убираем запятые'} classNameSkewLeft={'pr-6'}
                                         classNameSkewRight={'pl-6'}/>
                    </div>
                    {
                        viewCommaClickAction || viewMultByColumn ? <>
                            <div className="flex pr-52">
                                <BlockWithArrows label={'Умножаем'}/>
                            </div>
                        </> : <></>
                    }
                </div> : <></>
            }
            {
                numberOfSymbols === '3' && <div className="flex justify-end pt-16 pb-16 pr-48">
                    <InfoBlock className={"bg-orange-300"} label={"Запятой отделяем 3 знака <br/> нажми на правильную"} />
                </div>
            }
            <div className={cn("flex mb-2 space-x-2", {"pt-36": viewResultCalc && numberOfSymbols !== '3', "pt-48": !isVisible})}>
                <CustomInput value={'2'}/>
                <Comma/>
                <CustomInput value={'7'}/>
                <Dot/>
                <CustomInput value={'0'}/>
                <Comma/>
                <CustomInput value={'8'}/>
                <CustomInput value={'5'}/>
                {
                    isVisible && !viewMultByColumn ? <>
                        <Equals/>
                        <CustomInput className={'border-sky-400 bg-sky-200'} value={'2'}/>
                        <Comma className={'cursor-pointer'} onClick={() => setViewCommaClickAction(true)}/>
                        <CustomInput className={'border-sky-400 bg-sky-200'} value={'7'}/>
                        <Dot/>
                        <CustomInput className={'border-sky-400 bg-sky-200'} value={'0'}/>
                        <Comma className={'cursor-pointer'} onClick={() => setViewCommaClickAction(true)}/>
                        <CustomInput className={'border-sky-400 bg-sky-200'} value={'8'}/>
                        <CustomInput className={'border-sky-400 bg-sky-200'} value={'5'}/>
                    </> : <></>
                }
                {
                    viewCommaClickAction ? <>
                        <Equals/>
                        <CustomInput className={cn({"bg-green-100 border-green-200": viewMultByColumn})} stateValue={setNumberMultByColumnOne} trueNum={'27'} maxLength={'2'}/>
                        <Dot/>
                        <CustomInput className={cn({"bg-green-100 border-green-200": viewMultByColumn})} stateValue={setNumberMultByColumnTwo} trueNum={'85'} maxLength={'2'}/>
                    </> : <></>
                }
                {
                    viewResultCalc ? <>
                        <Equals/>
                        <CustomInput className={cn({"bg-green-100 border-green-200": viewResultCalc})} value={'2295'} maxLength={'4'}/>
                        {
                            numberOfSymbols === '3' && <>
                                <Equals/>
                                <CustomInput className={cn({"bg-green-100 border-green-300": clickOfTrueComma})} value={2}/>
                                <Comma className="cursor-pointer" onClick={() => setClickOfTrueComma(true)}/>
                                <CustomInput className={cn({"bg-green-100 border-green-300": clickOfTrueComma})} value={2}/>
                                {!clickOfTrueComma && <Comma className="cursor-pointer" onClick={() => setClickOfTrueComma(false)}/>}
                                <CustomInput className={cn({"bg-green-100 border-green-300": clickOfTrueComma})} value={9}/>
                                {!clickOfTrueComma && <Comma className="cursor-pointer" onClick={() => setClickOfTrueComma(false)}/>}
                                <CustomInput className={cn({"bg-green-100 border-green-300": clickOfTrueComma})} value={5}/>
                            </>
                        }
                    </> : <></>
                }
            </div>

            {
                isVisible && !viewMultByColumn ? <div className="pl-16 pt-6">
                    <InfoBlock className={'bg-orange-200'}
                               label={"Нажми, <br /> запятая пропадет"}/>
                </div> : <></>
            }
            {
                viewResultCalc && <div className="flex justify-start pt-6 pl-14">
                    <InfoBlock className={"flex bg-orange-300"} label={"Сколько знаков <br /> после зяпятой"}/>
                    <div className="pt-2">
                        <CustomInput className={cn('border-sky-400 bg-sky-200', {"bg-green-100 border-green-300": numberOfSymbols})} trueNum={'3'} stateValue={setNumberOfSymbols}/>
                    </div>
                </div>
            }

            {
                clickOfTrueComma && <>
                    <div className="flex justify-end pr-6 pt-6">
                        <Img src={goodboy}/>
                    </div>
                </>
            }
        </div>
        {
            viewMultByColumn && !viewResultCalc ?
                <div className="flex flex-col">
                    <div className="flex justify-end pr-36 pt-4">
                        <CloseButton/>
                    </div>
                    <div className="flex flex-row pl-10">
                        <div>
                            <InfoBlock className={'bg-orange-300'} label={'Черновик'}/>
                        </div>
                        <div className="flex pl-10 pr-4">
                            <Multiply/>
                        </div>
                        <div className="flex flex-col">
                            <div className="flex space-x-3 pb-2">
                                <CustomInputForCount value={'2'}/>
                                <CustomInputForCount value={'7'}/>
                            </div>
                            <div className="flex space-x-3">
                                <CustomInputForCount value={'8'}/>
                                <CustomInputForCount value={'5'}/>
                            </div>
                            <div className="flex pb-2">
                                <Slash/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row pb-2">
                        <div className="flex pl-20">
                            <Plus/>
                            <div className="flex space-x-3 pl-20">
                                <CustomInputForCount trueNum={'1'}/>
                                <CustomInputForCount trueNum={'3'}/>
                                <CustomInputForCount trueNum={'5'}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex space-x-3 pl-28 ml-1">
                            <CustomInputForCount trueNum={'2'}/>
                            <CustomInputForCount trueNum={'1'}/>
                            <CustomInputForCount trueNum={'6'}/>
                        </div>
                    </div>
                    <div className="flex w-56 ml-28 pl-1 pb-2">
                        <Slash/>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex space-x-3 pl-28 ml-1">
                            <CustomInputForCount trueNum={'2'} stateValue={setCalcValueOne}/>
                            <CustomInputForCount trueNum={'2'} stateValue={setCalcValueOTwo}/>
                            <CustomInputForCount trueNum={'9'} stateValue={setCalcValueOThree}/>
                            <CustomInputForCount trueNum={'5'} stateValue={setCalcValueFour}/>
                        </div>
                    </div>
                </div>
                : <></>
        }
    </div>
}
export default EighthSimulator;