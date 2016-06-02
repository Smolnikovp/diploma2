block('edit-input')(
    js()(function(){
        return {
            field: this.ctx.field
        }
    }),
    content()(
        {
            block: 'input'
        }
    )
)
