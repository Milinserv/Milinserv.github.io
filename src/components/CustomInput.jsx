const CustomInput = ({value}) => {
    return <>
        <input type="text" maxLength="1"
               className="block w-16 h-16 text-xl font-semibold text-center text-gray-900 bg-white border
               border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
               value={value}
               required/>
    </>
}
export default CustomInput;