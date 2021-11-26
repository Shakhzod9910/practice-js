let userInput = [12.3, 32.3, -3.2, 5.4]

function Normalize (norm){
    let normalize =[]
    for(var norms of norm){
        if(norms < 0){
            normalize.push(Math.round(norms * -1))
        }else{
            normalize.push(Math.round(norms))
        }
    }
    return normalize;
}
console.log(Normalize(userInput));

form.addEventListener('submit' , function(evt){
    evt.preventDefault();
    // Number(input.value);
    if(input.value < 0 || isNaN(input.value)){
        input.style.border='2px solid red'
        return;
    }else{
    let newLi = document.createElement('li');
    let newbtn = document.createElement('button')
    newbtn.textContent = ('x')
    newLi.setAttribute('class' , 'list-item') 
    input.style.border='2px solid green'
    newLi.textContent = input.value.trim()
    newLi.appendChild(newbtn)
    output.appendChild(newLi)
    input.value = null
    }

})

// newbtn.addEventListener('submit' , function(evt){
//     evt.preventDefault();
//     newLi =null
// })

