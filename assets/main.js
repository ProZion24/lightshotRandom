function generateURL() {
	var result = '';
	var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for(var i = 0; i < 6; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	var URL = "https://prnt.sc/" + result + "/direct";
	document.getElementById('url').innerHTML = URL;
	document.getElementById('url').href = URL;
	document.getElementById('frame').src = URL;
	return URL;
}