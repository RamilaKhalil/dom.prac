 var bulb = document.querySelector ("#bulb");
 var btn = document.querySelector ("button");

// @ts-ignore
btn.addEventListener("click", function () { 
        // @ts-ignore
        bulb.style.backgroundColor = "yellow";
});
