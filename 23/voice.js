const msg = new SpeechSynthesisUtterance(),
    voicesdropdown = document.querySelector('#voices'),
    options = document.querySelectorAll('[type="range"], [name="text"]'),
    speakButton = document.querySelector('#speak'),
    stopButton = document.querySelector('#stop')

let voices = []

msg.text = document.querySelector('[name="text"]').value

speechSynthesis.addEventListener('voiceschanged', function(e) {
    voices = this.getVoices()
    voicesdropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`).join()
})

voicesdropdown.addEventListener('change', function(e) {
    msg.voice = voices.find(voice => voice.name === this.value)
    speak()
})

speakButton.addEventListener('mouseup', speak)
stopButton.addEventListener('mouseup', e => speak(false))
function speak(start=true) {
    speechSynthesis.cancel()
    if (start) speechSynthesis.speak(msg)
}

options.forEach(option => option.addEventListener('change', setOption))
function setOption() {
    msg[this.name] = this.value
    speak()
}
