module.exports = {
    block : 'page',
    title : 'Главная страница',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem: 'js', url: 'index.bemhtml.js'},
        { elem : 'css', url : 'index.min.css' },
        { block: 'font-awesome'}
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    content : [
        {
            block: 'editor'
        }
    ]
};
