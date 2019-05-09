const getCommentFunc = (req,res,next)=>{
    // let user_id = await req.user.id //user authentication
    // let array = [user_id];
    // let result = await SQLQuery.getFeedData(array);

    // console.log(result);
    // res.send(result); //user's feed in a format of array object
}

const postCommentFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('profile postCommentFunc');
}

const putCommentFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('profile putCommentFunc');
}

const deleteCommentFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('profile deleteCommentFunc');
}

module.exports.getCommentFunc = getCommentFunc;
module.exports.postCommentFunc = postCommentFunc;
module.exports.putCommentFunc = putCommentFunc;
module.exports.deleteCommentFunc = deleteCommentFunc;
