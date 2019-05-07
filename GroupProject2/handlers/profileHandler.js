const getFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('profile getFeedFunc');
}

const postFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('profile postFeedFunc');
}

const putFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('profile putFeedFunc');
}

const deleteFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('profile deleteFeedFunc');
}


module.exports.getFeedFunc = getFeedFunc
module.exports.postFeedFunc = postFeedFunc
module.exports.putFeedFunc = putFeedFunc
module.exports.deleteFeedFunc = deleteFeedFunc

