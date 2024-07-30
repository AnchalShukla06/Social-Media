let likes_list = [{"imgUrl":"resources/images/amazon_logo.png",
              "title":"Amazon",
							"link": "www.amazon.com"
					   },
						 {"imgUrl":"resources/images/google_logo.png",
						 "title":"Google",
						 "link": "www.google.com"
						 }];

let events_list = [{"imgUrl":"resources/images/music_event.jpeg",
"title":"Coachella 2024",
"content": "Music Festival"
}];

let tweets_list = [{"imgUrl":"resources/images/logo2.jpg",
"title":"X",
"content": "sample tweet.",
"visibilitySwitch": true
},
{"imgUrl":"resources/images/psit_logo.jpg",
"title":"PSIT KANPUR",
"content": "Another sample tweet.",
"visibilitySwitch": true
}];


function renderPagesToLike(){
	let pagesToLikeHTMl = '';
	for (ele of likes_list){
		pagesToLikeHTMl += `
		<div>
			<img src="${ele.imgUrl}">
			<a href="${ele.link}" >${ele.title}</a>
		</div>
		`
	}
	document.getElementById('pages_to_like').innerHTML = pagesToLikeHTMl;

}

function renderEvents(){
	let eventsHTMl = '';
	for (ele of events_list){
		eventsHTMl += `
		<div id="events_ele">
			<img src="${ele.imgUrl}">
			<div id="events_ele_content">
				<h2>${ele.title}</h2>
				<p>${ele.content}</p>
			</div>
		</div>
		`
	}
	document.getElementById('events').innerHTML = eventsHTMl;

}

function renderTweets(){
	let tweetsHTMl = '';
	for (ele of tweets_list){
		if (ele.visibilitySwitch){
		tweetsHTMl += `
		<div id="events_ele">
			<img src="${ele.imgUrl}">
			<div id="events_ele_content">
				<h2>${ele.title}</h2>
				<p>${ele.content}</p>
			</div>
			<button onclick="deleteHandler()">
				<img src="resources/images/delete.png" alt="" />
			</button>
		</div>
		`};
	}
	document.getElementById('tweets').innerHTML = tweetsHTMl;
}
function logoutHandler(){
	localStorage.setItem('is_user_logged_in',false);
	location.href = 'index.html';

}

function deleteHandler(id){

	// fr that id in tweets_list visibilitySwitch": false
}

const is_user_logged_in = localStorage.getItem('is_user_logged_in');
console.log('is_user_logged_in',is_user_logged_in);
if (is_user_logged_in === 'false'){
	location.href = 'index.html'
}
renderPagesToLike();
renderEvents();
renderTweets();