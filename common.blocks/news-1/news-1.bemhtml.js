block('news-1')(
    js()(true),
    elem('heading')(tag()('h2')),
    content()(
        function(){
            return [
                {
                    elem: 'heading',
                    content: 'Новости'
                },
                {
                    elem: 'body',
                    content: [
                        {
                            block: 'link',
                            content: '2'
                        },
                        {
                            block: 'link',
                            content: '2'
                        }
                    ]
                }
            ]
        }
    )
)
