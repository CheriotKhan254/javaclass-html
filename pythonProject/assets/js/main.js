
const javaclass=document.getElementById('colorButton');
//add event for the button click

javaclass.addEventListener('click',listener:()=>{
    //change color of the button
    javaclass.style.backgroundColor=javaclass.style.backgroundColor==='blue '?'#4CAF50':'blue';
})