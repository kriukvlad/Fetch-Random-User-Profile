var url = 'https://randomuser.me/api/';
var btn = document.querySelector('#btn');
var fullNameDisplay = document.querySelector('#fullName');
var userName = document.querySelector('#userName');
var avatar = document.querySelector('#avatar');
var city = document.querySelector('#city');
var email = document.querySelector('#email');

btn.addEventListener('click', addBtnClick);

function addBtnClick(){
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)    
    .catch(displayErrors);
};

function handleErrors(res){
    if(!res.ok){
        throw Error(res.status);
    }
    return res;
};

function parseJSON(res){
    return res.json().then(function(parseData){
        return parseData.results[0];
    });
};

function updateProfile(data){
    var fullname = data.name.first + ' ' + data.name.last;
    fullNameDisplay.innerText = fullname;
    
    userName.innerText = data.login.username;
    
    avatar.src = data.picture.medium;

    city.innerText = data.location.city;

    email.innerText = data.email;
};

function displayErrors(err){
    console.log(err);
};