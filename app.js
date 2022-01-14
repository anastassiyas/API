document.body.style.fontFamily ='Arial, sans-serif';

document.getElementById('nickname').textContent ='Nastenok';
document.getElementById('favorites').textContent ='music, reading';
document.getElementById('hometown').textContent ='Balkhash';

var items = document.getElementsByTagName('li');
for (var i =0; i < items.length; i++) {
    items[i].className = 'list-item';
}
var myPic =document.createElement('img');
myPic.src = 'https://www.google.com/aclk?sa=L&ai=DChcSEwig0sfUgbD1AhV6fG8EHa_6CDYYABAHGgJqZg&sig=AOD64_0Q0w4Irjdo6mdyobLww_msLmWgVQ&adurl&ctype=5&ved=2ahUKEwjHkbfUgbD1AhUOXs0KHeBKCTYQvhd6BAgBEHc';
document.body.appendChild(myPic);



