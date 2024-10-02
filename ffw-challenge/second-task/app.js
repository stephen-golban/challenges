const input = document.querySelector("#url");

const parseUrl = (receved_url) => new URL(receved_url);

let obj = parseUrl("https://ffwagency.com/do/any.php?a=1#foo");

console.log(obj.hash);
console.log(obj.hostname);
console.log(obj.pathname);
