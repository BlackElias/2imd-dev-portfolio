const getAll = (req, res) => {
    console.log(req.params);
    console.log(req.query.user);//it posts your name here
    if(req.query.user){
        const username = req.query.user;
        res.json({
            "message":`GETTING message for username ${username}`
        });
    }else{

        res.json({
            "message": "GETTIG messages"
        });
    }
  }

module.exports.getAll = getAll;
module.exports.getId = getId;
module.exports.post = post;
module.exports.update = update;
module.exports.remove = remove;