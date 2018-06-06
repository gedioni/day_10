//home route

exports.home = function(req, res){
    res.render('home', {title: "Home"})
}

//about route
exports.about = function(req, res){
    res.render('about', {
        title: "About page"
    })
}