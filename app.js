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
} document.write('<h3>' + message + '</h3>');