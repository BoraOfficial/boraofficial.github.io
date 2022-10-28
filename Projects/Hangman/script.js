/*
WORDS ARE STORED HERE DO NOT CHEAT :D
Sounds from http://soundfxnow.com, and http://www.soundjay.com
Fonts from Google Fonts
*/
document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            console.log("Do you think that it's that easy to defeat my anti-cheating precautions? If you're reading this then it is probably that easy...")
            return false;
        } else {
            return true;
        }
};

window.oncontextmenu = function () {
    return false;
}
$(document).keydown(function (event) {
    if (event.keyCode == 123) {
        return false;
    }
    else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
        return false;
    }
});

function slugify(text) {
    var trMap = {
        'çÇ':'c',
        'ğĞ':'g',
        'şŞ':'s',
        'üÜ':'u',
        'ıİ':'i',
        'öÖ':'o'
    };
    for(var key in trMap) {
        text = text.replace(new RegExp('['+key+']','g'), trMap[key]);
    }
    return  text.replace(/[^-a-zA-Z0-9\s]+/ig, '') // remove non-alphanumeric chars
                .replace(/\s/gi, "") // convert spaces to dashes
                .replace(/[-]+/gi, "-") // trim repeated dashes
                .toLowerCase();

}

(function($, window, undefined){

  Hangman = {
    init: function(words){
      this.words = words,
      this.hm = $(".hangman"),
      this.msg = $(".message"),
      this.msgTitle = $(".title"),
      this.msgText = $(".text"),
      this.restart = $(".restart"),
      this.wrd = this.randomWord(),
      this.correct = 0,
      this.guess = $(".guess"),
      this.wrong = $(".wrong"),
      this.wrongGuesses = [],
      this.rightGuesses = [],
      this.guessForm = $(".guessForm"),
      this.guessLetterInput = $(".guessLetter"),
      this.goodSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3"),
      this.badSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3"),
      this.winSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3"),
      this.loseSound = new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/lose.mp3"),
      this.setup();
    },


    setup: function(){
      this.binding();
      this.sounds();
      this.showGuess(this.wrongGuesses);
      this.showWrong();

    },

    
    sounds: function(){  
      this.badSound.volume = .4;
      this.goodSound.volume = .4;
      this.winSound.volume = .8;
      this.loseSound.volume = .4;
      
    },
    
    
    binding: function(){
      this.guessForm.on("submit", $.proxy(this.theGuess, this));
      this.restart.on("click", $.proxy(this.theRestart, this));
    },


    playSound: function(sound){
      this.stopSound(sound);
      this[sound].play();
    },


    stopSound: function(sound){
      this[sound].pause();
      this[sound].currentTime = 0;

    },


    theRestart: function(e){
      e.preventDefault();
      this.stopSound("winSound");
      this.stopSound("loseSound");
      this.reset();
    },


    theGuess: function(e){
      e.preventDefault();
      var guess = slugify(this.guessLetterInput.val());
      if(guess.match(/[a-zA-Z]/) && guess.length == 1){
        if($.inArray(guess, this.wrongGuesses) > -1 || $.inArray(guess, this.rightGuesses) > -1){
          this.playSound("badSound");
          this.guessLetterInput.val("").focus();
        }
        else if(guess) {
          var foundLetters = this.checkGuess(guess);
          if(foundLetters.length > 0){
            this.setLetters(foundLetters);
            this.playSound("goodSound");
            this.guessLetterInput.val("").focus();
          } else {
            this.wrongGuesses.push(guess);
            if(this.wrongGuesses.length == 10){
              this.lose();
            } else {
              this.showWrong(this.wrongGuesses);
              this.playSound("badSound");
            }
            this.guessLetterInput.val("").focus();
          }
        }
      } else {
        this.guessLetterInput.val("").focus();
      }
    },

    randomWord: function(){
      var rng = Math.floor(Math.random() * this.words.length)
      console.log(rng);
      document.getElementById("image").src= "https://www.countries-ofthe-world.com/flags-normal/flag-of-"+ENwordList[ rng].replaceAll(' ', '-').replaceAll('&', 'and')+".png";
      console.log(ENwordList[ rng]);
      return this._wordData(slugify(this.words[ rng]));
    },


    showGuess: function(){
      var frag = "<ul class='word'>";
      $.each(this.wrd.letters, function(key, val){
        frag += "<li data-pos='" +  key  + "' class='letter'>*</li>";
      });
      frag += "</ul>";
      this.guess.html(frag);
    },


    showWrong: function(wrongGuesses){
      if(wrongGuesses){
        var frag = "<ul class='wrongLetters'>";
        frag += "<p>Olmayan harfler: </p>";
        $.each(wrongGuesses, function(key, val){
          frag += "<li>" + val + "</li>";
        });
        frag += "</ul>";
      }
      else {
        frag = "";
      }

      this.wrong.html(frag);
    },


    checkGuess: function(guessedLetter){
      var _ = this;
      var found = [];
      $.each(this.wrd.letters, function(key, val){
        if(guessedLetter == val.letter.toLowerCase()){
          found.push(val);
          _.rightGuesses.push(val.letter);
        }
      });
      return found;

    },


    setLetters: function(letters){
      var _ = this;
      _.correct = _.correct += letters.length;
      $.each(letters, function(key, val){
        var letter = $("li[data-pos=" +val.pos+ "]");
        letter.html(val.letter);
        letter.addClass("correct");

        if(_.correct  == _.wrd.letters.length){
          _.win();
        }
      });
    },


    _wordData: function(word){

      return {
        letters: this._letters(word),
        word: word.toLowerCase(),
        totalLetters: word.length
      };
    },


    hideMsg: function(){
      this.msg.hide();
      this.msgTitle.hide();
      this.restart.hide();
      this.msgText.hide();
    },


    showMsg: function(){
      var _ = this;
      _.msg.show("blind", function(){
        _.msgTitle.show("bounce", "slow", function(){
          _.msgText.show("slide", function(){
            _.restart.show("fade");
          });

        });

      });
    },


    reset: function(){
      this.hideMsg();
      this.init(this.words);
      this.hm.find(".guessLetter").focus();

    },


    _letters: function(word){
      var letters = [];
      for(var i=0; i<word.length; i++){
        letters.push({
          letter: word[i],
          pos: i
        });
      }
      console.log(word);
      return letters;

    },


    rating: function(){
      var right = this.rightGuesses.length,
          wrong = this.wrongGuesses.length || 0,
          rating = {
            rating: Math.floor(( right / ( wrong + right )) * 100),
            guesses: (right + wrong)
            
          };
      return rating;
    },

    win: function(){
      var rating = this.rating();
      this.msgTitle.html("İnanılamaz! Kazandın.");
      // this is messy
      this.msgText.html("You found the country after <span class='highlight'>" + rating.guesses + "</span> trys!<br>Skor: <span class='highlight'>" + rating.rating + "%</span>");
      this.showMsg();
      this.playSound("winSound");

    },


    lose: function(){
      this.msgTitle.html("You lost... The country was <span class='highlight'>"+ this.wrd.word +"</span>");
      this.msgText.html("Try again?");
      this.showMsg();
      this.playSound("loseSound");
    }
  
  };

// Don't cheat ok?
  var wordList = ["Afganistan","Arnavutluk","Cezayir","Andorra","Angola","Arjantin","Ermenistan","Avustralya","Avusturya","Azerbaycan","Bahamalar" , "Bahreyn","Bangladeş","Barbados","Belarus","Belçika","Belize","Benin","Butan","Bolivya","Bosna Hersek","Botsvana","Brezilya" , "Brunei","Bulgaristan","Burkina Faso","Burundi","Kamboçya","Kamerun","Kanada","Cape Verde","Orta Afrika Cumhuriyeti","Çad","Şili","Çin " , "Kolombiya","Komorlar","Kongo","Kosta Rika","Hırvatistan","Küba","Çek Cumhuriyeti","Danimarka","Cibuti","Dominika","Dominik Cumhuriyeti" ,"Ekvador","Mısır","El Salvador","Ekvator Ginesi","Eritre","Estonya","Etiyopya","Fiji","Finlandiya","Fransa"," Gabon ", "Gambiya","Gürcistan","Almanya","Gana","Yunanistan","Grenada","Guatemala","Gine","GineBissau","Guyana","Haiti","Honduras ", "Macaristan","İzlanda","Hindistan","Endonezya","İran","Irak","İrlanda","İsrail","İtalya","Fildişi Sahili","Jamaika","Japonya" ," Ürdün","Kazakistan","Kenya","Kiribati","Kuzey Kore","Güney Kore", "Kosova","Kuwa it","K yrgystan","Laos","Letonya","Lesotho","Liberya","Libya","Lihtenştayn","Litvanya","Lüksemburg","Madagaskar","Malavi ","Malezya" ,"Maldivler","Mali","Malta","Marshall Adaları","Moritanya","Mauritius","Meksika","Mikronezya","Moldova" ,"Monako","Moğolistan" ,"Karadağ", "Fas","Mozambik","Myanmar","Namibya","Nauru","Nepal","Hollanda","Yeni Zelanda","Nikaragua","Nijer","Nijerya", "Norveç"," Umman","Pakistan","Palau","Panama","Papua Yeni Gine","Paraguay","Peru","Filipinler","Polonya","Portekiz","Katar", "Romanya"," Rusya","Ruanda","St Kitts & Nevis","St Lucia","Saint Vincent ve Grenadinler","Samoa","San Marino","Sao Tome ve Principe","Suudi Arabistan","Senegal","Sırbistan","Seyşeller","Sierra Leone","Singapur","Slovakya","Slovenya","Solomon Adaları","Somali","Güney Afrika","Güney Sudan" ,"İspanya" , "Sri Lanka","Sudan","Surinam","Svaziland","İsveç","İsviçre","Suriye","Tayvan","Tacikistan","Tanzanya","Tayland", "Togo", "Tonga", "Trinidad ve Tobago", "Tunus", "Türkiye","Türkmenistan","Tuvalu","Uganda","Ukrayna","Birleşik Arap Emirlikleri","Birleşik Krallık","Amerika Birleşik Devletleri","Uruguay","Özbekistan","Vanuatu","Vatikan Şehir","Venezuela ","Vietnam","Yemen","Zambiya","Zimbabve"];

  var ENwordList = ["Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas" , "Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia-Herzegovina","Botswana","Brazil", "Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Central African Republic","Chad","Chile","China" , "Colombia","Comoros","Congo","Costa Rica","Croatia","Cuba","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Ivory Coast","Jamaica","Japan" ,"Jordan","Kazakhstan","Kenya","Kiribati","Korea North","Korea South", "Kosovo","Kuwait","Kyrgystan","Laos","Latvia","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia" ,"Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova" ,"Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua", "Niger","Nigeria","Norway","Oman","Pakistan","Palau","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland", "Portugal","Qatar","Romania","Russia","Rwanda","St Kitts & Nevis","St Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Sudan","Spain" ,"Sri Lanka","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan", "Tanzania","Thailand","Togo","Tonga","Trinidad & Tobago", "Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];

  Hangman.init(ENwordList);

})(jQuery, window);
