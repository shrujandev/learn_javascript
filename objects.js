//Method 1
// var Item = new Object()
// Item.name = "Hide and Seek"
// Item.price= 10
// Item.qty = 100

// document.write("<h1>",Item["name"]," ",Item.name," ",Item.price)

//Method 2
function products(nam,pe,qt)
{
    this.name = nam
    this.price = pe
    this.qty = qt
}

var Item=new products("Monaco",10,200)

document.write("<h1>",Item["name"]," ",Item.name," ",Item.price)