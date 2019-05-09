exports.getFeedSQL = 
`select content.personal,feed.feed_content, feed.feed_id, content.id from content inner join feed on content.user_id = feed.user_id and content.feed_content_id = feed.feed_id                                                                             where personal = true;
`

exports.getTextFeedSQL = 
`SELECT CONTENT FROM CONTENT
WHERE PERSONAL = TRUE AND
FEED = TRUE AND
TXT = TRUE AND
USER_ID = $1
`

exports.getPhotoFeedSQL = 
`SELECT CONTENT FROM CONTENT
WHERE PERSONAL = TRUE AND
FEED = TRUE AND
PHOTOANDTEXT = TRUE AND
USER_ID = $1
`

exports.postFeedSQL = 
`INSERT INTO CONTENT (CONTENT,USER_ID,PERSONAL,TXT,FEED,COMMENT,PHOTOANDTEXT)
VALUES($1,$2,TRUE,$3,TRUE,FALSE,$4)
`

exports.putFeedSQL = 
`UPDATE CONTENT
SET CONTENT = $1,
TXT = $2,
PHOTOANDTEXT = $3
WHERE ID = $4
`

exports.deleteFeedSQL = 
`DELETE FROM CONTENT
WHERE ID = $1
`