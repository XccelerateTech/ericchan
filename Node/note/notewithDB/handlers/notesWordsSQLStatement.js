exports.getnoteWordsSQL = 
`SELECT id, user_id, content FROM note ORDER BY id ASC`


exports.postnoteWordsSQL =
`INSERT INTO NOTE (id, user_id, content)
VALUES($1,$2,$3)`

exports.putnoteWordsSQL = 
`UPDATE NOTE
SET CONTENT = $1
WHERE ID = $2`

exports.deletenoteWordsSQL = 
`DELETE FROM NOTE
WHERE ID = $1
`

exports.getUserSQL = 
`SELECT * FROM note_users`
// `SELECT FROM note_users
// WHERE username = $1
// WHERE password = $2

