const getFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('home getFeedFunc');
}

const postFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('home postFeedFunc');
}

const putFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('home putFeedFunc');
}

const deleteFeedFunc = (req,res,next)=>{
    // console.log(req.originalUrl)
    res.send('home deleteFeedFunc');
}


module.exports.getFeedFunc = getFeedFunc
module.exports.postFeedFunc = postFeedFunc
module.exports.putFeedFunc = putFeedFunc
module.exports.deleteFeedFunc = deleteFeedFunc
