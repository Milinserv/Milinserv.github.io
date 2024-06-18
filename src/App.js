import Layout from "./components/Layout";
import Header from "./components/Header";

const App = () => {
    return (
        <div className="w-full h-screen bg-gray-100">
            <Header/>
            <div></div>
            <Layout/>
        </div>
    );
}

export default App;
