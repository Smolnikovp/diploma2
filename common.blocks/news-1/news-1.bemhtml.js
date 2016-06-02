block('news-1')(
    js()(true),
    elem('heading')(tag()('h2')),
    content()(
        function(){
            return [
                {
                    elem: 'heading',
                    content: {
                        block: 'text',
                        content: this.ctx.heading
                    }
                },
                {
                    elem: 'body',
                    content: [
                        {
                            block: 'text',
                            content: this.ctx.title
                        },
                        {
                            block: 'link',
                            url: this.ctx.description,
                            content: this.ctx.description
                        }
                    ]
                }
            ]
        }
    )
)
