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
                            content: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus nunc neque, eget mattis risus sollicitudin eu.',
                            url: '=text'
                        },
                        {
                            block: 'link',
                            content: '2. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus nunc neque, eget mattis risus sollicitudin eu.',
                            url: '=text'
                        }
                    ]
                }
            ]
        }
    )
)
