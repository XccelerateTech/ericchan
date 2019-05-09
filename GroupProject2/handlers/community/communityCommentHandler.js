const getCommentFunc = (req,res,next)=>{

    res.send('community getCommentFunc');
}

const postCommentFunc = (req,res,next)=>{

    res.send('community postCommentFunc');
}

const putCommentFunc = (req,res,next)=>{

    res.send('community putCommentFunc');
}

const deleteCommentFunc = (req,res,next)=>{

    res.send('community deleteCommentFunc');
}

module.exports.getCommentFunc = getCommentFunc;
module.exports.postCommentFunc = postCommentFunc;
module.exports.putCommentFunc = putCommentFunc;
module.exports.deleteCommentFunc = deleteCommentFunc;
