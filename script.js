var animation = bodymovin.loadAnimation(
	{
		container: document.getElementById ('anim'),
		renderer: 'svg',
		loop: true,
		path: 'data.json'
	})

function mouseOver() {
 var animation = bodymovin.loadAnimation(
	{
		container: document.getElementById ('anim'),
		renderer: 'svg',
		loop: true,
		path: 'data.json'
	})
 }

function mouseOut() {
  document.getElementById('div').style.color = "black";

}
		