const StatusBar = () => {
    return <div className="flex flex-col">
        <div className="flex pb-2">
            <div className="flex flex-col w-3/6">
                <span className="font-light">Тренажер / Арифметические действия с десятичными дробями.</span>
                <span className="flex justify-end pr-48 font-light">Умножение. Деление.</span>
            </div>
        </div>
        <div className="flex flex-row">
            <div className="rounded-3xl w-96 bg-white">
                <div className="flex flex-col p-4">
                    <div className="flex flex-row pb-2">
                        <span className="text-sky-400">Решено примеров</span>
                        <div className="flex justify-between pl-36">
                            <span className="text-sky-400 font-semibold">1 из 15</span>
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div className="bg-sky-400 h-3 rounded-full" style={{width: 45}}></div>
                    </div>
                </div>
            </div>
            <div className="pl-6 pt-3 ">
                <div className="flex flex-row">
                <span className="text-sky-400 text-xl font-semibold">Решено этапов в примере</span>
                    <div className="flex justify-between pl-10">
                        <span className="text-sky-400 text-xl font-semibold">0 из 5</span>
                    </div>
                </div>
            </div>
            <div className="flex pl-14">
                <button className="rounded-3xl w-52 bg-black text-white text-xl font-semibold">
                    <div className="flex flex-col">
                        <span>💡 Подсказка</span>
                    </div>
                </button>
            </div>
            <div className="flex pl-4">
                <button className="rounded-3xl w-80 bg-sky-400 text-white text-xl font-semibold">Следующий пример</button>
            </div>
        </div>
    </div>
}
export default StatusBar;