const h1 = document.querySelector('.one')
const h2 = document.querySelector('.two')
const h3 = document.querySelector('.three')

const btn = document.querySelector('.btn')

btn.addEventListener('click',() => {
 addColor(1000, h1, 'red')
 .then(()=>{addColor(2000, h2, 'blue')})
 .then(()=>{addColor(1000, h3, 'green')})
 .catch((err)=>{console.log(err)})

})

function addColor(time, element, color){
 return new Promise((resolve,reject)=>{
   if(element){
    setTimeout(()=>{
     element.style.color = color;
     resolve();
    },time)
   }else {
     reject(new Error(`There is no element ${element}`))
   }
 })
}