const getFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('community getFeedFunc');
}

const postFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('community postFeedFunc');
}

const putFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('community putFeedFunc');
}

const deleteFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('community deleteFeedFunc');
}


module.exports.getFeedFunc = getFeedFunc
module.exports.postFeedFunc = postFeedFunc
module.exports.putFeedFunc = putFeedFunc
module.exports.deleteFeedFunc = deleteFeedFunc