

const synth = new Tone.Synth().toDestination();
var intro = document.getElementById("intro");

document.body.addEventListener('keydown', function(event){
    if(event.key == 'a')
    {
        synth.triggerAttackRelease("A4", "4n");
        document.getElementById("key1").style.backgroundColor = "orange";
    }

    else
    {
        document.getElementById("key1").style.backgroundColor = "white";
    }

    if(event.key == 'b')
    {
      synth.triggerAttackRelease("B4", "4n");
      document.getElementById("key2").style.backgroundColor = "cyan";
    }

    else{
        document.getElementById("key2").style.backgroundColor = "white";
    }
    if(event.key == 'c')
    {
      synth.triggerAttackRelease("C4", "4n");
      document.getElementById("key3").style.backgroundColor = "pink";
    }

    else
    {
        document.getElementById("key3").style.backgroundColor = "white";
    }

    if(event.key == 'd')
    {
      synth.triggerAttackRelease("D4", "4n");
      document.getElementById("key4").style.backgroundColor = "yellow";
     }
    else{
        document.getElementById("key4").style.backgroundColor = "white";
    }

    if(event.key == 'e')
    {
      synth.triggerAttackRelease("E4", "4n");
      document.getElementById("key5").style.backgroundColor = "#6495ED";
     }
    else{
        document.getElementById("key5").style.backgroundColor = "white";
    }

    if(event.key == 'f')
    {
      synth.triggerAttackRelease("F4", "4n");
      document.getElementById("key6").style.backgroundColor = "salmon";
     }
    else{
        document.getElementById("key6").style.backgroundColor = "white";
    }



    });

    document.getElementById("key1").style.backgroundColor = "white";
    document.getElementById("key2").style.backgroundColor = "white";
    document.getElementById("key3").style.backgroundColor = "white";
    document.getElementById("key4").style.backgroundColor = "white";
    document.getElementById("key5").style.backgroundColor = "white";
    document.getElementById("key6").style.backgroundColor = "white";

 