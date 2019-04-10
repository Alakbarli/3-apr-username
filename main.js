"use strict";
const userinput=document.querySelector(".username")
const main_menu=document.querySelector(".main-menu")
const btn_clear=document.querySelector(".btn-clear")


userinput.onkeyup=function(a){
    const entered=userinput.value.trim();
    if(a.keyCode==13){
        if(entered.length>0) {
           const find_li=Array.from(main_menu.children).find(function(li){
           return li.innerText===entered

        })
        
        if(find_li !==undefined){
            //userinput.value="";

        userinput.nextElementSibling.classList.remove("d-none")
        
        
        return }
        

        userinput.nextElementSibling.classList.add("d-none")
        const list=document.createElement("li")
        list.className="list-group-item d-flex justify-content-between align-items-center";
        list.innerText=entered;
        main_menu.appendChild(list);
        main_menu.insertBefore(list,main_menu.childNodes[0])
        
        const icon=document.createElement("i")
        icon.className="fas fa-trash-alt"
        list.appendChild(icon)
        icon.style.cursor="pointer"
        icon.onclick=function(){
            //main_menu.innerHTML=""
           // main_menu.remove()
           this.parentElement.remove()
        }
        

        userinput.value=""}
        userinput.value=""
    }
    else if(a.keyCode==27){
        userinput.value=""
    }
    else{
        userinput.nextElementSibling.classList.add("d-none")

        const find_li=Array.from(main_menu.children).find(function(li){
           return li.innerText===entered

        })
        
        if(find_li !==undefined){

        userinput.nextElementSibling.classList.remove("d-none")}
        
        
        
    }
}

btn_clear.onclick=function(){
    //main_menu.innerHTML=""
    main_menu.innerHTML=""
//    main_menu.Child.remove()
}

// icon.onclick=function(){
//     //main_menu.innerHTML=""
//    // main_menu.remove()
//    this.remove()
// }


