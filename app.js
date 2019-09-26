let page = document.getElementById('page');
let list = document.getElementById('list');
let container = document.getElementById('container');

let name = document.getElementById('input');
let message = document.getElementById('textarea');
let sendBtn = document.getElementById('send');

let SMS = [];

sendBtn.addEventListener('click', function () {
    const names = document.createElement('li');
    names.innerText = name.value;
    list.appendChild(names);
    name.value = null;
    message.value = null;

    SMS.push({
        "name": name.value,
        "message": message.value
    });
    
    names.addEventListener('click',  function (e) {
        const index = getChildIndex( e.target );

        const sms = SMS[ index ];

        name.value = sms.name;
        message.value = sms.message;
    })

});

var getChildIndex = function(child){
    var parent = child.parentNode;
    var children = parent.children;
    var i = children.length - 1;
    for (; i >= 0; i--){
        if (child == children[i]){
            break;
        }
    }
    return i;
};