let sa = require("superagent");
let vars = require("./vars");

$(document).ready( () => {
  $(document).on('click', 'a[href^="#"]', function(e) {
      // target element id
      var id = $(this).attr('href');

      // target element
      var $id = $(id);
      if ($id.length === 0) {
          return;
      }

      // prevent standard hash navigation (avoid blinking in IE)
      e.preventDefault();

      // top position relative to the document
      var pos = $(id).offset().top;

      // animated top scrolling
      $('body, html').animate({scrollTop: pos});
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

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

    //POST to the dobot app
    sa.post('http://45.55.90.231/8921')
      .set('Content-Type', 'application/json')
      .send(JSON.stringify(dobot))
      .end( (err, res) => {
        console.log('error', err);
        console.log(res);
    });
  });
});
