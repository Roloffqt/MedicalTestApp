Functions not working are:
1. Able to change status between Building & prodution
	-Explantion:
	Couldnt get select box working properly, this was doable with a input field but i didnt feel the UI/UX would be good, because all users could have a new way of spelling/typing the status name therefor i wanted to print out a SELECT box with only 2 values and use that, it works for create new but not for edit.

2. Data resetting on view reload
	-Explation
	this was an error i caught very late, i therefor tried my best to find an answer but unforunatly i couldnt find it, i know i have to .push the data to my factory once agian instead of in the scope of the controller, i didnt succeed in this. this is also why you cannot go to details on a new study.

Design choices:

1. Colors
	-Explation
	I felt like the colors of the side should be bright and positive while also acting very calming and easy to look at, first i tried with a very dark orange but really quickly realised that it wouldnt work and the page would be 2 dark, i then went on with materlizez "lighten" class and ended up on the awesome orange color i have now, i then decided to make the body a #eee grey which is a almost white grey but its very easy on the eyes. this made the page look very calm and easy but, i decided to pimp the side up abit by adding a half grey background, and make that repeat on everypage, go give it a feeling of completion.
	
	- Hex codes
	Orange: #ff8a65;
	Background-white: #eee;
	background-grey: #5d5d5d;
	Font-color: #000000/#ffffff;
 	icons: rgb(151, 151, 151);

2. Shapes
	-Explation
	I wanted to do a flat design, with alot of egdes and boxes so you easily can find the thing your looking for at the page, therefor i went to materialize as my css framework, i knew that a minimaltisk design would be the way to go, cause there no need for anything flashy in a client like this.

3. Font choices
	-Explation
	When i first opened the project i instanty new i neede a thin but easliy readable font, i decided on going with 1 font for every heading and another for every part of information/data, i choose 2 very simulair fonts to not off put a users eyes or to have it be distracting.

	- Fonts:
	Headings: font-family: 'Open Sans Condensed', sans-serif;
	Headings-font-weight: 500;

	Content-Text:font-family: "Roboto", sans-serif;
	Content-Font-weight: 400;


Extra Features:

1. Search
	-Explation
	In my head it was clear that this app is used for alot of studies pr account, therefor a search is a must have for this kinda web-app, there is always a need for a search but when you have to find that one subject/study its clearly needed
	
2. Sort by
	-Explation
	Sort by Status/name on the front page and by date on subject list, is also something i thought would come in handy for alot of people there for i used the extra 5 mins and made it 
