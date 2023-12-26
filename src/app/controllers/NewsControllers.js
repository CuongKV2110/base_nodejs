class NewsController {
    //[Get] news
    index(req, res) {
        res.render('news');
        console.log('asasa');
    }

    show(req, res) {
        res.render('search');
    }
}
 
module.exports = new NewsController();
