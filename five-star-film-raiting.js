<script>
    
    var validateMovie = false
    var validateRating = false
    
    // CODE FOR FORM \\
    
     function checkForm(e)
    {
        var valid = true;
        
    // CODE FOR NAME \\
        document.getElementById("name").parentNode.removeAttribute("class");
            
            if (document.getElementById("name").value == "")
                
                {
                    document.getElementById("name").parentNode.setAttribute("class", "error");
                    
              //      errormsg += "\tadd an name\n\n"; 
                    
                    valid= false;
                }
        
    // CODE FOR EMAIL \\    
        document.getElementById("email").parentNode.removeAttribute("class");
        
            if (document.getElementById("email").value == "")
                {
                    document.getElementById("email").parentNode.setAttribute("class", "error");
                    
                   // errormsg += "\tadd an address\n\n"; 
                    
                    valid= false;
                }
        
      // CODE FOR SIX DIGIT CODE \\
        document.getElementById("code").parentNode.removeAttribute("class");
        
            if (/\d{6}/.test(document.getElementById("code").value) == false)
                {
                    document.getElementById("code").parentNode.setAttribute("class", "error");
                    
                 //   errormsg += "\tadd an CODE\n\n"; 
                    
                    valid= false;
                }

       
        // MOVIE \\
        
        if ( validateMovie == false){
            
            valid = false;
            
          window.alert("Select Movie")
            
        }
    // RATING \\
        if (validateRating == false){
            
            valid = false;
            
         window.alert("Choose Rating")
        }    
    
                
        if (!valid) e.preventDefault();
    }
    window.addEventListener('load', init);
    function init() 
    {
        document.getElementById("myform").addEventListener('submit',checkForm)
    }
    
    // CODE FOR MOVIES \\
    
    function showAnswer(){
        
        
        document.getElementById("movieSelect").value = "Austin Powers 1";
        document.getElementById("first").style.opacity="0.5";
        document.getElementById("second").style.opacity="1";
        document.getElementById("third").style.opacity="1";
        document.getElementById("fourth").style.opacity="1";
    }
    function showAnswer1(){
        
        
        document.getElementById("movieSelect").value = "Austin Powers 2";
        document.getElementById("second").style.opacity="0.5";
        document.getElementById("first").style.opacity="1";
        document.getElementById("third").style.opacity="1";
        document.getElementById("fourth").style.opacity="1";
        
    }
    function showAnswer2(){
        
        
        document.getElementById("movieSelect").value = "Austin Powers 3";
        document.getElementById("third").style.opacity="0.5";
        document.getElementById("second").style.opacity="1";
        document.getElementById("first").style.opacity="1";
        document.getElementById("fourth").style.opacity="1";
        
    }
    function showAnswer3(){
        
        
        document.getElementById("movieSelect").value = "Fake Austin Powers";
        document.getElementById("fourth").style.opacity="0.5";
        document.getElementById("second").style.opacity="1";
        document.getElementById("third").style.opacity="1";
        document.getElementById("first").style.opacity="1";
        
    }
    
    
    
    </script>
