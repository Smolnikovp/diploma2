block('picturebox')(
    elem('heading').tag()('h3'),
    content()(
        function() {
            return [
                {
                    block: 'image',
                    url: 'http://www.lotuscars.com/sites/default/files/styles/news_slider/public/news/44654_Lotus-cars-range-21-January-2016_4000x2630.jpg?itok=qJH2ZeOc'
                },
                {
                    elem: 'heading',
                    content: '%Введите заголовок%'
                },
                {
                    elem: 'body',
                    content: [
                        {
                            block: 'text',
                            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus nunc neque, eget mattis risus sollicitudin eu.'
                        },
                        {
                            block: 'link',
                            url: '#',
                            content: 'Далее...'
                        }
                    ]
                }
            ]

        }
    )
)
