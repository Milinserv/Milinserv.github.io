import StatusBar from "./StatusBar";
import GameField from "./GameField";

const Layout = () => {
    return <div className="mx-auto h-4/6 pt-10" style={{maxWidth: "85rem", height: "75%"}}>
        <div className="w-full">
            <StatusBar/>
        </div>
        <div className="h-full">
            <GameField/>
        </div>
    </div>
}
export default Layout