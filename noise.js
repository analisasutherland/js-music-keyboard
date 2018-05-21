$(document).ready( function() {
  $('button').click( function(event) {
    let note = this.innerHTML;
    console.log(note);

    let audioID = note + "Audio";
    console.log(audioID);

    document.getElementById(audioID).play();
  });

  $('button').keydown( function(event) {
    let key = event.key;
    let audioID = key + "Audio";
    if (document.getElementById(audioID) !== null) {
      console.log(audioID);
      document.getElementById(audioID).play();
    }
  });
});
