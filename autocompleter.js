var BAD_KEYS = { '91': 1, '92': 1, '93': 1};

// Query Wikipedia
function searchWikipedia(term) {
    var url = 'http://en.wikipedia.org/w/api.php?action=opensearch'
        + '&format=json' 
        + '&search=' + encodeURI(term);
    return Rx.DOM.Ajax.jsonpRequest(url);
}

var autocompleteElem = document.getElementById('autocomplete');
var autocompleteMenu = document.getElementById('autocomplete-menu');

function getKeyCode (e) {
    return (evt.which) ? evt.which : event.keyCode;
}

function relevantKeys (keycode) {
    return keycode === 8 || 
        (keycode > 46 && !(keycode in BAD_KEYS));
}

function getInputValue (input) {
    return input.value;
}

function isNotBlank (input) {
    return input != null && input.length > 0;
}

function htmlInputEvents (input) {
    var queryObservable = Rx.DOM.fromEvent(input, 'keyup')
        .map(getKeyCode)
        .filter(relevantKeys)
        .map(getInputValue)
        .filter(isNotBlank);
}

function blurIE ()


