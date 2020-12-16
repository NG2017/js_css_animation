function pageLoad() {

    let rootDiv = document.getElementById("root");

    //  tombbe (myObjects) 2 objekum, első kulcs tag, második content, 

    let myObjects = [
        {
            tag: "h1",
            content: "Nagy Gábor"
        },
        {
            tag: "p",
            content: "Frontend developer"
        }
    ];

    console.log(myObjects[0]);
    console.log(myObjects[1]);

    // roothoz olyan dolgot, amiben a tagen belül van a content
    //let netTag;

    for (myObject of myObjects) {
        console.log(myObject);
        console.log(myObject.tag);

         rootDiv.insertAdjacentHTML("beforeend", `
        <${myObject.tag}>${myObject.content}</${myObject.tag}>
        `);
      

/*         let newTag = document.createElement(myObject.tag);
        newTag.innerHTML = myObject.content;
        rootDiv.appendChild(newTag); */

    }

    // mindket tag position fixed top left 50%, transform -50-50%
    //p legvékonyabb font, legvastagabbját h1-re
    //48 px
    //szinparositas nem lehet szoveges

    rootDiv.addEventListener("click", function() {

        rootDiv.classList.toggle("clicked");


    });





}
window.addEventListener("load", pageLoad);