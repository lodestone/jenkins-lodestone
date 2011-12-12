// Not sure if this web font script works
  WebFontConfig = {
    google: { families: [ 'Marmelad::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();


jQuery(function() {
  jQuery('img[alt="title"]').attr('src', "http://lodestone.github.com/jenkins-lodestone/jenkins.png");
  console.log("Loaded js.js");
});
