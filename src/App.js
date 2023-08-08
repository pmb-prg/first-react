import React from "react";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Search from "./components/Search";
class App extends React.Component {

    render(){
        return (
            <>
                <NavBar />
                <Banner />
                <Cards />
                <Search />
            </>
        )
    }
}

export default App;