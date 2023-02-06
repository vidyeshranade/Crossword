// used in index.html to set the src attribute of loadPuzzFile to load chosen puzzle
// and also set variable content into note2 element
// and also set fix content into note1 element

  function setData2(title) {
    var obj1 = getData2(title);
    document.getElementById("loadPuzzFile").src = "puzzles/" + obj1.src;
    document.getElementById("note3").innerHTML = title;
    document.getElementById("note2").innerHTML = obj1.note2;
    document.getElementById("note1").innerHTML = "F5: to reload | Spacebar or Enter Key: Moves to next cell | Tab: Moves to next clue | ^v to paste answer"
    alert( "You time starts now...");
    // hide all elements with class = w3-dropdown-hover
    $('.w3-dropdown-hover').hide(); 
    countDownTimer();
}
// replacing getData function by below object literal to avoid error and better performance
// taken from https://medium.com/chrisburgin/rewriting-javascript-replacing-the-switch-statement-cfff707cf045

  const getData2 = (title) => ({
    "ilnwM001": {
        "src": "script_dc_Marathi_by_Vidyesh_Ranade.js",
        "note2": "<b>Note: </b>Identify the answers in मराठी"
   },
     "ilnwG001": {
        "src": "script_dc_Gujarati_by_Nishant_Patel.js",
        "note2":  "<b>Note: </b>Identify the relations/ સંબંધોને ઓળખો"
   },
     "ilnwG002": {
        "src": "script_dc_Gujarati_by_Mukul_Mhaskar.js",
        "note2":  "<b>Note: </b>None"
   },
     "ilnwB001": {
        "src": "script_dc_Bangla_by_Nitesh_Roy.js",
       "note2":  "<b>Note: </b>Identify Answers in বাংলা for English Clues"
   },
     "ilnwH001": {
        "src": "script_dc_Hindi_by_Mayur_Sarwate.js",
       "note2":  "<b>Note: </b>Identify मध्यप्रदेश Districts in हिन्दी for English Clues"
   },
     "ilnwP001": {
        "src": "script_dc_Punjabi_by_Ramanjeet_Saini.js",
        "note2":  "<b>Note: </b>Identify Answers in ਪੰਜਾਬੀ for English Clues"
   },
     "ilnwO001": {
        "src": "script_dc_Oriya_by_Ranjit_Rout.js",
        "note2":  "<b>Note: </b>Identify Odisha Districts in ଓଡିଆ for English/ ଓଡିଆ Clues"
   },
     "ilnwO002": {
        "src": "script_dc_Oriya_by_Debabrata_Biswal.js",
        "note2":  "<b>Note: </b>Identify Answers in ଓଡିଆ for English/ ଓଡିଆ Clues"
   },
     "ilseKA001": {
        "src": "script_dc_Kannada_by_Vishnuvardhan_Karmathi.js",
        "note2":  "<b>Note: </b>Identify Districts of Karnataka in ಕನ್ನಡ for ಕನ್ನಡ Clues"
   },
     "ilseTE001": {
        "src": "script_dc_Telugu_by_Chaitanya_Yernagula.js",
        "note2":  "<b>Note: </b>Identify Answers in తెలుగు for తెలుగు Clues"
   },
     "ilseM001": {
        "src": "script_dc_Malyalam_by_Raakesh_Krishna_Kumar.js",
        "note2":  "<b>Note: </b>Identify District of Kerala in മലയാളം for English Clues"
   },
     "ilseTA001": {
        "src": "script_dc_Tamil_by_Ramakrishnan_Sivaraman.js",
        "note2":  "<b>Note: </b>Identify Districts of Tamilnadu in தமிழ் for தமிழ்/ English Clues"
   },
     "ilseTA002": {
        "src": "script_dc_RAJNI_MOVIES_03_December_2021_2348.js",
        "note2":  "<b>Note: </b>Identify Rajnikant's Movie Name in Tamil for Tamil/ English Role Name as a Clues"
   },
     "ilseTA003": {
        "src": "script_dc_RAJNI_MOVIES_04_December_2021_1201.js",
        "note2":  "<b>Note: </b>Identify Rajnikant's Movie Name in Tamil for Tamil/ English Role Name as a Clues"
   },
     "ilaiS001": {
        "src": "script_dc_SANSKRUT_MARATHI_WORDS_02_February_2023_2010.js",
        "note2":  "<b>Note: </b>Identify संस्कृत word for मराठी Clues"
   },
     "ilaiS002": {
        "src": "script_dc_SANSKRUT_MARATHI_WORDS_02_February_2023_2001.js",
        "note2":  "<b>Note: </b>Identify संस्कृत word for मराठी Clues."
   },
     "hms91": {
    "src": "script_dc_song2movie_26_March_2021_1225.js",									
    "note2":  "<b>Note: </b>आपको गाने की FIRST लाइन  से मूव्ही/ Movie को पहचानें."
    },
     "hms92": {
        "src": "script_dc_song2movie_26_March_2021_1228.js",									
        "note2":  "<b>Note: </b>आपको गाने की FIRST लाइन  से मूव्ही/ Movie को पहचानें."
   },
     "hms93": {
        "src": "script_dc_song2movie_26_March_2021_1229.js",									
        "note2":  "<b>Note: </b>आपको गाने की FIRST लाइन  से मूव्ही/ Movie को पहचानें."
   },
     "hms101": {
        "src": "script_dc_आनंदबक्षी_16_March_2021_2107.js",									
        "note2":  "<b>Note: </b>आपको SECOND लाइन की पहचान करनी होगी."
   },
     "hms102": {
        "src": "script_dc_आनंदबक्षी_16_March_2021_2102.js",									
        "note2":  "<b>Note: </b>आपको SECOND लाइन की पहचान करनी होगी."
   },
     "hms103": {
        "src": "script_dc_आनंदबक्षी_26_March_2021_1529.js",	
        "note2":  "<b>Note: </b>आपको SECOND लाइन की पहचान करनी होगी."
   },
     "hms104": {
        "src": "script_dc_आनंदबक्षी_16_March_2021_2105.js",	
        "note2":  "<b>Note: </b>आपको SECOND लाइन की पहचान करनी होगी."
   },
     "hms141": {
        "src": "script_dc_साहिरलुधियानवी_26_March_2021_1135.js",	
        "note2":  "<b>Note: </b>आपको SECOND लाइन की पहचान करनी होगी."
   },
     "hms142": {
        "src": "script_dc_साहिरलुधियानवी_26_March_2021_1136.js",									
        "note2":  "<b>Note: </b>आपको SECOND लाइन की पहचान करनी होगी."
   },
     "hms143": {
        "src": "script_dc_साहिरलुधियानवी_26_March_2021_1138.js",	
        "note2":  "<b>Note: </b>आपको SECOND लाइन की पहचान करनी होगी."
   },
    "hms121": {
      "src": "script_dc_मजरूह_29_June_2021_2014.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms122": {
      "src": "script_dc_मजरूह_29_June_2021_2016.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms123": {
      "src": "script_dc_मजरूह_29_June_2021_2023.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms124": {
      "src": "script_dc_मजरूह_29_June_2021_2026.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms125": {
      "src": "script_dc_मजरूह_29_June_2021_2027.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms161": {
      "src": "script_dc_शैलेन्द्र_30_June_2021_1252.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms162": {
      "src": "script_dc_शैलेन्द्र_30_June_2021_1254.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms163": {
      "src": "script_dc_शैलेन्द्र_30_June_2021_1259.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms164": {
      "src": "script_dc_शैलेन्द्र_30_June_2021_1306.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms165": {
      "src": "script_dc_शैलेन्द्र_30_June_2021_1312.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms181": {
      "src": "script_dc_हसरत_30_June_2021_1327.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms182": {
      "src": "script_dc_हसरत_30_June_2021_1329.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms183": {
      "src": "script_dc_हसरत_30_June_2021_1331.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms184": {
      "src": "script_dc_हसरत_30_June_2021_1337.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms185": {
      "src": "script_dc_हसरत_30_June_2021_1339.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms306": {
      "src": "script_dc_BAPPIDA_SONGS_25_February_2022_1125.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "601": {
      "src": "script_dc_LATA_DIDI_SONGS_25_February_2022_1134.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "602": {
      "src": "script_dc_LATA_DIDI_SONGS_25_February_2022_1144.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "603": {
      "src": "script_dc_LATA_DIDI_SONGS_25_February_2022_1641.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "604": {
      "src": "script_dc_LATA_DIDI_SONGS_25_February_2022_1646.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "605": {
      "src": "script_dc_LATA_DIDI_SONGS_25_February_2022_1705.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "606": {
      "src": "script_dc_LATA_DIDI_SONGS_25_February_2022_1707.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "607": {
      "src": "script_dc_LATA_DIDI_SONGS_23_November_2022_1854.js",	
      "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
    "hms201": {
        "src": "script_dc_Gulzar_and_Yogesh_26_March_2021_1243.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "hms202": {
        "src": "script_dc_Gulzar_and_Yogesh_26_March_2021_1247.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "hms203": {
        "src": "script_dc_Gulzar_and_Yogesh_26_March_2021_1249.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "year001": {
        "src": "script_dc_2010_to_2021_30_June_2021_1603.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "year002": {
        "src": "script_dc_2010_to_2021_30_June_2021_1645.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "year003": {
        "src": "script_dc_2010_to_2021_30_June_2021_1648.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "year004": {
        "src": "script_dc_2000_to_2009_30_June_2021_1651.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "year005": {
        "src": "script_dc_2000_to_2009_30_June_2021_1651.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "year006": {
        "src": "script_dc_2000_to_2009_30_June_2021_1656.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "year007": {
        "src": "script_dc_1990_to_1999_30_June_2021_1714.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "year008": {
        "src": "script_dc_1990_to_1999_30_June_2021_1715.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "year009": {
        "src": "script_dc_1990_to_1999_30_June_2021_1717.js",	
        "note2":  "<b>Note: </b>Identify Line2/ लाइन 2 को पहचानें."
   },
     "sp001": {
        "src": "script_dc_science_25_March_2021_1931.js",	
        "note2":  "<b>Note: </b>Answers are in English   and Clues are in Devanagari."
   },
     "sp002": {
        "src": "script_dc_science_25_March_2021_1934.js",	
        "note2":  "<b>Note: </b>Answers are in English   and Clues are in Devanagari."
   },
     "sp003": {
        "src": "script_dc_science_25_March_2021_1936.js",	
        "note2":  "<b>Note: </b>Answers are in Devanagari and Clues are in English."
   },
     "sp004": {
        "src": "script_dc_science_25_March_2021_1937.js",	
        "note2":  "<b>Note: </b>Answers are in Devanagari and Clues are in English."
   },
     "mg001": {
        "src": "script_dc_marathiGani_26_March_2021_1321.js",	
        "note2":  "<b>Note: </b>गाण्याची दुसरी ओळ ओळखा."
   },
     "mg002": {
        "src": "script_dc_marathiGani_26_March_2021_1323.js",	
        "note2":  "<b>Note: </b>गाण्याची दुसरी ओळ ओळखा."
   },
     "mg003": {
        "src": "script_dc_marathiGani_26_March_2021_1326.js",	
        "note2":  "<b>Note: </b>गाण्याची दुसरी ओळ ओळखा."
   },
     "mg004": {
        "src": "script_dc_marathiGani_26_March_2021_1328.js",	
        "note2":  "<b>Note: </b>गाण्याची दुसरी ओळ ओळखा."
   },
     "mg005": {
        "src": "script_dc_marathiGani_26_March_2021_1335.js",	
        "note2":  "<b>Note: </b>गाण्याची दुसरी ओळ ओळखा."
   },
     "mm001": {
        "src": "script_dc_marathiProverbs_26_March_2021_1257.js",	
        "note2":  "<b>Note: </b>वर्णनावरुन म्हणी ओळखा."
   },
     "mm002": {
        "src": "script_dc_marathiProverbs_26_March_2021_1259.js",	
        "note2":  "<b>Note: </b>वर्णनावरुन म्हणी ओळखा."
   },
     "mm003": {
        "src": "script_dc_marathiProverbs_26_March_2021_1300.js",	
        "note2":  "<b>Note: </b>वर्णनावरुन म्हणी ओळखा."
   },
     "mm004": {
        "src": "script_dc_marathiProverbs_26_March_2021_1309.js",	
        "note2":  "<b>Note: </b>वर्णनावरुन म्हणी ओळखा."
   },
     "misc001": {
        "src": "script_dc_vbsMumbai.js",	
        "note2":  "<b>Note: </b>Identify vbsMumbai Programme/ VbsMumbai कार्यक्रम को पहचानें."
   },
     "spt001": {
        "src": "script_dc_sports1_by_Vidyesh_Ranade.js",	
        "note2":  "<b>Note: </b>Identify Sports Legend/ खिलाडी को पहचानें."
   },
  })[title]




// VR: added to expand the Across/ Down clues section
function showAccordian(id) {
    var x = document.getElementById(id);
    var y = document.getElementById('acrossBtn');
    var z = document.getElementById('downBtn');
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
        if (id === 'across') {
            y.innerHTML = 'Close Across';					
        } else if (id === 'down') {
            z.innerHTML = 'Close Down';					
        }
    } else { 
        x.className = x.className.replace(" w3-show", "");
        if (id === 'across') {
            y.innerHTML = 'Open Across';					
        } else if (id === 'down') {
            z.innerHTML = 'Open Down';					
        }
    }
}

// VR: added to show timer
function countDownTimer() {
    // Set the date we're counting down to
    // var countDownDate = new Date("Mar 18, 2021 12:52:00").getTime();
    var countDownDate = new Date().getTime() + (1000 * 60  * 15) // added 15 minutes
    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();
        
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
        
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
    // Output the result in an element with id="countDownTimer"
    //   document.getElementById("countDownTimer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    document.getElementById("countDownTimer").innerHTML = 'Time Remaining: ' + minutes + "m " + seconds + "s ";
        
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countDownTimer").innerHTML = "EXPIRED";
    }
    }, 1000);

}

// to remove space before, in between and after 
// to remove comma
function myTrim(x) {
  return x.replace(/\s+|\s+|,+/gm,'');
}

  
/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter(function(el) {
    return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
  })
}