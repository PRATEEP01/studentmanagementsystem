const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const captchaResponse = grecaptcha.getResponse();

    if (!captchaResponse.lenth > 0) {
        throw new Error("Captcha not complete");
    }

    const fd = new FormData(e.target);
    const params = new URLSearchParams(fd);

    fetch('http://localhost:3000/unimy.html', {
        method: "POST",
        body: params
    })
    .then(res => res.json())
    .then(data => {
        if (data.captchasuccess){
            console.log("validation successful");
        }else {
            console.log("validation failed");
        }
        })
    .catch(err => console.error(err))
 
});