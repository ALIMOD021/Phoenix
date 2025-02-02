// text animation
let text1 = 'Phoenix Client'; // The text to be animated for the first p tag
let text2 = 'First Iranian Minecraft Client'; // The text to be animated for the second p tag
let speed = 80; // Speed/delay of the effect in milliseconds

function typeWriter(text, id, delay) {
    let i = 0;
    function helper() {
        if (i < text.length) {
            document.getElementById(id).innerHTML += text.charAt(i);
            i++;
            setTimeout(helper, speed);
        }
    }
    setTimeout(helper, delay);
}

typeWriter(text1, 'myText1', 0);
typeWriter(text2, 'myText2', text1.length * speed);

// scroll animation
document.addEventListener('DOMContentLoaded', () => {
    let sections = Array.from(document.querySelectorAll('section'))

    document.addEventListener('scroll', showElements)
    showElements()
    function showElements() {
        sections.forEach(section => {
            if (section.offsetTop < window.scrollY + document.documentElement.clientHeight - 50) {
                section.classList.add('show')
                sections = sections.filter(item => item != section)
            }

        })
        if (sections.length == 0) {
            document.removeEventListener('scroll', showElements)
        }
    }
})