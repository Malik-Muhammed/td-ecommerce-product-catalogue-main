// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================
const link = document.querySelector(".link");
const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", ()=>{

    if (link.style.right === "-100%"){
        link.style.right= "0";
    } 
    
    else {
        link.style.right = "-100%";
    }



})




// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================
const tabSet = document.querySelector(".tabset")
const productTab = document.querySelectorAll('[name="tabset"]');
const allProducts = document.querySelectorAll(".catalogue");
const tag = document.querySelectorAll(".tag")


const error = document.createElement("div");
const cardsContainer = document.querySelector(".card_row");
cardsContainer.appendChild(error)





productTab.forEach(item=>{
    item.addEventListener("change",(e)=>{

        switch(e.target.id){
            case "tab1":

            tag.forEach(item=>{
                item.parentNode.parentNode.parentNode.style.display = "block"
                error.classList.add("error-style");
            })  
            break;

            case "tab2":
            tag.forEach(item=>{
                if(item.innerText ===  "Male"){

                    item.parentNode.parentNode.parentNode.style.display ="block";
                    error.classList.add("error-style");
                }

                else{

                    item.parentNode.parentNode.parentNode.style.display = "none" 
                }
            })
            break;

            case "tab3":
            tag.forEach(item=>{
                if(item.innerText ===  "Female"){

                    item.parentNode.parentNode.parentNode.style.display ="block";
                    error.classList.add("error-style");
                }

                else{

                    item.parentNode.parentNode.parentNode.style.display = "none" 
                }
            })
            break;

            case "tab4":
            tag.forEach(item=>{
                if(item.innerText ===  "Babies"){

                    item.parentNode.parentNode.parentNode.style.display ="block";
                }

                else{

                    item.parentNode.parentNode.parentNode.style.display = "none"
                    error.classList.remove("error-style");
                    error.textContent ="Babies items not available for now"
                    error.style.cssText =  "background-color:rgb(194 112 112); border-radius: 8px; width:100%; height: 64px; padding: 12px 0 23px 16px;  margin: 16px 0;" 
                    
                }
            })
            break;

        }

      
    })

        
})

// ==================================
// 2. Display products based on 
// search keywords in the input fields.
// ==================================
const search = document.querySelector(".search_product");
let timer;

search.addEventListener("keyup", (e)=> {
  // Clears any outstanding timer

    clearTimeout(timer);
  // Sets new timer that may or may not get cleared
    timer = setTimeout(() => {

        const productTitles = document.querySelectorAll(".discount + p");
        error.classList.add("error-style")
    
        for (let title of productTitles) {
        title.parentNode.parentNode.style.display = title.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? 'block'
            : "none";
                
        }

        let children = cardsContainer.children
        let childrenArr = [...children]
    
        const styleMode =(child)=>{
            return child.style.display === "block"
        }

        let result = childrenArr.some(styleMode);
        console.log(result)

        if(childrenArr.some(styleMode)===true){
            error.classList.add("error-style")
        }

        else{
            error.classList.remove("error-style")
            error.innerHTML= `<h3>No results for "${e.target.value}".</h3>
            <p>Try checking your spelling or use more general terms</p>`  
        }
   
 

    }, 1000);
});
