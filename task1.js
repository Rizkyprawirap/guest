
function main(){
    
    var number = [];

    for (var i = 1; i <= 5 ; i++) { 
        var temp = []
        for (var j = 1; j <= 5; j++){
            temp.push(i*j);
        }

        number.push(temp)
    }

    console.log(number);

}

main();