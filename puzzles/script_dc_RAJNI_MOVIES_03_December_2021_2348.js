
// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have
		// two entries: an across entry and a down entry
		var puzzleData = [
{
	 clue: "Balu/ Shankar/ பாலு/  சங்கர்-(10)",
	 answer: "தர்மத்தின்தலைவன்",
	 attempt: "", 
	 position: 1,
	 orientation: "across",
	 startx: 2,
	 starty: 2
},
{
	 clue: "Gopi/ கோபி-(10)",
	 answer: "துடிக்கும்கரங்கள்",
	 attempt: "", 
	 position: 2,
	 orientation: "across",
	 startx: 2,
	 starty: 4
},
{
	 clue: "Vijay/ விஜய்-(10)",
	 answer: "நான்சிகப்புமனிதன்",
	 attempt: "", 
	 position: 3,
	 orientation: "down",
	 startx: 7,
	 starty: 1
},
{
	 clue: "Ramesh/ ரமேஷ்-(10)",
	 answer: "ஆயிரம்ஜென்மங்கள்",
	 attempt: "", 
	 position: 4,
	 orientation: "across",
	 startx: 1,
	 starty: 7
},
{
	 clue: "Unknown/ தெரியவில்லை-(4)",
	 answer: "ஆமேகதா",
	 attempt: "", 
	 position: 4,
	 orientation: "down",
	 startx: 1,
	 starty: 7
},
{
	 clue: "Mookaiah/ மூக்கையா-(3)",
	 answer: "பைரவி",
	 attempt: "", 
	 position: 5,
	 orientation: "down",
	 startx: 3,
	 starty: 6
},
{
	 clue: "Ramanathan/ ராமநாதன்-(5)",
	 answer: "அவர்கள்",
	 attempt: "", 
	 position: 6,
	 orientation: "down",
	 startx: 10,
	 starty: 1
},
{
	 clue: "Vaseegaran/ Chitti/ வசீகரன்/  சிட்டி-(5)",
	 answer: "எந்திரன்",
	 attempt: "", 
	 position: 7,
	 orientation: "down",
	 startx: 3,
	 starty: 11
},
{
	 clue: "Bharath/ பரத்-(6)",
	 answer: "திரு.பரத்",
	 attempt: "", 
	 position: 8,
	 orientation: "across",
	 startx: 3,
	 starty: 13
},
{
	 clue: "Thamizharasan (Thamizhazhagan)/ தமிழரசன் (தமிழழகன்)-(5)",
	 answer: "உழைப்பலி",
	 attempt: "", 
	 position: 9,
	 orientation: "down",
	 startx: 6,
	 starty: 10
},
{
	 clue: "Rajashekar/ ராஜசேகர்-(3)",
	 answer: "உன்னை",
	 attempt: "", 
	 position: 9,
	 orientation: "across",
	 startx: 6,
	 starty: 10
},
{
	 clue: "Muthuveerappan (Veera)/ முத்துவீரப்பன் (வீரா)-(2)",
	 answer: "வீர",
	 attempt: "", 
	 position: 10,
	 orientation: "across",
	 startx: 2,
	 starty: 14
},
{
	 clue: "Raja/ ராஜா-(3)",
	 answer: "கழுகு",
	 attempt: "", 
	 position: 11,
	 orientation: "down",
	 startx: 9,
	 starty: 7
},
{
	 clue: "Raja/ ராஜா-(9)",
	 answer: "எல்லாம்உன்கைராசி",
	 attempt: "", 
	 position: 12,
	 orientation: "down",
	 startx: 4,
	 starty: 16
},
{
	 clue: "Raju/ ராஜு-(5)",
	 answer: "ஜீத்ஹமாரி",
	 attempt: "", 
	 position: 13,
	 orientation: "down",
	 startx: 8,
	 starty: 12
},
{
	 clue: "David Billa/ Rajappa/ டேவிட் பில்லா/  ராஜப்பா-(3)",
	 answer: "பில்லா",
	 attempt: "", 
	 position: 14,
	 orientation: "across",
	 startx: 3,
	 starty: 17
},
{
	 clue: "Baba/ Mahavatar Babaji(voice only)/ பாபா/  மஹாவதார் பாபாஜி (குரல் மட்டும்)-(2)",
	 answer: "பாபா",
	 attempt: "", 
	 position: 15,
	 orientation: "down",
	 startx: 2,
	 starty: 18
},
{
	 clue: "Bharani/ பரணி-(5)",
	 answer: "பாயும்புலி",
	 attempt: "", 
	 position: 16,
	 orientation: "across",
	 startx: 2,
	 starty: 19
},
{
	 clue: "Bhagwan Dada/ பகவான் தாதா-(6)",
	 answer: "பகவான்தாதா",
	 attempt: "", 
	 position: 17,
	 orientation: "across",
	 startx: 1,
	 starty: 21
},
{
	 clue: "Aarupadayappan/ ஆறுபடையப்பன்-(5)",
	 answer: "படையப்பா",
	 attempt: "", 
	 position: 18,
	 orientation: "down",
	 startx: 12,
	 starty: 10
},
{
	 clue: "Ashok/ அசோக்-(6)",
	 answer: "மேரிஅதாலத்",
	 attempt: "", 
	 position: 19,
	 orientation: "across",
	 startx: 7,
	 starty: 16
},
{
	 clue: "Ranga/ ரங்கா-(5)",
	 answer: "வஃபதார்",
	 attempt: "", 
	 position: 20,
	 orientation: "down",
	 startx: 10,
	 starty: 13
},
{
	 clue: "Vijay/ விஜய்-(4)",
	 answer: "கர்ஜனே",
	 attempt: "", 
	 position: 21,
	 orientation: "down",
	 startx: 2,
	 starty: 21
},
{
	 clue: "Thyagu/ தியாகு-(10)",
	 answer: "அவள்அப்படித்தான்",
	 attempt: "", 
	 position: 22,
	 orientation: "down",
	 startx: 7,
	 starty: 18
},
{
	 clue: "Himself/ அவனே-(10)",
	 answer: "பாவத்தின்சம்பலம்",
	 attempt: "", 
	 position: 23,
	 orientation: "down",
	 startx: 12,
	 starty: 14
},
{
	 clue: "Bhaskar/ பாஸ்கர்-(10)",
	 answer: "இத்தாருஅசத்தியுலே",
	 attempt: "", 
	 position: 24,
	 orientation: "down",
	 startx: 2,
	 starty: 25
},
{
	 clue: "Ram/ ரேம்-(9)",
	 answer: "ராம்ராபர்ட்ரஹீம்",
	 attempt: "", 
	 position: 25,
	 orientation: "across",
	 startx: 4,
	 starty: 23
},
{
	 clue: "Suryaprakash/ சூர்யபிரகாஷ்-(8)",
	 answer: "தணிக்காட்டுராஜா",
	 attempt: "", 
	 position: 26,
	 orientation: "down",
	 startx: 9,
	 starty: 19
},
{
	 clue: "Bichwa Bakri/ பிச்வா பக்ரி-(9)",
	 answer: "தாயில்லைநான்இல்லை",
	 attempt: "", 
	 position: 27,
	 orientation: "across",
	 startx: 2,
	 starty: 27
},
{
	 clue: "Kamruddin/ கம்ருதீன்-(16)",
	 answer: "அல்லாவுதீனும்அல்புதவிளக்கும்",
	 attempt: "", 
	 position: 28,
	 orientation: "down",
	 startx: 4,
	 starty: 26
},
{
	 clue: "Muthuvel/ Zamindar/ முத்துவேல்/  ஜமீன்தார்-(3)",
	 answer: "முத்து",
	 attempt: "", 
	 position: 29,
	 orientation: "across",
	 startx: 1,
	 starty: 31
},
{
	 clue: "Chitti/ சிட்டி-(4)",
	 answer: "ரா.ஒன்",
	 attempt: "", 
	 position: 30,
	 orientation: "across",
	 startx: 9,
	 starty: 25
},
{
	 clue: "Himself/ அவனே-(12)",
	 answer: "நந்திரி/மீண்டும்வருக",
	 attempt: "", 
	 position: 31,
	 orientation: "down",
	 startx: 7,
	 starty: 29
},
{
	 clue: "Paparayudu/ பாப்பாராயுடு-(6)",
	 answer: "பெத்தராயுடு",
	 attempt: "", 
	 position: 32,
	 orientation: "across",
	 startx: 2,
	 starty: 36
},
{
	 clue: "Kumaran/ குமரன்-(10)",
	 answer: "என்கேயோகேட்டகுரல்",
	 attempt: "", 
	 position: 33,
	 orientation: "down",
	 startx: 9,
	 starty: 30
},
{
	 clue: "Subhash/ சுபாஷ்-(12)",
	 answer: "நாட்டுக்குஒருநல்லவன்",
	 attempt: "", 
	 position: 34,
	 orientation: "across",
	 startx: 1,
	 starty: 39
},
{
	 clue: "Santhanam/ சந்தானம்-(12)",
	 answer: "அறியிருந்துஅருபதுவரை",
	 attempt: "", 
	 position: 35,
	 orientation: "down",
	 startx: 11,
	 starty: 29
},
{
	 clue: "Aathmaram/ ஆத்மாரம்-(11)",
	 answer: "நியாயம்மீரேசெப்பள்ளி",
	 attempt: "", 
	 position: 36,
	 orientation: "across",
	 startx: 1,
	 starty: 41
},
{
	 clue: "Deepak/ தீபக்-(10)",
	 answer: "நினைத்தாலேஇனிக்கும்",
	 attempt: "", 
	 position: 36,
	 orientation: "down",
	 startx: 1,
	 starty: 41
},
{
	 clue: "Babu/ பாபு-(10)",
	 answer: "தாய்மீட்டுசத்தியம்",
	 attempt: "", 
	 position: 37,
	 orientation: "across",
	 startx: 1,
	 starty: 44
},
{
	 clue: "Vikram Singh/ விக்ரம் சிங்-(11)",
	 answer: "இன்சாஃப்கவுன்கரேகா",
	 attempt: "", 
	 position: 38,
	 orientation: "across",
	 startx: 1,
	 starty: 46
},
{
	 clue: "Jaggu/ ஜக்கு-(4)",
	 answer: "சால்பாஸ்",
	 attempt: "", 
	 position: 39,
	 orientation: "down",
	 startx: 3,
	 starty: 46
},
{
	 clue: "Simon/ சைமன்-(10)",
	 answer: "சங்கர்சலீம்சைமன்",
	 attempt: "", 
	 position: 40,
	 orientation: "down",
	 startx: 6,
	 starty: 44
},
{
	 clue: "Manickam (Manick Baashha)/ மாணிக்கம் (மாணிக் பாஷா)-(2)",
	 answer: "பாஷா",
	 attempt: "", 
	 position: 41,
	 orientation: "across",
	 startx: 3,
	 starty: 48
},
{
	 clue: "Local school chairman/ உள்ளூர் பள்ளி தலைவர்-(9)",
	 answer: "ஒண்டுபிரேமதாகதே",
	 attempt: "", 
	 position: 42,
	 orientation: "across",
	 startx: 1,
	 starty: 52
},
{
	 clue: "Kumar Malhotra/ குமார் மல்ஹோத்ரா-(2)",
	 answer: "ஹம்",
	 attempt: "", 
	 position: 43,
	 orientation: "down",
	 startx: 10,
	 starty: 43
},
{
	 clue: "Rajini/ ரஜினி-(8)",
	 answer: "ஆடுபுலிஆட்டம்",
	 attempt: "", 
	 position: 44,
	 orientation: "down",
	 startx: 3,
	 starty: 51
},
{
	 clue: "Gangvaa/ கங்வா-(3)",
	 answer: "கங்வா",
	 attempt: "", 
	 position: 45,
	 orientation: "down",
	 startx: 9,
	 starty: 46
},
{
	 clue: "Kabaleeswaran (Kabali)/ கபாலீஸ்வரன் (கபாலி)-(3)",
	 answer: "கபாலி",
	 attempt: "", 
	 position: 46,
	 orientation: "across",
	 startx: 1,
	 starty: 54
},
{
	 clue: "Sundar/ சுந்தர்-(8)",
	 answer: "கலாட்சம்சாரம்",
	 attempt: "", 
	 position: 46,
	 orientation: "down",
	 startx: 1,
	 starty: 54
},
{
	 clue: "Raghavendra Swami/ ராகவேந்திர சுவாமிகள்-(8)",
	 answer: "ஸ்ரீராகவேந்திரா",
	 attempt: "", 
	 position: 47,
	 orientation: "down",
	 startx: 8,
	 starty: 49
},
{
	 clue: "Rajarathinam/ ராஜரத்தினம்-(5)",
	 answer: "காயத்திரி",
	 attempt: "", 
	 position: 48,
	 orientation: "down",
	 startx: 11,
	 starty: 46
},
{
	 clue: "Ravi/ ரவி-(8)",
	 answer: "நீதிபதிகோபிநாத்",
	 attempt: "", 
	 position: 49,
	 orientation: "across",
	 startx: 5,
	 starty: 55
},
{
	 clue: "Ganesh/ கணேஷ்-(3)",
	 answer: "பிரியா",
	 attempt: "", 
	 position: 50,
	 orientation: "across",
	 startx: 10,
	 starty: 50
},
{
	 clue: "Ganesh/ கணேஷ்-(3)",
	 answer: "பிரியா",
	 attempt: "", 
	 position: 50,
	 orientation: "across",
	 startx: 10,
	 starty: 50
},
{
	 clue: "Chandran (Indran)/ சந்திரன் (இந்திரன்)-(6)",
	 answer: "தில்லுமுல்லு",
	 attempt: "", 
	 position: 51,
	 orientation: "down",
	 startx: 6,
	 starty: 55
},
{
	 clue: "Ranganathan/ ரங்கநாதன்-(3)",
	 answer: "ரங்கா",
	 attempt: "", 
	 position: 52,
	 orientation: "across",
	 startx: 1,
	 starty: 60
},
{
	 clue: "Himself/ அவனே-(3)",
	 answer: "யார்?",
	 attempt: "", 
	 position: 53,
	 orientation: "down",
	 startx: 12,
	 starty: 50
},
{
	 clue: "Kali/ காளி-(2)",
	 answer: "காளி",
	 attempt: "", 
	 position: 54,
	 orientation: "down",
	 startx: 3,
	 starty: 60
},
{
	 clue: "Kaali/ காளி-(2)",
	 answer: "காளி",
	 attempt: "", 
	 position: 54,
	 orientation: "down",
	 startx: 3,
	 starty: 60
},
{
	 clue: "Manohar/ மனோகர்-(6)",
	 answer: "பொல்லாதவன்",
	 attempt: "", 
	 position: 55,
	 orientation: "across",
	 startx: 5,
	 starty: 59
},
{
	 clue: "Michael D'Souza/ மைக்கேல் டி'சோசா-(8)",
	 answer: "நான்வாழவைப்பேன்",
	 attempt: "", 
	 position: 56,
	 orientation: "down",
	 startx: 11,
	 starty: 55
},
{
	 clue: "Chakravarthi/ Santosh/ சக்ரவர்த்தி/  சந்தோஷ்-(8)",
	 answer: "நெற்றிக்கண்ணன்",
	 attempt: "", 
	 position: 57,
	 orientation: "across",
	 startx: 4,
	 starty: 62
},
{
	 clue: "Raja/ ராஜா-(7)",
	 answer: "தர்மயுத்தம்",
	 attempt: "", 
	 position: 58,
	 orientation: "across",
	 startx: 3,
	 starty: 64
},
{
	 clue: "Sivaji Arumugam/ சிவாஜி ஆறுமுகம்-(3)",
	 answer: "சிவாஜி",
	 attempt: "", 
	 position: 59,
	 orientation: "across",
	 startx: 10,
	 starty: 57
},
{
	 clue: "Siva (Tiger)/ சிவா (புலி)-(2)",
	 answer: "சிவா",
	 attempt: "", 
	 position: 59,
	 orientation: "across",
	 startx: 10,
	 starty: 57
},
{
	 clue: "(Maha Guru)/ (மஹா குரு)-(4)",
	 answer: "மகாகுரு",
	 attempt: "", 
	 position: 60,
	 orientation: "across",
	 startx: 2,
	 starty: 66
},
{
	 clue: "Vijay/ விஜய்-(4)",
	 answer: "மகாகுரு",
	 attempt: "", 
	 position: 60,
	 orientation: "across",
	 startx: 2,
	 starty: 66
},
{
	 clue: "Veeraiyan/ வீரையன்-(3)",
	 answer: "வள்ளி",
	 attempt: "", 
	 position: 61,
	 orientation: "down",
	 startx: 9,
	 starty: 59
},
{
	 clue: "Ashok Kumar/ அசோக் குமார்-(8)",
	 answer: "கத்தநாயக்குடு",
	 attempt: "", 
	 position: 62,
	 orientation: "down",
	 startx: 8,
	 starty: 62
},
{
	 clue: "Raja (Guru)/ ராஜா (குரு)-(6)",
	 answer: "குருசிஷ்யன்",
	 attempt: "", 
	 position: 63,
	 orientation: "across",
	 startx: 4,
	 starty: 66
},
{
	 clue: "Ashok Kumar/ அசோக் குமார்-(4)",
	 answer: "குசேலன்",
	 attempt: "", 
	 position: 63,
	 orientation: "down",
	 startx: 4,
	 starty: 66
},
{
	 clue: "Vaanavarayan/ வானவராயன்-(4)",
	 answer: "ேஜமான்",
	 attempt: "", 
	 position: 64,
	 orientation: "across",
	 startx: 1,
	 starty: 69
},
{
	 clue: "Kumar/ குமார்-(7)",
	 answer: "மாங்குடிமைனர்",
	 attempt: "", 
	 position: 65,
	 orientation: "across",
	 startx: 6,
	 starty: 68
},
{
	 clue: "Raja (Kumar)/ ராஜா (குமார்)-(7)",
	 answer: "ராஜாசின்னரோஜா",
	 attempt: "", 
	 position: 66,
	 orientation: "down",
	 startx: 11,
	 starty: 64
},
{
	 clue: "Johnny/ Vidyasagar/ ஜானி/  வித்யாசாகர்-(2)",
	 answer: "ஜானி",
	 attempt: "", 
	 position: 67,
	 orientation: "across",
	 startx: 11,
	 starty: 65
},

			] 
	
			// generate crossword with puzzleData into element id = puzzle-wrapper 			
			$('#puzzle-wrapper').crossword(puzzleData);  
		
	})
	
})(jQuery)
