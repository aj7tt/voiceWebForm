
  function init() {
    // new speech recognition object
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      let speech = {
        enabled: true,
        listening: false,
        recognition: new window.SpeechRecognition(),
        text: ''
      }

      /* To allow to continously listen: */
      speech.recognition.continuous = true;
      /* To return interim results to a transcript area: */
      speech.recognition.interimResults = true;
      /* To set the language: */
      speech.recognition.lang = "en-US";
      speech.recognition.addEventListener('result', (event) => {
        const audio = event.results[event.results.length - 1];
        speech.text = audio[0].transcript;
        txt= speech.text
        if (txt.include("at the rate")){
          txt = txt.replace("at the rate", "@").split(' ').join('')
        }
        const tag = document.activeElement.nodeName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') {
          if (audio.isFinal) {
            document.activeElement.value += text;
          }
        }
        result.innerText = text;
        

      });



      //call function 
  
      // allow your microphone is being used or not
      toggle.addEventListener('click', () => {
        speech.listening = !speech.listening;
        if (speech.listening) {
          toggle.classList.add('listening');
          toggle.innerText = 'Listening ...';
          speech.recognition.start();
        }
        else {
          toggle.classList.remove('listening');
          toggle.innerText = 'Toggle listening';
          speech.recognition.stop();
        }
      })
    }
  }
  init();