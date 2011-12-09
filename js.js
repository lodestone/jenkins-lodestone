// Not sure if this web font script works
<script type="text/javascript">
  WebFontConfig = {
    google: { families: [ 'Baumans::latin' ] }
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

j = jQuery.noConflict();

j('body').css({background: '#efffcc'});
