block('edit-input')(
    js()(function(){
        return {
            field: this.ctx.field,
            maxLength: this.ctx.maxLength
        }
    }),
    content()(
        {
            block: 'input',
            placeholder: 'Введите текст'
        }
    )
)
