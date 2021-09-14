function init(){
    id1=document.getElementsByTagName("progress")
    a1=document.getElementsByTagName("audio")
    b3=document.querySelector("#mute")
    b3.addEventListener("click",muteit)




    // id1[0].value=0;
    // while(i <=100)
    // {
    //     id1[0].value=i;
    //     i=i+0.01;
    // }
        
}

// function reducevol(){
//     id1[0].value=a.volume;
//     if(a1.volume == 0)
//      alert("volume is at minimum")
//     else    
//         a1.volume = a1.volume-0.1;   
    
// }

function muteit()
{
    alert("This works")
    if (a1.muted)
        a1.muted = false
    else 
        a1.muted =true    
}