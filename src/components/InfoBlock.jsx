import cn from "classnames";

const InfoBlock = ({label, className}) => {
    return <>
        <div className="flex justify-center pr-8">
            <div className={cn(className, "rounded-2xl")}>
                <p className="flex py-4 px-2 font-medium text-center" dangerouslySetInnerHTML={{ __html: label }}></p>
            </div>
        </div>
    </>
}
export default InfoBlock;