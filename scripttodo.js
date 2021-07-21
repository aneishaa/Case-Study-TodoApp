
        document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
        function fetchUserData(){
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(response => response.json())
                .then(todos => {
                    let output = '<h2>Lists of Todos</h2>';
                    output += '<ul>';
                    todos.forEach(function(todo) {
                        if(todo.completed==true){
                            output += `
                            <li>
                            <input disabled type="checkbox" id="accept"  class = "myCheckBox" checked>
                                ${todo.title} 
                            </li>
                        `;

                        }
                        else {
                            output += `
                            <li>
                            <input  type="checkbox" id="accept"  class = "myCheckBox">
                                ${todo.title} 
                            </li>
                        `;
                        }
                       
                      
                    })
                    output += '</ul>'
                    document.getElementById("response").innerHTML = output;

                })
                 


        }

        function validate(){
            var checkBoxes = document.getElementsByClassName( 'myCheckBox' );
            var nbChecked = 0;
           
            for (var i = 0; i < checkBoxes.length; i++) {
                console.log(checkBoxes[i].checked)
                if ( checkBoxes[i].checked&& checkBoxes[i].disabled == false) {

                    // if(checkBoxes[i].disabled == false){
                        nbChecked= nbChecked+1
                        
                    // }
                   
                    
                };
            };
            var promise = new Promise(function(resolve, reject){
                if ( nbChecked== 5 ) {
                    resolve("Congrats. 5 Tasks have been Successfully Completed");

                }
                else{
                    reject("Please, check  Only 5 tasks to be selected");
                }
            });

            promise.then(function(s){
                alert(s)
            })
            .catch(function(e){
                alert(e)
            
            })


            // if ( nbChecked== 5 ) {
            //     alert( 'Congrats. 5 Tasks have been Successfully Completed ' );
            //     return false;
            // } else if(nbChecked != 5){
            //    alert( 'Please, check  5 tasks are required' );
            //    return false;
            // }else{
            //    return true;
            // }
        }
