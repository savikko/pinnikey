
Pinnikey = {
  speak: function(text, tl, domain) {
    var html, src;
    domain = domain || 'com';
    tl = tl || Session.get('tl') || 'en';
    src = 'http://translate.google.' + domain + '/translate_tts?tl=' + tl + '&q=' + text + '';
    $('#tts').remove();
    html = '<iframe id="tts" style="display:none;" src="' + src + '" />';
    return $('body').append(html);
  },
  phonetic: function(letters) {
    var _phonetic = '';
	var alphabets = new Array("Alpha","Bravo","Charlie","Delta","Echo","Foxtrot","Golf","Hotel","India","Juliet","Kilo","Lima","Mike","November","Oscar","Papa","Quebec","Romeo","Sierra","Tango","Uniform","Victor","Whiskey","X-Ray","Yankee","Zulu");

    for (var i = 0, len = letters.length; i < len; i++) {
	    var letter = letters[i].toUpperCase();      
	    var whatChar = letter.charCodeAt(0);
      	if ((whatChar > 64)&&(whatChar < 91)) {
          phoneticletter = whatChar-65;        
          _phonetic = _phonetic + ' ' + alphabets[phoneticletter];
     	} else
       _phonetic = _phonetic + ' ' + phoneticletter;
    };
    return _phonetic + ' ';
  }
};