function startClassification()
{
   navigator.mediaDevices.getUserMedia({ audio: true});
   classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/90Q2s3uW5/model.json", modelReady);
}

function modelReady()
{
   classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }
    else
    {
       console.log(results);
       random_number_red = Math.floor(Math.random()*255)+1;
       random_number_blue = Math.floor(Math.random()*255)+1;
       random_number_green = Math.floor(Math.random()*255)+1;

       document.getElementById("result_label").innerHTML = "I can hear- "+results[0].label;
       document.getElementById("result_label").style.color= "rgb("+ random_number_red+","+ random_number_green+","+random_number_blue+")";
       document.getElementById("result_count").innerHTML = "Accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
       document.getElementById("result_count").style.color= "rgb("+ random_number_red+","+ random_number_green+","+random_number_blue+")";

        img = document.getElementById("animal_image");

        if (results[0].label == "Roring")
        {
           img.src = "lion.webp"; 
           lion= lion+1 
        }
        else if (results[0].label == "Meowing")
        {
           img.src = "cat.webp";
           cat= cat+1;
        }
        else if(results[0].label == "Roring")
        {
           img.src = "crocodile.webp";
           crocodile = crocodile + 1;
        }
        else 
        {
           img.src = "listen.gif";
        }
   }
}