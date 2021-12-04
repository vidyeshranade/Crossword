
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "Vijay/ விஜய்-(4)",
	 answer: "மகாகுரு",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 3,
	 starty: 5
},
{
	 clue: "(Maha Guru)/ (மஹா குரு)-(4)",
	 answer: "மகாகுரு",
	 attempt: "", 
	 position: 1,
	 orientation: "down",
	 startx: 3,
	 starty: 5
},
{
	 clue: "Raja/ ராஜா-(3)",
	 answer: "கழுகு",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 1,
	 starty: 7
},
{
	 clue: "Mookaiah/ மூக்கையா-(3)",
	 answer: "பைரவி",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 6,
	 starty: 2
},
{
	 clue: "Muthuveerappan (Veera)/ முத்துவீரப்பன் (வீரா)-(2)",
	 answer: "வீர",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 5,
	 starty: 3
},
{
	 clue: "Rajarathinam/ ராஜரத்தினம்-(5)",
	 answer: "காயத்திரி",
	 attempt: "", 
	 position: 5,
	 orientation: "across",
	 startx: 3,
	 starty: 6
},
{
	 clue: "Raju/ ராஜு-(5)",
	 answer: "ஜீத்ஹமாரி",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 5,
	 starty: 5
},
{
	 clue: "Raja/ ராஜா-(4)",
	 answer: "விடுதலை",
	 attempt: "", 
	 position: 7,
	 orientation: "across",
	 startx: 6,
	 starty: 4
},
{
	 clue: "Devu/ தேவு-(6)",
	 answer: "தப்பிடாதல",
	 attempt: "", 
	 position: 8,
	 orientation: "down",
	 startx: 8,
	 starty: 4
},
{
	 clue: "Himself/ அவனே-(12)",
	 answer: "மணத்தில்உறுதிவேண்டும்",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 1,
	 starty: 12
},
{
	 clue: "Ashok/ அசோக்-(6)",
	 answer: "மேரிஅதாலத்",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 4,
	 starty: 9
},
{
	 clue: "Pandiyan/ பாண்டியன்-(9)",
	 answer: "அபூர்வராகங்கள்",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 6,
	 starty: 9
},
{
	 clue: "Rajendran/ ராஜேந்திரன்-(7)",
	 answer: "படிக்கடவன்",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 3,
	 starty: 12
},
{
	 clue: "Dharma Durai/ தர்ம துரை-(5)",
	 answer: "தர்மதுரை",
	 attempt: "", 
	 position: 13,
	 orientation: "across",
	 startx: 5,
	 starty: 11
},
{
	 clue: "Himself (Raghavendrar)/ அவரே (ராகவேந்திரர்)-(10)",
	 answer: "உருவங்கள்மறலம்",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 1,
	 starty: 17
},
{
	 clue: "Kabaleeswaran (Kabali)/ கபாலீஸ்வரன் (கபாலி)-(3)",
	 answer: "கபாலி",
	 attempt: "", 
	 position: 15,
	 orientation: "across",
	 startx: 3,
	 starty: 15
},
{
	 clue: "Rajini/ ரஜினி-(8)",
	 answer: "ஆடுபுலிஆட்டம்",
	 attempt: "", 
	 position: 16,
	 orientation: "down",
	 startx: 10,
	 starty: 10
},
{
	 clue: "Raghupathi/ ரகுபதி-(6)",
	 answer: "வேலைக்காரன்",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 1,
	 starty: 20
},
{
	 clue: "Himself/ அவனே-(6)",
	 answer: "அக்னிசாக்ஷி",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 3,
	 starty: 19
},
{
	 clue: "Erode Shivagiri (Dada)/ ஈரோடு சிவகிரி (தாதா)-(7)",
	 answer: "கோடிபறக்குது",
	 attempt: "", 
	 position: 19,
	 orientation: "down",
	 startx: 8,
	 starty: 14
},
{
	 clue: "Raja Lingeswaran/ Lingeswaran (Lingaa)/ ராஜா லிங்கேஸ்வரன்/  லிங்கேஸ்வரன் (லிங்கா)-(3)",
	 answer: "லிங்கா",
	 attempt: "", 
	 position: 20,
	 orientation: "across",
	 startx: 10,
	 starty: 13
},
{
	 clue: "Kishan/ கிஷன்-(6)",
	 answer: "கூன்காகர்ஸ்",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 6,
	 starty: 19
},
{
	 clue: "Kaali/ காளி-(2)",
	 answer: "காளி",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 6,
	 starty: 21
},
{
	 clue: "Kali/ காளி-(2)",
	 answer: "காளி",
	 attempt: "", 
	 position: 22,
	 orientation: "across",
	 startx: 6,
	 starty: 21
},
{
	 clue: "Ashok Kumar/ அசோக் குமார்-(4)",
	 answer: "குசேலன்",
	 attempt: "", 
	 position: 23,
	 orientation: "across",
	 startx: 8,
	 starty: 19
},
{
	 clue: "Ranjith/ ரஞ்சித்-(7)",
	 answer: "தோஸ்திதுஷ்மணி",
	 attempt: "", 
	 position: 24,
	 orientation: "across",
	 startx: 5,
	 starty: 24
},
{
	 clue: "Paarattai/ பாறட்டை-(7)",
	 answer: "16வயதினிலே",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 3,
	 starty: 26
},
{
	 clue: "Krishnan/ கிருஷ்ணன்-(4)",
	 answer: "மன்னன்",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 11,
	 starty: 18
},
{
	 clue: "Murthy/ மூர்த்தி-(7)",
	 answer: "அந்துலேனிகதா",
	 attempt: "", 
	 position: 27,
	 orientation: "down",
	 startx: 8,
	 starty: 22
},
{
	 clue: "Vishwanath/ விஸ்வநாத்-(8)",
	 answer: "நான்மகான்அல்லா",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 10,
	 starty: 22
},
{
	 clue: "Kumar/ குமார்-(7)",
	 answer: "மாங்குடிமைனர்",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 3,
	 starty: 29
},
{
	 clue: "Veeraiyan/ வீரையன்-(12)",
	 answer: "ரகுபதிராகவன்ராஜாராம்",
	 attempt: "", 
	 position: 30,
	 orientation: "down",
	 startx: 5,
	 starty: 28
},
{
	 clue: "Aathmaram/ ஆத்மாரம்-(11)",
	 answer: "நியாயம்மீரேசெப்பள்ளி",
	 attempt: "", 
	 position: 31,
	 orientation: "down",
	 startx: 2,
	 starty: 31
},
{
	 clue: "Shankar G. Dadhu Dayal/ சங்கர் ஜி. தாது தயாள்-(3)",
	 answer: "தியாகி",
	 attempt: "", 
	 position: 32,
	 orientation: "across",
	 startx: 1,
	 starty: 32
},
{
	 clue: "Vijay/ விஜய்-(12)",
	 answer: "அம்மாஎவரிக்கைனாஅம்மா",
	 attempt: "", 
	 position: 33,
	 orientation: "across",
	 startx: 1,
	 starty: 34
},
{
	 clue: "Kamruddin/ கம்ருதீன்-(16)",
	 answer: "அல்லாவுதீனும்அல்புதவிளக்கும்",
	 attempt: "", 
	 position: 34,
	 orientation: "down",
	 startx: 10,
	 starty: 27
},
{
	 clue: "Subhash/ சுபாஷ்-(12)",
	 answer: "நாட்டுக்குஒருநல்லவன்",
	 attempt: "", 
	 position: 35,
	 orientation: "down",
	 startx: 7,
	 starty: 31
},
{
	 clue: "Chitti/ சிட்டி-(4)",
	 answer: "ரா.ஒன்",
	 attempt: "", 
	 position: 36,
	 orientation: "across",
	 startx: 5,
	 starty: 36
},
{
	 clue: "Veeraiyan/ வீரையன்-(3)",
	 answer: "வள்ளி",
	 attempt: "", 
	 position: 37,
	 orientation: "across",
	 startx: 1,
	 starty: 40
},
{
	 clue: "Kumar Malhotra/ குமார் மல்ஹோத்ரா-(2)",
	 answer: "ஹம்",
	 attempt: "", 
	 position: 38,
	 orientation: "across",
	 startx: 4,
	 starty: 39
},
{
	 clue: "Arjun Thange/ அர்ஜுன் தங்கே-(6)",
	 answer: "ஃபரிஷ்தாய்",
	 attempt: "", 
	 position: 39,
	 orientation: "down",
	 startx: 4,
	 starty: 41
},
{
	 clue: "Krishnudu/ கிருஷ்ணுடு-(9)",
	 answer: "மாயாதாரிகிருஷ்ணுடு",
	 attempt: "", 
	 position: 40,
	 orientation: "down",
	 startx: 12,
	 starty: 34
},
{
	 clue: "Bhagwan Dada/ பகவான் தாதா-(6)",
	 answer: "பகவான்தாதா",
	 attempt: "", 
	 position: 41,
	 orientation: "across",
	 startx: 4,
	 starty: 42
},
{
	 clue: "Ghajraj Thakur/ கஜராஜ் தாக்கூர்-(4)",
	 answer: "புலந்தி",
	 attempt: "", 
	 position: 42,
	 orientation: "across",
	 startx: 6,
	 starty: 40
},
{
	 clue: "Unknown/ தெரியவில்லை-(4)",
	 answer: "ஆமேகதா",
	 attempt: "", 
	 position: 43,
	 orientation: "across",
	 startx: 1,
	 starty: 45
},
{
	 clue: "Rashid/ ரஷீத்-(2)",
	 answer: "புலி",
	 attempt: "", 
	 position: 44,
	 orientation: "across",
	 startx: 10,
	 starty: 36
},
{
	 clue: "Kondaji/ கொண்டாஜி-(7)",
	 answer: "கதாசங்கமம்",
	 attempt: "", 
	 position: 45,
	 orientation: "across",
	 startx: 3,
	 starty: 45
},
{
	 clue: "Arun/ அருண்-(6)",
	 answer: "தங்கமகன்",
	 attempt: "", 
	 position: 46,
	 orientation: "down",
	 startx: 6,
	 starty: 44
},
{
	 clue: "Ramanathan/ ராமநாதன்-(5)",
	 answer: "அவர்கள்",
	 attempt: "", 
	 position: 47,
	 orientation: "across",
	 startx: 3,
	 starty: 48
},
{
	 clue: "Ranga/ ரங்கா-(5)",
	 answer: "வஃபதார்",
	 attempt: "", 
	 position: 48,
	 orientation: "down",
	 startx: 4,
	 starty: 48
},
{
	 clue: "Surya/ சூர்யா-(4)",
	 answer: "தளபதி",
	 attempt: "", 
	 position: 49,
	 orientation: "across",
	 startx: 2,
	 starty: 50
},
{
	 clue: "Ram/ ரேம்-(9)",
	 answer: "ராம்ராபர்ட்ரஹீம்",
	 attempt: "", 
	 position: 50,
	 orientation: "down",
	 startx: 9,
	 starty: 44
},
{
	 clue: "Vijay/ விஜய்-(4)",
	 answer: "கர்ஜனை",
	 attempt: "", 
	 position: 51,
	 orientation: "across",
	 startx: 3,
	 starty: 52
},
{
	 clue: "Vijay/ விஜய்-(4)",
	 answer: "கர்ஜனே",
	 attempt: "", 
	 position: 51,
	 orientation: "down",
	 startx: 3,
	 starty: 52
},
{
	 clue: "Vijay/ விஜய்-(5)",
	 answer: "கர்ஜனம்",
	 attempt: "", 
	 position: 52,
	 orientation: "across",
	 startx: 1,
	 starty: 54
},
{
	 clue: "Gangvaa/ கங்வா-(3)",
	 answer: "கங்வா",
	 attempt: "", 
	 position: 52,
	 orientation: "down",
	 startx: 1,
	 starty: 54
},
{
	 clue: "Deepak/ தீபக்-(10)",
	 answer: "நினைத்தாலேஇனிக்கும்",
	 attempt: "", 
	 position: 53,
	 orientation: "down",
	 startx: 6,
	 starty: 51
},
{
	 clue: "Kumaresan/ குமரேசன்-(6)",
	 answer: "சதுரங்கம்",
	 attempt: "", 
	 position: 54,
	 orientation: "across",
	 startx: 7,
	 starty: 50
},
{
	 clue: "Azam Khan/ ஆசம் கான்-(5)",
	 answer: "கைர்கனோனி",
	 attempt: "", 
	 position: 55,
	 orientation: "down",
	 startx: 11,
	 starty: 48
},
{
	 clue: "Kaalimuthu/ காளிமுத்து-(9)",
	 answer: "காய்கொடுக்கும்காய்",
	 attempt: "", 
	 position: 56,
	 orientation: "across",
	 startx: 1,
	 starty: 59
},
{
	 clue: "Babu/ பாபு-(10)",
	 answer: "தாய்மீட்டுசத்தியம்",
	 attempt: "", 
	 position: 57,
	 orientation: "down",
	 startx: 2,
	 starty: 58
},
{
	 clue: "Anwar/ அன்வர்-(10)",
	 answer: "இன்சானியத்கேதேவ்தா",
	 attempt: "", 
	 position: 58,
	 orientation: "across",
	 startx: 3,
	 starty: 57
},
{
	 clue: "Raju/ ராஜு-(4)",
	 answer: "தாய்வீடு",
	 attempt: "", 
	 position: 59,
	 orientation: "across",
	 startx: 6,
	 starty: 54
},
{
	 clue: "Raja/ ராஜா-(4)",
	 answer: "மாவீரன்",
	 attempt: "", 
	 position: 60,
	 orientation: "down",
	 startx: 8,
	 starty: 53
},
{
	 clue: "Bhaskar/ பாஸ்கர்-(10)",
	 answer: "இத்தாருஅசத்தியுலே",
	 attempt: "", 
	 position: 61,
	 orientation: "across",
	 startx: 1,
	 starty: 64
},
{
	 clue: "John A. Mendez/ Janardhan B. Gupta/ Jani/ ஜான் ஏ. மெண்டஸ்/  ஜனார்தன் பி. குப்தா/  ஜானி-(9)",
	 answer: "ஜான்ஜானிஜனார்தன்",
	 attempt: "", 
	 position: 62,
	 orientation: "across",
	 startx: 4,
	 starty: 62
},
{
	 clue: "Rajashekar/ ராஜசேகர்-(3)",
	 answer: "உன்னை",
	 attempt: "", 
	 position: 63,
	 orientation: "down",
	 startx: 5,
	 starty: 61
},
{
	 clue: "Balu/ பாலு-(10)",
	 answer: "தம்பிக்குஎந்தஊரு",
	 attempt: "", 
	 position: 64,
	 orientation: "across",
	 startx: 1,
	 starty: 67
},
{
	 clue: "Vikram Pratap Singh/ விக்ரம் பிரதாப் சிங்-(4)",
	 answer: "தமாச்சா",
	 attempt: "", 
	 position: 64,
	 orientation: "down",
	 startx: 1,
	 starty: 67
},
{
	 clue: "Johnny/ Vidyasagar/ ஜானி/  வித்யாசாகர்-(2)",
	 answer: "ஜானி",
	 attempt: "", 
	 position: 65,
	 orientation: "down",
	 startx: 7,
	 starty: 61
},
{
	 clue: "Bichwa Bakri/ பிச்வா பக்ரி-(9)",
	 answer: "தாயில்லைநான்இல்லை",
	 attempt: "", 
	 position: 66,
	 orientation: "down",
	 startx: 12,
	 starty: 57
},
{
	 clue: "David Billa/ Rajappa/ டேவிட் பில்லா/  ராஜப்பா-(3)",
	 answer: "பில்லா",
	 attempt: "", 
	 position: 67,
	 orientation: "down",
	 startx: 3,
	 starty: 67
},
{
	 clue: "Mangal Singh/ மங்கள் சிங்-(5)",
	 answer: "டகுஹசினா",
	 attempt: "", 
	 position: 68,
	 orientation: "down",
	 startx: 5,
	 starty: 66
},
{
	 clue: "Himself/ அவனே-(3)",
	 answer: "யார்?",
	 attempt: "", 
	 position: 69,
	 orientation: "down",
	 startx: 10,
	 starty: 61
},
{
	 clue: "Vaseegaran/ Chitti/ வசீகரன்/  சிட்டி-(5)",
	 answer: "எந்திரன்",
	 attempt: "", 
	 position: 70,
	 orientation: "down",
	 startx: 7,
	 starty: 66
},
{
	 clue: "Siva (Tiger)/ சிவா (புலி)-(2)",
	 answer: "சிவா",
	 attempt: "", 
	 position: 71,
	 orientation: "across",
	 startx: 5,
	 starty: 69
},
{
	 clue: "Ranganathan/ ரங்கநாதன்-(3)",
	 answer: "ரங்கா",
	 attempt: "", 
	 position: 72,
	 orientation: "across",
	 startx: 7,
	 starty: 69
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
