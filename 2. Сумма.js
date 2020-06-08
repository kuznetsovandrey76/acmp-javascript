const fs = require("fs");
 
fs.readFile("input.txt", "utf8", 
    function(error, data){
        if (error) throw error; 

        // INPUT
        // 5

        // UPDATE
        let result = 0
        for (let i = 1; i <= parseInt(data); i++) {
            result += i;
        }
        console.log(result);  
});