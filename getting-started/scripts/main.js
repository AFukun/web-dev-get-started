const image=document.querySelector('img');
const heading=document.querySelector('h1');
const sub=document.querySelector('h3');
image.onclick=function()
{
	let src = image.getAttribute('src');
	if (src == "images/safari.png")
	{
		image.setAttribute('src',"images/apple.png");
		heading.textContent="Apple";
		sub.textContent="But you have to use their software if you use a mac";
	}
	else
	{
		image.setAttribute('src',"images/safari.png");
		heading.textContent="Safari";
		sub.textContent="This browser is more than a trash";
	}
};

const button=document.querySelector('button');
const greeting=document.querySelector('h2');
button.onclick=function()
{
	let name = prompt('Please enter your name.');
	if (name)
		greeting.textContent="Hello, "+name;
}



