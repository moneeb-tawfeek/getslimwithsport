console.log('hello this is moneeb , i hope you  have fun in ower site')
var best = prompt('we are makin a surve , about the best football team in the world , cold you write down wich do you think is ?');
console.log("the best player in the world is:" + best);
var message = '';

var player = prompt('best player in the world is cristiano or missi or other player?');


if (player == 'cristiano') {
    message = 'the best player in the world is cristiano';

} else if (player == 'missi') {
    message = 'the best player in the world is missi';

} else {
    message = 'your anser is great , the best player in the world is ' + player;
}
document.write('<h3>' + message + '</h3>');
var Comparison = prompt("do you prefer the premier league or the'lalega'")



while (Comparison !== 'lalega' & Comparison !== 'premier league') {
    Comparison = prompt("you have to  chois frome the option 'premier league or the'lalega'")
}
var showimge = function () {
    var img;
    if (Comparison == 'lalega') {
        img = '<img src="OIP.jpg">'
    }
    else if (Comparison == 'premier league') {
        img = '<img src="premier-league.jpg">/'
    }
    document.write(img)

    var result = '';
    var cupNum = prompt("order a champions league cup by our site'you can order up to 10 champions league cup' ")

    for (var i = 0; i < cupNum; i++) {
        console.log(i)
        result = result + '<img src ="cup.jpg"/>';
    }
    return document.write(result)


}
showimge();

