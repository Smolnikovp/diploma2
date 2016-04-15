modules.define('editor', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited:function () {

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

                        this.__self.renderColumns(this.domElem);
                    }
                }
            }
        },
        {
            live: function(){
                this.liveBindTo('action-button', 'pointerclick', function(e){
                    var columns = this.__self._getColumns(),
                        params = $(e.target).bem('button').params;

                    columns += params.action;

                    this.__self._setColumns(columns);
                    this.__self.renderColumns(this.domElem);
                });

                return false
            },

            //создание массива с колонками, добавление кнопок
            renderColumns: function(content){
                var bemhtml = [],
                    value = this._getColumns();

                for (var i = 0; i < value; i++){
                    bemhtml.push({
                        block: 'column',
                        js: { id : i }
                    });
                };

                bemhtml.push({
                        block: 'button',
                        mix: {block: 'editor', elem: 'action-button'},
                        content: '-',
                        js: { action: -1 }
                    },
                    {
                        block: 'button',
                        mix: {block: 'editor', elem: 'action-button'},
                        content: '+',
                        js: { action: 1 }
                    });

                BEMDOM.update(content,
                    BEMHTML.apply(bemhtml))
            },

            //возвращает контент ячейки columns
            _getColumns: function () {
                return parseInt(localStorage.getItem('columns') || 1)
            },

            _setColumns : function(value){
                localStorage.setItem('columns', value);
            }
        })
    );

});
