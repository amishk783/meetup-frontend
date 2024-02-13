import { Fragment } from "react";
import Footer from "../components/common/Footer/Footer"
import Header from "../components/common/Header/Header";
import Body from "../components/Body/index";

const Home = () => {
    return (
        <Fragment>
            <Header />
            <Body />
            <Footer/>
        </Fragment>
    
    );
}

export default Home;