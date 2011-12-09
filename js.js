// Not sure if this web font script works
<script type="text/javascript">
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
  })(); </script>


jQuery(jQuery('#top-panel table td a img').first()).attr('src', "http://lodestone.github.com/jenkins-lodestone/jenkins.png")
