let st,crti,clti,sec,a,b;
let main = document.querySelector("#main"); 
let txt = document.querySelector("#txt");
let summa = document.querySelector("#summa");
main.addEventListener("click",fn);
function fn() {
    sec = Math.ceil(Math.random()*10)*1000;
    main.removeEventListener("click",fn);
    txt.innerHTML = "...";
    summa.innerHTML = "Wait for Green";
    main.style.backgroundColor = "coral";
    main.addEventListener("click",trla);
    st = setTimeout(blabla,sec);
}
function blabla(){
    main.removeEventListener("click",trla);
    main.addEventListener("click",fnn);
    crti = Date.now();
    summa.innerHTML = "Click!!";
    main.style.backgroundColor = "palegreen";
}
function fnn(){
    main.removeEventListener("click",fnn);
    clti = Date.now();
    txt.innerHTML = clti-crti+"ms";
    summa.innerHTML = "Click to try again";
    main.style.backgroundColor = "cadetblue";
    main.addEventListener("click",fn);
}
function trla(){
    clearTimeout(st);
        main.removeEventListener("click",trla);
        main.style.backgroundColor = "cadetblue";
        txt.innerHTML = "Too Soon";
        summa.innerHTML = "Click to try again";
        main.addEventListener("click",fn);
}