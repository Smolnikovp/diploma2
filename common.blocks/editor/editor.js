modules.define('editor', ['i-bem__dom', 'column'], function(provide, BEMDOM, Column) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited:function () {

                        this.__self.addButtons(this);

                        BEMDOM.update(this.domElem,
                            BEMHTML.apply(
                                [
                                    {
                                        block: 'column',
                                        js: {id: 0},
                                        content: []
                                    },
                                    {
                                        block: 'column',
                                        js: {id: 1},
                                        content: []
                                    },
                                    {
                                        block: 'column',
                                        js: {id: 2},
                                        content: []
                                    }
                                ]
                            )
                        );
                    }
                }
            }
        },
        {
            addButtons : function(ctx){
                var columns,
                    buttons = [
                        {
                            block: 'button',
                            mods: { add: true },
                            content: '+'
                        },
                        {
                            block: 'button',
                            mods: { add: true },
                            content: '-'
                        }
                    ];

                for (var i = 0; i < localStorage.length; i++){
                    columns = localStorage.getItem('column_' + i);
                }

                console.log(buttons);

                BEMDOM.update(ctx,
                    BEMHTML.apply(buttons))
            }
        })
    );

});
