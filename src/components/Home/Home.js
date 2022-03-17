import Banner from "../BannerHomePage/Banner";
import BannerTime from "../BannerHomePage/BannerTime";
import Header from "../Header/Header";
import SliderOne from "../HomeSliders/SliderOne";
import Search from '../SearchBar/Search';
import BestProductOne from '../BestProducts/BestProductOne';
import SliderTwo from "../HomeSliders/SliderTwo";
import CommentsAds from '../Ads/CommentsAds/CommentsAds';
import MenClothingCard from "../ProductsHomePage/MenClothing/MenClothingCard";
import WomenClothing from "../ProductsHomePage/WomenClothing/WomenClothing";
import Footer from "../Footer/Footer";

const Home = () => {
    return ( 
        <>
        <Header />
        <Search />
        <Banner />
        <BannerTime />
        <SliderOne />
        <BestProductOne />
        <SliderTwo />
        <CommentsAds />
        <MenClothingCard />
        <WomenClothing />
        <Footer />
        </>
     );
}
 
export default Home;