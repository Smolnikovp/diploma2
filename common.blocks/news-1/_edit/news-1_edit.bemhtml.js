block('news-1').mod('edit', true)(
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
                            block: 'edit-input'
                        }
                    ]
                }
            ]
        }
    )
)
