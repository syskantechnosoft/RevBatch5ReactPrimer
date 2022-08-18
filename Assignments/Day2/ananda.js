function spouseField(){
    let married = document.getElementById("married");
    let spouseName = document.getElementById("spouseName");
    spouseName.style.display = married.checked ? "block" : "none"; 
}