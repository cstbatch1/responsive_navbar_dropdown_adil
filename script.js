function showSideBar(){
    let sidebar= document.querySelector(".sidebar");
    sidebar.style.display="flex"
    

}
function hideSideBar(){
    let sidebar= document.querySelector(".sidebar");
    sidebar.style.display="none"
    

}


function handelResize(){
    const sidebar=document.querySelector(".sidebar");
    if(window.innerWidth>660){
        sidebar.style.display="none";
    }
    else{
        sidebar.style.display="flex";

    }
}

window.addEventListener("resize",handelResize)
