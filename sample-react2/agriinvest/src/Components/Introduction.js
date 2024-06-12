import intro from "./Images/intro.jpeg"
const Introduction = () => {
    return ( 
        <div className="intro-container">
            <div className="left">
                <p>Welcome to Agri-Invest, <br /> the best agricultural e-marketing <br /> platform in Africa.</p>
            </div>
            <div className="right">
                <img src={ intro } alt="intro" srcset="" />
            </div>
        </div>
     );
}
 
export default Introduction;