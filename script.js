const url = 'https://xkcd.com/info.0.json';
let prevUrl = '';
let nextUrl = '';

fetch(url)
	.then(response => response.json())
	.then(data => {
		displayComic(data);
		prevUrl = `https://xkcd.com/${data.num - 1}/info.0.json`;
		nextUrl = `https://xkcd.com/${data.num + 1}/info.0.json`;
	})
	.catch(error => console.log(error));
    