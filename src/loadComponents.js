function loadHTML(elementId, fileName) {
    const element = document.getElementById(elementId);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', fileName, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            element.innerHTML = xhr.responseText;
            const scripts = element.getElementsByTagName('script');
            if(typeof(scripts)!=='null'){
                for (let i = 0; i < scripts.length; i++) {
                    const script = document.createElement('script');
                    script.src = scripts[i].src;
                    document.body.appendChild(script);
                }
            }            
        }
    };
    xhr.send();
}

document.addEventListener("DOMContentLoaded", function() {
    loadHTML('navbar', 'navbar.html');
    loadHTML('shop','shop.html');
    // loadHTML('footer', 'footer.html');
});




