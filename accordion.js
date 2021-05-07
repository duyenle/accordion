const accordion = (faq, className) => {
    const faqTemplate = document.createElement('ul');
    faqTemplate.classList.add('faq')

    for (let index = 0; index < faq.length; index++) {
        const faqElement = 
            `<li>
                <div class="question">
                ${faq[index].question}
                    <div class="arrow">
                    <svg  viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>
                    </div>
                </div>
                <div class="answer">
                <span>${faq[index].answer}</span>
                </div>
            </li>`

        faqTemplate.innerHTML += faqElement
    }  

    document.querySelector(className).append(faqTemplate)

    document.querySelectorAll(`${className} li`).forEach((el) => {
        el.addEventListener('click', (event) => {
            if (event.target.parentNode.className === "show") {
                event.target.parentNode.classList.remove("show")
            } else {
                event.target.parentNode.classList.add("show")
            }
        }) 
    })
}

