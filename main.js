  
const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e)=>{
  texts.appendChild(p);
  const text = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  p.innerText = text;
  if(e.results[0].isFinal){
    if (text.includes('how are you')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'I am fine';
      texts.appendChild(p)
    }
    if (text.includes("what's your name") || text.includes('what is your name')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'My Name is jarvis';
      texts.appendChild(p)
    }
    if (text.includes('open my YouTube')) {
      p = document.createElement('p');
      p.classList.add('replay');
      p.innerText = 'opening youtube channel';
      texts.appendChild(p)
      console.log('opening youtube')
      window.open('https://www.youtube.com/watch?v=5qIJ7tQ2QbM&list=RD5qIJ7tQ2QbM&start_radio=1')
    }
     if (text.includes ('open Github')){
       p=document.createElement('p');
       p.classList.add('replay');
       p.innerText='opening github';
       texts.appendChild(p)
       console.log('opening github')
       window.open ('https://github.com/ashavijit')
     }
     if (text.includes ('open WhatsApp')){
       p=document.createElement('p');
       p.classList.add('replay');
       p.innerText='opening whatsapp';
       texts.appendChild(p)
       console.log('opening WhatsApp')
       window.open ('https://web.whatsapp.com/')
     }
     if (text.includes ('open Instagram')){
      p=document.createElement('p');
      p.classList.add('replay');
      p.innerText='opening instagram';
      texts.appendChild(p)
      console.log('opening instagram')
      window.open ('https://www.instagram.com/')
    }
    if (text.includes ('open Facebook')){
      p=document.createElement('p');
      p.classList.add('replay');
      p.innerText='opening facebook';
      texts.appendChild(p)
      console.log('opening facebook')
      window.open ('https://www.facebook.com/')
    }
    
  
    p = document.createElement('p');
    }
});


recognition.addEventListener('end', ()=>{
  recognition.start();
})

recognition.start();
