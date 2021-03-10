class Form{
    constructor(){

    }

display(){

    var title=createElement('h2')
    title.html("SpEeD mAsTeRs")
    title.position(190,100)

    var input=createInput("name")
    input.position(250,250)
    
    var button=createButton('wee')
    button.position(250,350)
    var greet=createElement('h3')
    button.mousePressed(function(){
    input.hide()
    button.hide()
     var name=input.value()
    playerCount=playerCount+1
   player.update(name)
   player.updateCount(playerCount)
   greet.html("wassup!!!!!"+name)
  greet.position(150,200)

    })






}








}