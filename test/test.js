function test(){
    $.ajax({
        
                method: "GET",
                url: "https://forex.1forge.com/1.0.3/quotes?pairs=EURUSD,GBPJPY,GBPUSD,AUDUSD&api_key=Cvl6CxDfOrhiLJIg8AcIWVSqD1SyQ08s" 
            }).then((data) => {vizion(data), console.log(data)})  
}
 
function vizion(data){
    $("#eurusd").text('EURUSD = '+data[0].price)
    $("#gbpjpy").text('GBPJPY = '+data[1].price)
    $("#gbpusd").text('GBPUSD = '+data[2].price)
}

function vreme(){ 
     setInterval(function(){time(), test()
    }, 5000)
      
}

function time(){
    let date = new Date().toLocaleTimeString()
    $("#timer").text(date)
}