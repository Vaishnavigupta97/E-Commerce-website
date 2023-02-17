import { stockData } from "./data";

function Ecommerce() {
    const clickMe =() =>{
         document.getElementById("stock-container").style.display = "none";
         document.getElementById("container2").style.display = "block";
         document.getElementById("img3").style.display = "block";
        //  document.getElementById("img4").style.display = "block";
         document.getElementById("img3").style.width = "80%";
        //  document.getElementById("img4").style.width = "80%";
    }
    const hideImg = () =>{
        document.getElementById("stock-container").style.display = "flex";
        document.getElementById("container2").style.display = "none";
    }
    return (
        <>
            <h1>This is Ecommerce website</h1>
            <div >
                    <div id="stock-container">
                        {stockData.map((data, key) => {
                            return (
                                <div key={key} className="showCard">
                                    <div className="cards">
                                        {/* <p>card{data.id}</p> */}
                                        <div className="coverImage">
                                        <div className="img1" >
                                            <img src={data.img1} height= "200" />
                                        </div>
                                        <div className="img2">
                                            <img src={data.img2} height= "200"/>
                                        </div>
                                        </div>
                                        <p className = "price">Price : {data.money}</p>
                                        <p className = "size">Size : {data.size}</p>
                                    </div>
                                    <button className="click" onClick = {clickMe} >Click Here</button>
                                </div>
                            );
                        })}

                    </div>
                    <div id = "container2">
                    <button className="hide" onClick={hideImg}>X</button>
                    {stockData.map((data, key) => {
                            return (

                                <div key={key} className="showCard showImageFlex">
                                    {/* <div className="cards"> */}
                                        <div id="img3">
                                            <img src={data.img1} />
                                        </div>
                                        <div id="img4">
                                            <img src={data.img2} />
                                        </div>
                                     {/* </div> */}
                                </div>
                            );
                        })}
                    </div>
            </div>

            {/* <ECommChild /> */}
        </>
    )
}
export default Ecommerce;