const strings = {

    highE:{
        element:document.getElementById("highE"),
        audio:"assets/e(high).mp3"
    },

    B:{
        element:document.getElementById("B"),
        audio:"assets/B.mp3"
    },

    G:{
        element:document.getElementById("G"),
        audio:"assets/G.mp3"
    },

    D:{
        element:document.getElementById("D"),
        audio:"assets/D.mp3"
    },

    A:{
        element:document.getElementById("A"),
        audio:"assets/A.mp3"
    },

    lowE:{
        element:document.getElementById("lowE"),
        audio:"assets/E.mp3"
    }
};

Object.values(strings).forEach(string=>{

    let startY=null;

    string.element.addEventListener("pointerdown",(e)=>{

        startY=e.clientY;

    });

    string.element.addEventListener("pointerup",(e)=>{

        let distance=Math.abs(e.clientY-startY);

        if(distance<25){

            playString(string,2000);

        }else{

            playString(string,5000);

        }

    });

});

function playString(string,duration){

    const sound=new Audio(string.audio);

    sound.currentTime=0;
    sound.play();

    if(navigator.vibrate){

        navigator.vibrate(duration);
    }

    gsap.fromTo(
        string.element,

        {
            y:-8
        },

        {
            y:8,
            duration:0.05,
            repeat:duration/100,
            yoyo:true,
            ease:"power1.inOut"
        }
    );

}
