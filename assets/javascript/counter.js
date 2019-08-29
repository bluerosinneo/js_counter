
// self invoking function to help with scope
(function(){
    // code that runs when the page is fully loaded
    window.onload = function(){



        // getting document information
        let decrementButton = document.querySelector("#decrement");
        let incrementButton = document.querySelector("#increment");
        let counter = document.querySelector("#counter");

        // event listenter
        incrementButton.addEventListener("click", function(){
            console.log("+ was clicked");

            //calculate new counter
            let newCounterValue = parseInt(counter.innerHTML) + 1;

            // if the counter >= 10 make things go red
            if(newCounterValue == 10){
                counter.style.color = "red";
            }

            // update the counter
            counter.innerHTML = newCounterValue;
        });

        decrementButton.addEventListener("click", function(){
            console.log("- was clicked");

            //calculate new coutner
            let newCoutnerValue = parseInt(counter.innerHTML) - 1;
            // update coutner
            if(newCoutnerValue >= 0){
                counter.innerHTML = newCoutnerValue;
                if(newCoutnerValue == 9){
                    counter.style.color = "black";
                }
            }

        });



    }
})();