
//get the button element

const javaclass:HTMLElement=Document.getElementById(elementId:'colorButton');
//add event listeners




javaclass.addEventListener(type:'click',listener:() :void=>{
    //change the color of the button
    javaclass.style.backgroundColor=javaclass.style.backgroundColor==='red'?'#4CAF50':'red';
})