//recursive version

function countDown(num){

    if(num <= 0){
        console.log('done')
        return; 
    }
    console.log(num)
    num--
    countDown(num)

}


//loop version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i)
    }
}

countDown(5)