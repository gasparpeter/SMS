let page = document.getElementById('page');
let list = document.getElementById('list');
let container = document.getElementById('container');

let name = document.getElementById('input');
let message = document.getElementById('textarea');
let sendBtn = document.getElementById('send');

let SMS = [];

let editmode = false;
let editIndex = null;

sendBtn.addEventListener('click', function () {

    if ( editmode && editIndex !== null ) {

        list.children[ editIndex ].innerText = name.value;

        SMS[ editIndex ].name = name.value;
        SMS[ editIndex ].message = message.value;

    }else {
        if (name.value.length <= 0 || message.value.length <= 0) {
            alert('ERROR')
        }else {
            const names = document.createElement('li');
            names.innerText = name.value;
            list.appendChild(names);


            SMS.push({
                "name": name.value,
                "message": message.value
            });

            names.addEventListener('click',  function (e) {
                const index = getChildIndex( e.target );

                const sms = SMS[ index ];

                name.value = sms.name;
                message.value = sms.message;

                editmode = true;
                editIndex = index;
            });

            resetInputs()
        }


    }



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

function resetInputs() {
    name.value = null;
    message.value = null;
}