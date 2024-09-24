  let bulb = document.querySelector ("#bulb");
  let btn = document.querySelector ("button");

let flag = 0;
// @ts-ignore
btn.addEventListener("click", function () { 
     if (flag == 0) {
        // @ts-ignore
        bulb.style.backgroundColor = "yellow";
        console.log("on");
        flag = 1;
        
     } else {
        // @ts-ignore
        bulb.style.backgroundColor = "gray";
        console.log("off");
        flag = 0;
     }
        
});
