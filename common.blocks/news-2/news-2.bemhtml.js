block('news-2')(
    js()(true),
    elem('heading').tag()('h2'),
    content()(
        function() {
            return [
                {
                    elem: 'heading',
                    content: 'Новости'
                },
                {
                    elem: 'body',
                    content: [
                        {
                            block: 'row',
                            content: [
                                {
                                    block: 'link',
                                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus nunc neque, eget mattis risus sollicitudin eu.',
                                    url: '=text'
                                }
                            ]
                        },
                        {
                            block: 'row',
                            content: [
                                {
                                    block: 'link',
                                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus nunc neque, eget mattis risus sollicitudin eu.',
                                    url: '=text'
                                }
                            ]
                        }
                    ]
                }
            ];
        }
    )
)

