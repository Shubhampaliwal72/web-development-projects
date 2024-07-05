const textAreaEl = document.getElementById("textarea")
const totalcharacterEl = document.getElementById("total-character")
const RemainingcharacterEl = document.getElementById("Remaining-character")
// adding event listener here...

textAreaEl.addEventListener("keyup", ()=>{
   // console.log("key is pressed") it shows how no of times the key is pressed and count it 
   updateCounter()
})

function updateCounter(){
    totalcharacterEl.innerText = textAreaEl.value.length;
    RemainingcharacterEl.innerText = textAreaEl.getAttribute("maxLength")-textAreaEl.value.length;
}

