block('news-1').mod('edit', true)(
    js()(true),
    elem('heading')(tag()('h2')),
    content()(
        function(){
            return [
                {
                    elem: 'heading',
                    content: {
                        block: 'edit-input',
                        field: 'heading'
                    }
                },
                {
                    elem: 'body',
                    content: [
                        {
                            block: 'edit-input',
                            field: 'title',
                            maxLength: 550
                        },
                        {
                            block: 'edit-input',
                            field: 'description',
                            maxLength: 550
                        }
                    ]
                }
            ]
        }
    )
)
