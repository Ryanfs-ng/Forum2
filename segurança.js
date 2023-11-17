var buttonPress = function (){
    var com = document.getElementById('comments');
    var filterWords = ["hitler", "porra", "caralho"];
    // "i" is to ignore case and "g" for global
    var rgx = new RegExp("("+filterWords.join("|")+")", "gi");
    com.value = com.value.replace(rgx, "**");

    // change this to 'return true;' when you will be sure that all your bad words are catched and the form is ready to be submitted
    return false;
}