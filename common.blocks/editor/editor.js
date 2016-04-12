modules.define('editor', ['i-bem__dom', 'column'], function(provide, BEMDOM, Column) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited:function () {

                        this.__self._getContent();
                        this.__self._setContent(3);

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
                                    }
                                ]
                            )
                        );
                    }
                }
            }
        },
        {
            _getContent: function () {
                return parseInt(localStorage.getItem('columns') || 1)
            },

            _setContent : function(id){
                localStorage.setItem('columns', JSON.stringify(id));
            }
        })
    );

});
