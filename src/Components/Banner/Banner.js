import Carrossel from "../Carousel/Carousel";
import "./Banner.css"

const Banner = () => {
    return (<div>

        <div className="banner-bg">
            <Carrossel/>
                <div className="box" >
                <h1>FARAWAY</h1>
                <p>TECNOLOGIA</p>
            </div>

        </div>


    </div>);
}

export default Banner;