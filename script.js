const speakBtn = document.querySelector("i")
const text = document.querySelector('.details p')
const textArea = document.querySelector("#text-feild")

// speach API
const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognitions = new speechRecognition();

speakBtn.onclick = ()=>{
    if(speakBtn.classList.contains("fa-microphone-lines")){
        recognitions.start();
    }else{
        recognitions.stop()
    }

    recognitions.continuous = true

    recognitions.addEventListener("start", ()=>{
        textArea.textContent = ""
        speakBtn.classList.remove("fa-microphone-lines")
        speakBtn.classList.add("fa-microphone-lines-slash")
        text.textContent = "Now recording..."
    })

    recognitions.addEventListener("end",()=>{
        speakBtn.classList.remove("fa-microphone-lines-slash")
        speakBtn.classList.add("fa-microphone-lines")
        text.textContent = "click to start record"
    })

    recognitions.addEventListener("result",(e)=>{
        console.log(e);
        textArea.textContent += e.results[0][0].transcript;
    })
}