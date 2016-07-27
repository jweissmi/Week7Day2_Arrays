
document.write('<br/>');

var things = ['Schlitz', 'four', 'dollar', 'toast', 'godard', 'truffaut', 'bespoke', 'neutra', 'artisan', 'pop-up.', 'Chia', 'keytar', 'single-origin', 'coffee', 'sustainable', 'disrupt.'];

document.write(things);

var size = Object.keys(things).length;

document.write('<br/>');
document.write('<br/>');

document.write(size);

document.write('<br/>');
document.write('<br/>');


var movies = [];
movies.push({
	title: "Forest Gump",
	budget: 55,
	stars: ["Tom Hanks"]
});
movies.push({
	title: "Star Wars",
	budget: 11,
	stars: ["Mark Hammil", "Harrison Ford"]
});
movies.push({
	title: "Batman Begins",
	budget: 150,
	stars: ["Christian Bale", "Liam Neeson", "Michael Cain"]
});
movies.push({
	title: "Titanic",
	budget: 200,
	stars: ["Kate Winslet", "Leonardo DiCaprio"]
});
movies.push({
	title: "Inception",
	budget: 160,
	stars: ["Leonardo DiCaprio", "JGL"]
});

console.table(movies);


var i, item;
for (i = 0; i < movies.length; i++) {
    for (item in movies[i]) {
        document.write(item + ": " + movies[i][item] + "<br>");
    }
}