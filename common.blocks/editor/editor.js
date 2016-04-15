modules.define('editor', ['i-bem__dom', 'column'], function(provide, BEMDOM, Column) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited:function () {

                        //this.__self._getContent();
                        //this.__self._setContent(3);


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

                        this.__self.addContent(this.domElem, 3);
                    }
                }
            }
        },
        {
            addContent: function(content, count){
                var bemhtml = [];

                for (var i = 0; i < count; i++){
                    bemhtml.push({
                        block: 'column',
                        js: { id : i }
                    });
                };

                /*е знаю как лучше сделать, чтоб кнопки оставались в конце массива*/
                bemhtml.push({
                        block: 'button',
                        content: '+'
                    },
                    {
                        block: 'button',
                        content: '-'
                    });
                BEMDOM.update(content,
                    BEMHTML.apply(bemhtml))
            },

            _getContent: function () {
                return parseInt(localStorage.getItem('columns') || 1)
            },

            _setContent : function(id){
                localStorage.setItem('columns', JSON.stringify(id));
            }
        })
    );

});
