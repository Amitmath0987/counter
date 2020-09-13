let count = 0;
const value = document.querySelector('.value');

const btn = document.querySelectorAll('.btn');
console.log(btn);

btn.forEach((btn) => {
btn.addEventListener('click',(e) => {
    const style = e.currentTarget.classList;
    if(style.contains('decrease')){
        
        count --;
   
    }else if(style.contains('increase')){
        count++;
    }
    else{
        count = 0;
    }
    value.innerHTML = count;
    if(count < 0){
        value.style.color = 'red'
    }
    if(count > 0){
        value.style.color = 'green'
    }
    if(count === 0){
        value.style.color = 'white'
    }
    
});

});



