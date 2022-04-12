var riddlerlaugh = new Audio("../../sfx/riddlerlaugh.wav");


console.log("test");


var resp = riddlerlaugh.play();

if (resp!== undefined) {
    resp.then(_ => {
        // autoplay starts!
    }).catch(error => {
       //show error
    });
}
