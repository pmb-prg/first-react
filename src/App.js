import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Logos from "./components/Logos";
import Footer from "./components/Footer";
class App extends React.Component {

    render(){
        return (
            <>
                <NavBar />
                <Banner />
                <Cards />
                <Search />
                <Logos />
                <Footer />
            </>
        )
    }
}

export default App;