exports.getVideoChat = (req, res) => {
    const roomName = req.params.roomName;
    res.render('videoChat', { roomName });
  };
  
  