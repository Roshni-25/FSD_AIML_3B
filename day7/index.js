// const div=document.getElementById("root")
// const h1= document.createElement("h1");
// h1.innerText = "welcome to the FSD class";
// div.appendChild(h1);


{/* <div className = "div-1">
    <span>1</span>
    <span>2</span>
</div> */}
// const h1 = React.createElement("h1",{},"Welcome to the FSD class");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);


const root = ReactDOM.createRoot(document.getElementById("root"));
const div = [React.createElement("div",{className:"div-1"},[React.createElement("span",{},"1"),React.createElement("span",{},"2")]),
React.createElement("div",{className:"div-1"},[React.createElement("span",{},"1"),React.createElement("span",{},"2")])];
root.render(div);