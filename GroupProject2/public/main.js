$(".comment").click(function(){
    $('.commentWork').toggle();
})


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

const postTemplate = Handlebars.compile(  //broswer said it is undefined here//
    `
  {{#each post}} 
  {{comment_content}} 
   {{/each}}
  `
);

// function append(){}

// let id

// $(".commentWork").click(function (event) {

//     id = $(event.currentTarget).data('commentWork');
//     console.log(id)
// })

// const reloadPost = (data) => {
//     console.log('trying')
//     console.log(id)
//     $('.commentWork-'+id).html(postTemplate({ post: data }));
//     console.log('No?')
// }

$(".comment").click(function (event) {
    console.log('butt')
    event.preventDefault();
    let id = $(event.currentTarget).data('comment');

    console.log(id)

    axios.get(`/profile/comment/`+id)
        .then((res) => {
            console.log("axios then is working")
            // console.log(res.data, 'X')
            console.log(res + 'hello')
            
            
            $('.commentWork-'+id).html(postTemplate({ post: res.data }));
            // reloadPost(res.data)
        }).catch((err) => {
            console.log(err)
        });

    //   $("a").attr("href", "/profile/comment/" + id);
})
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