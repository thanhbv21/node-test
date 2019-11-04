var express = require('express');
var router = express.Router();

const data = [{
    id: '1',
    image: 'https://paulryan.com.au/wp-content/uploads/2015/01/19abc0ee-87b1-49d2-9085-d32ba232331dbkimage-FCE5F1DF.jpg',
    title: 'Introduce Yourself (Example Post)',
    content: 'This is an example post, originally published as part of Blogging University. Enroll in one of our ten programs, and start your blog right.',
    url: 'https://thanhbv.photo.blog/2019/11/04/welcome-to-my-blog/',
}, {
    id: '2',
    image: 'https://www.w3schools.com/css/img_mountains.jpg',
    title: 'My First Blog Post',
    content: 'This is the first post on my new blog. I’m just getting this new blog going, so stay tuned for more. Subscribe below to get notified when I post new updates.',
    url: 'https://thanhbv.photo.blog/2019/11/04/example-post/',
}
]

router.get('/', function(req, res, next) {
  res.json({
      code: 200,
      data: data,
  });
});

module.exports = router;
