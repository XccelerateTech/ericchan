// module.exports = function addUserToNavbar (user){
//     document.getElementById("userInfo").innerHTML = "{{user}}";
// }

// const axios = require('axios');

// use axios to grab the request username from database first,

function refreshPage() {
    var page_y = document.getElementsByTagName("body")[0].scrollTop;
    window.location.href = window.location.href.split('?')[0] + '?page_y=' + page_y;
}
window.reload = function () {
    setTimeout(refreshPage, 35000);
    if (window.location.href.indexOf('page_y') != -1) {
        var match = window.location.href.split('?')[1].split("&")[0].split("=");
        document.getElementsByTagName("body")[0].scrollTop = match[1];
    }
}

// const postTemplate = Handlebars.compile(  //broswer said it is undefined here//
//     `
//   {{#each post}}
//   <div class="card gedf-card">
//     <div class="card-header">
//         <div class="d-flex justify-content-between align-items-center">
//             <div class="d-flex justify-content-between align-items-center">
//                 <div class="mr-2">
//                     <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
//                 </div>
//                 <div class="ml-2">
//                     <div class="h5 m-0">Hopeinvader</div>
//                     <div class="h7 text-muted">Miracles Lee Cross</div>
//                 </div>
//             </div>
//             <div>
//                 <div class="dropdown">
//                     <button class="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown"
//                         aria-haspopup="true" aria-expanded="false">
//                         <i class="fa fa-ellipsis-h"></i>
//                     </button>
//                     <div class="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
//                         <div class="h6 dropdown-header">Configuration</div>
//                         <a class="dropdown-item" href="#">Save</a>
//                         <a class="dropdown-item" href="#">Hide</a>
//                         <a class="dropdown-item" href="#">Report</a>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     </div>
//     <div class="card-body">
//         <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
//         <a class="card-link" href="#">
//             <h5 class="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
//         </a>


// <textarea class="card-text textedValue" style="border: none" rows="4" cols="20" data-putText="{{@index}}">{{content}}</textarea>

//         {{!-- <p class="card-text"> --}}

//             {{!-- {{content}} --}}

//         {{!-- </p> --}}


//     </div>
//     <div class="card-body icons-box">
//         <div class="d-flex justify-content-between align-items-center">
//             <i class="fas fa-heart icons-first"> 6</i>
//             <i class="fa fa-comment"> 5</i>
//         </div>
//     </div>
//     <div class="card-footer">
//         <a href="#" class="card-link"><i class="far fa-heart"></i> Like</a>
//         <a href="#" class="card-link"><i class="far fa-comment"></i> Comment</a>
//         <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
//         <a href="#" class="card-link putSubmit" data-put="{{@index}}"><i class="fa fa-mail-forward"></i>Edit</a>
//         <a href="#" class="card-link deleteSubmit" data-delete="{{@index}}"><i class="fa fa-mail-forward"></i>Delete</a>
//     </div>
// </div>
  
//   {{/each}}
//   `
// );

// const reloadPost = (data) => {
//     console.log('trying')
//     $('#postBox').html(postTemplate({ post: data }));
//     console.log('No?')
// }

// const reloadPage = (data) => {
//     console.log('trying')
//     $('#postBox').html(postTemplate({ post: data }));
//     console.log('No?')
// }

// const endSaving = (target) => {
//     $(target).prop('disabled', true);
// }

// $(() => {
//   axios.get('/user')
//     .then(function (response) {
//       console.log(response.data);
//       let user = response.data
//       $('#userInfo').html(`<div class="d-flex align-items-center friend-state friends-box navbarUser">
//     <div>
//         <img class="rounded-circle friends-image" src="https://picsum.photos/80/80/?random?image=11" width="30" alt="">
//     </div>
//     <div class="ml-2 h7">` +
//         user +
//         `</div>
// </div>`)

//       // document.getElementById('userInfo').innerHTML(response.data, 'From Server')

//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// })



$("#post").click(function (event) {
    event.preventDefault();
    let postContent = $(".textValue").val()

    axios.post("/profile" + '?data=' + postContent)
        .then((res) => {
            // reloadPage(res.data)

            // let content

            // $(".textedValue").mouseleave(function (event) {
            //     content = $(event.currentTarget).val();
            //     console.log(content);
            // })

            // $(".putSubmit").click(function (event) {
            //     let id = $(event.currentTarget).data('put');
            //     console.log(id);
            //     console.log(content);

            //     endSaving(event.currentTarget);



            //     axios.put("/profile/" + id + "?data=" + content)
            //         .then(res =>

            //             location.reload(true)

            //         )

            // });

            // $(".deleteSubmit").click(function (event) {
            //     let id = $(event.currentTarget).data('delete');
            //     console.log(id);
            //     console.log(typeof id);


            //     axios.delete("/profile/" + id)
            //         .then(res => location.reload(true))
            // })

            location.reload(true)

        }).catch((err) => {
            console.log(err)
        })

})


// $(".comment").click(function (event) {
//     console.log('butt')
//     event.preventDefault();
//     let id = $(event.currentTarget).data('comment');

//     console.log(id)

//     axios.get(`/profile/comment/${id}`)
//         .then((res) => {
//             console.log("axios then is working")
//             // console.log(res.data, 'X')
//             console.log(res + 'hello')
//             reloadNotes(res.data)
//         }).catch((err) => {
//             console.log(err)
//         });

//     //   $("a").attr("href", "/profile/comment/" + id);

// })

let content

$(".textedValue").mouseleave(function (event) {
    content = $(event.currentTarget).text();
    console.log(content);
})

$(".putSubmit").click(function (event) {
    let id = $(event.currentTarget).data('put');
    console.log(id);
    console.log(content);
    
    axios.put("/profile/" + id + "?data=" + content)
        .then(res => location.reload(true))

});

$(".deleteSubmit").click(function (event) {
    let id = $(event.currentTarget).data('delete');
    console.log(id);
    console.log(typeof id);


    axios.delete("/profile/" + id)
        .then(res => location.reload(true))

})