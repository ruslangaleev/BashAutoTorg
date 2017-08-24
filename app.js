VK.init(function() {
    console.warn('suuceeded');
    // API initialization succeeded
    // Your code here
}, function() {
    // API initialization failed
    // Can reload page here
    console.warn('failed');
}, '5.68');

function Message() {
    VK.api("wall.post", {"message": "Hello!"}, function (data) {
        alert("Post ID:" + data.response.post_id);
    });
}

$(document).ready(function(){
    Message();
});