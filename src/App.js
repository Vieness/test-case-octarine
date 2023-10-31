import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import MainAd from "./components/mainAd/MainAd";
import Trending from "./components/trending/Trending";
import Genres from "./components/genres/Genres";
import Actors from "./components/actors/Actors";
import Premiere from "./components/premiere/Premiere";
import Registration from "./components/registration/Registration";

function App() {
    return (
        <>
            <Header/>
            <MainAd/>
            <Trending/>
            <Genres/>
            <Actors/>
            <Premiere/>
            <Registration/>
            <Footer/>
        </>
    );
}

export default App;
