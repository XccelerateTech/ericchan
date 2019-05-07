const getCommentFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('profile getCommentFunc');
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
