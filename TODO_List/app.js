let btn=document.querySelector('button');
let ul=document.querySelector('ul');
let inp=document.querySelector('input');


btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    ul.appendChild(item);
    console.log(inp.value);

    let done=document.createElement("button");
    done.innerText="Done";
    done.classList.add("done");
    item.appendChild(done);
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("Deleted");
    }
});

// let del=document.querySelectorAll(".done");
// for(d of del){
//     del.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }