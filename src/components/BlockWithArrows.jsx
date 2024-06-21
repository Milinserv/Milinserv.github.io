import cn from "classnames";

const BlockWithArrows = ({label, className, classNameSkewLeft, classNameSkewRight}) => {
    return <>
        <div className="flex justify-center">
            <div className="flex flex-col">
                <div className={cn(className, "flex rounded-2xl py-4 bg-orange-300 items-center justify-center")}>
                    <span className="font-medium">{label}</span>
                </div>
                <div className="flex pt-14 justify-center">
                    <div className={cn(classNameSkewLeft)}>
                        <div className="skew-down"></div>
                    </div>
                    <div className={cn(classNameSkewRight)}>
                        <div className="skew-down-r"></div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default BlockWithArrows;