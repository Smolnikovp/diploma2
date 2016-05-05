block('popup').mod('add-block', true)(
    js()(true),
    content()(
        function(){
            var options = [
                {
                    val : 1,
                    text : 'ОК кнопка',
                    code: {
                        block: 'button',
                        content: 'OK',
                        attrs: {
                            style: 'display: block;'
                        }
                    }
                },
                {
                    val : 2,
                    text : 'Не ок кнопка',
                    code: {
                        block: 'button',
                        content: 'Не ОК',
                        attrs: {
                            style: 'display: block;'
                        }
                    }
                },
                {
                    val : 3,
                    text : 'блок 3',
                    code: {
                        block: 'test-block',
                        content: 'test 1'
                    }
                }
            ]
            return [
                {
                    block : 'select',
                    mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
                    text : '—',
                    options : options,
                    js: {
                        options: options
                    }
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
