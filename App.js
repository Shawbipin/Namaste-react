
//  ***************** creating this with reactjs ****************


// <div className="parent">
//     <div className="child">
//         <h1>Hello World! h1</h1>
//         <h2>Hello World! h1</h2>
//     </div>
// </div>



const parent  =  react.createElement(
    "div",
    {id:"parent"},
    React.createElement("div", {id: "child"},[
     React.createElement("h1", "Hello World! h1") ,
     React.createElement("h2", "Hello World! h2") ,
    ])
)

console.log(parent);
const root = reactDOM.createRoot(document.getElementById("root"));
root.render(parent);



// const heading = react.createElement("h1" , {}, "hello from reactjs");
// const root = reactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


