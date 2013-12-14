
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.show = function(req, res) {
    var msg = req.flash ? req.flash('info') : 'no info';
    res.render('form', {title: 'Form Demo', message: msg});
};
 
exports.save = function(req,res) {
    console.log(req.body);
    var msg = "I know that you ask for : " + req.body.color;
    res.render('form', {title: 'Form Demo', message: msg});
};