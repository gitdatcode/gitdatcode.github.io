let sa = require("superagent");
let vars = require("./vars");

$(document).ready( () => {
  
  //create object for POST to dobot
  let dobot = {
    'event': {
      'type': "signup"
    }
  };

  let subscribe_button = document.getElementById("mc-embedded-subscribe");

  subscribe_button.addEventListener( 'click', () => {
    //get the dobot values from the form
    dobot.event.first_name = document.getElementById("mce-FNAME").value;
    dobot.event.last_name = document.getElementById("mce-LNAME").value;
    dobot.event.email = document.getElementById("mce-EMAIL").value;
    dobot.event.social = document.getElementById('mce-SOCIAL').value;
    //POST to the dobot app
    sa.post('http://45.55.90.231:8921')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(dobot))
      .end( (err, res) => {
        console.log('error', err);
        console.log(res);
    });
  });
});
