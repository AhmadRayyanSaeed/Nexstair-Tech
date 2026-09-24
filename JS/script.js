const questions = document.querySelectorAll(".se5_faq_questions");
questions.forEach(function(question){
    question.addEventListener("click", function(){
        const answer= question.nextElementSibling;
        const icon= question.querySelector("span");
        
        // close all other answers
        questions.forEach(function(otherQuestion){
            const otherAnswers = otherQuestion.nextElementSibling;
            const otherIcon = otherQuestion.querySelector("span");
            if (otherQuestion !== question){
                otherAnswers.classList.remove("active");
                otherQuestion.classList.remove("active");
                otherIcon.textContent = "+";
            }
        });
          // Open / close clicked answer

        if(answer.classList.contains("active")){
            answer.classList.remove("active");
             question.classList.remove("active"); 
            icon.textContent = "+";
        }
        else{
            answer.classList.add("active");
            question.classList.add("active");
            icon.textContent = "-";
        }
    });
});