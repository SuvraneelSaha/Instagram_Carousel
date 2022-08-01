// we just want to switch the panel class automatically 
// we can do that in a manual way but it wont work 
const panels =document.querySelectorAll('.panel')

//console.log(panels[0]) // it will give out the array of all the panels 

panels.forEach( (panel) =>{
    //console.log(panel)
    panel.addEventListener('click',() =>{
        //console.log(123) --> for checking we use console.log
        
        remoActiveClasses()

        panel.classList.add('active') // if use only this then it will show all the classes 
        // ie all the pictures when clicked one by one 


    })

})

function remoActiveClasses()
{
    panels.forEach((panel) =>{
        panel.classList.remove('active')
    })
}