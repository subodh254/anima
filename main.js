function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
   classifier = ml5.soundclassifier("https://teachablemachine.withgoogle.com/models/kfPPASBQA/.json",modelReady);

}


function modelReady(){
    classifier.classify(gotresult);
}

var DOG = ("0");
var  Cat = ("0");
;

function gotresult(error,results)

{
 
    if(error)
{
    console.error();
}else{
    console.log(results);
    random_number_r   =   Math.floor(Math.random() * 255) + 1;
    random_number_g   =   Math.floor(Math.random() * 255) + 1;
    random_number_b   =   Math.floor(Math.random() * 255) + 1;

    document.getElementById("numbers_of_time").innerHTML  = 'i can hear -'+ results[0].label;
    document.getElementById("name_of_animal").innerHTML = 'accuracy - '+ (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("numbers_of_time").style.color = "rgb("+random_number_r+";"+random_number_g+";"+random_number_r+")";
    document.getElementById("name_of_animal").style.color = "rgb("+random_number_r+";"+random_number_g+";"+random_number_r+")";

  img = document.getElementById("bob")
  img1 = document.getElementById("oggy")


  if(results[0].label == DOG)
  {
      img.src = "oggy-bob.gif"
  } else if(result[0].label == cat)  
  {
img1.src ="content_image_600d46a9b02.gif"
  }
} 




}

