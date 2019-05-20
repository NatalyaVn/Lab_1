var str = document.getElementById('d'); 
var elem = {tag: null, text: null, count: null};
var temp = str.textContent.match(/element:(.*);/);
if(temp){
    elem.tag = temp[1];
}
temp = str.textContent.match(/text:(.*);/);
if(temp){
    elem.text = temp[1];
}
temp = str.textContent.match(/count:(.*);/);
if(temp){
    elem.count = temp[1];
}
str.removeChild(str.children[0]);
for(var i = 0; i < elem.count; i++)
{
    var newel = document.createElement(elem.tag); 
    newel.innerHTML = elem.text; 
    str.appendChild(newel);
}