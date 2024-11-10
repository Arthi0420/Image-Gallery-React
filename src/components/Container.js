import one from "../assets/images/i1.jpeg"
import two from "../assets/images/i2.jpeg"
import three from "../assets/images/i3.jpeg"
import four from "../assets/images/i4.jpeg"
import five from "../assets/images/i5.jpeg"
import six from "../assets/images/i6.jpeg"
import seven from "../assets/images/i7.jpeg"
import eight from "../assets/images/i9.jpeg"


function Container() {
    return (
        <div class="container">

            <div class="img-container">
                <img src={one} alt="images"></img>

            </div>

            <div class="img-container">
                <img src={two} alt="images"></img>
            </div>

            <div class="img-container">
                <img src={three} alt="images"></img>
            </div>

            <div class="img-container">
                <img src={four} alt="images"></img>
            </div>

            <div class="img-container">
                <img src={five} alt="images"></img>
            </div>

            <div class="img-container">
                <img src={six} alt="images"></img>
            </div>

            <div class="img-container">
                <img src={seven} alt="images"></img>
            </div>

            <div class="img-container">
                <img src={eight} alt="images"></img>
            </div>


        </div>
    )
}

export default Container