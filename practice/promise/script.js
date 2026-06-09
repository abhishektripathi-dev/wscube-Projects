const h1El = document.querySelector("h1")
// fetch("https://dummyjson.com/products")
// .then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })

function display(data){
    console.log(data);
}

async function result() {
    try {
        let response = await fetch("https://dummyjson.com/products");
        let data =await response.json()

        display(data.products)
        // console.log(data.products);
    } catch (error) {
        console.log(error);
    }
}

result();

// promiseExample
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });
