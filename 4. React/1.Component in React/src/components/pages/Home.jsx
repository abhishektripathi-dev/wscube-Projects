import "./Home.css";

function Home(){

    let a = 10;
    let b=20;

    let name = "WS Cube"

    return (
        //Html code
        <div className="productionSection">
            <h1>{name} {a+b} {"Hello"}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus hic impedit voluptate temporibus sunt. Quia veniam tenetur, harum nisi perspiciatis et est architecto. Ex animi cupiditate, quisquam dolore molestiae praesentium.</p>
        </div>
    )
}

export {Home};