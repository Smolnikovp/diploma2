block('popup').mod('add-block', true)(
    js()(true),
    content()(
        function(){
            return [
                {
                    block : 'select',
                    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
                    val : 1,
                    text : '—',
                    options : [
                        { val : 1, text : 'блок 1' },
                        { val : 2, text : 'блок 2' },
                        { val : 3, text : 'блок 3' }
                    ]
                },
                {
                    block: 'preview'
                },
                {
                    block: 'button',
                    mix: { elem: 'good' },
                    content: 'OK'
                },
                {
                    block: 'button',
                    mix: { elem: 'cancel' },
                    content: 'Cancel'
                }
            ]
        }
    )
)
