$('#colorful').css( {
	'background-color': '#eee',
	'width': '5.5em',
	'padding': '.3em',
	'text-align': 'center',
	'-webkit-border-radius': '2px',
	'-moz-border-radius': '2px',
	'border-radius': '2px'
	});

$('#colorful').hover(
	function() {
		var hue = 'rgb(' +
			(Math.floor(Math.random() * 256)) + ',' +
			(Math.floor(Math.random() * 256)) + ',' +
			(Math.floor(Math.random() * 256)) + ')';
		$('body').animate( { 'background-color': hue }, 150);
		},
	function() {
		$('body').animate( { 'background-color': '#fff' }, 150);
		}
	);
