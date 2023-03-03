let result = document.getElementById("main")


async function searchDb(searchText){

   const res = await fetch(`http://localhost:5000/search?q=${searchText}`);

    const data = await res.json();

    data.forEach(ele => {


        let newDiv = document.createElement("div");

        newDiv.setAttribute("id","main-div");

       newDiv.textContent = ele.name;

       result.append(newDiv);




        
    });

   
}





const searchInput=document.getElementById("userinput");
console.log("this is js file");



searchInput.addEventListener('keyup',()=>{
    let searchText=searchInput.value;// not a fxn
    if(searchText.length!=0)
    searchDb(searchText);
    
});