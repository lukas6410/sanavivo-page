import React from 'react';
import './Home.scss';

import Header from "../../component/header/Header";
import HomeCardList from "../../component/HomeCardList/HomeCardList";
import CardItem from "../../component/CardItem/CardItem";
import Footer from "../../component/footer/Footer";
function Home() {
    return (
        <div>
            <Header></Header>
            <div id={"presentation"}>
                <h1>Explorez une collection de recettes de produits ménagers<br/>et cosmétiques naturels faits maison</h1>
                <button>Explorer</button>
            </div>
            <div id={"cosmetiques"}>
                <h2>Produits Cosmétiques</h2>
                <HomeCardList/>
            </div>
            <div id={"menager"}>
                <h2>Produits Ménager</h2>
                <HomeCardList/>
            </div>
            <Footer/>
        </div>
    );
}
export default Home;