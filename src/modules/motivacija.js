const url = document.querySelector('#urlinput');
const textArea = document.querySelector("#textarea");
const button = document.querySelector("#issaugoti");
button.addEventListener('click', motivacija);
const dot = document.querySelector('.col');

function motivacija(){
    const photoURL = url.value;
    const textContent = textArea.value;
    
    const box = document.createElement('div');
    const photo = document.createElement('img');
    photo.src = photoURL;
   
    const text = document.createElement('h3');
    text.textContent = textContent;
    box.appendChild(photo);
    box.appendChild(text);
    dot.appendChild(box);

    const savedData = {
        photoURL: photoURL,
        textContent: textContent
    };
    localStorage.setItem('motivacijaData', JSON.stringify(savedData));

    url.value = '';
    textArea.value = '';
}

export default motivacija; 
