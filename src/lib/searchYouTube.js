
var searchYouTube = (option, callback) => {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${option}}&key=AIzaSyASOsLlMQ6VL3ziXrlUpE2MtVHkF_5RuqU&`)
    .then(response => response.json())
    .then(data => { callback(data.items); });
  // .catch(err => console.log('error message :' err))

 
  // TODO
  // var a = [];
  // $.ajax({
  //   type: 'GET',
  //   url: 'https://www.googleapis.com/youtube/v3/search',
  //   data : {
  //     contentType: 'application/json',
  //     part : 'snippet',
  //     maxResults : 5,
  //     q : option,
  //     key: YOUTUBE_API_KEY,
  //     type : 'video'
  //   },
  //   success: (data) => {
  //     a = data.items;
  //     if(callback) {
  //       callback(a);
  //     }
  //   } 
     
  // });
 
};

window.searchYouTube = searchYouTube;


// part=snippet&maxResults=10&q=soccer&key=${YOUTUBE_API_KEY}
// done(function(data) {
//   // console.log(data);
//   a = data.items;
//   // console.log(a);
// })

// $.ajax({
//     type: 'GET',
//     url:`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${options.key}&q=${options.query}&maxResults=${options.max}`
//   }).done(function(a) {
//     console.log(a);
//   })
// };

