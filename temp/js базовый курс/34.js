const p = document.querySelectorAll('p');

console.log(p);



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('js базовый курс/34-1.js');
loadScript('js базовый курс/34-2.js');