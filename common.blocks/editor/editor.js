modules.define('editor', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited:function () {
                        this.__self.content = this.__self._getContent();
                        this.__self.baseDom = this.domElem;
                        this.__self._normalize();
                        this.__self.render();
                    }
                }
            }
        },
        {
            content: [],
            normalizedContent: [],

            render: function () {
                BEMDOM.update(this.baseDom,
                    BEMHTML.apply(this.normalizedContent)
                );
            },

            addBlock: function (colId, b) {
                var column = this.content[colId],
                    before = column.content.slice(0, b),
                    after = column.content.slice(b);

                before.push(
                    {
                        block: 'new-block',
                        content: Math.round(Math.random() * 100)
                    }
                );

                column.content = before.concat(after);

                this._setContent(this.content);
                this._normalize();
                this.render();
            },

            _normalize: function () {
                var _this = this;

                _this.normalizedContent = [];

                this.content.forEach(function (column, columnId) {
                    var columns = _this.normalizedContent;

                    columns[columnId] = {
                        block: 'column',
                        content: [
                            _this._getButton(columnId, 0)
                        ]
                    };

                    column.content.forEach(function (block, blockId) {
                        columns[columnId].content.push(block, _this._getButton(columnId, blockId + 1));
                    });
                });
            },

            _normalizeProd: function () {
                var _this = this;

                _this.normalizedContent = [];

                this.content.forEach(function (column, columnId) {
                    var columns = _this.normalizedContent[columnId] = { block: 'column', content: [] };

                    column.content.forEach(function (block, blockId) {
                        columns.content.push(block);
                    });
                });
            },

            _getButton: function (column, block) {
                return {
                    block: 'button',
                    text: '+',
                    js: {column: column, 'block': block}
                }
            },

            _getContent: function () {
                if(localStorage.getItem('test')){
                    return JSON.parse(localStorage.getItem('test'));
                } else {
                    return [
                        {
                            block: 'column',
                            content: []
                        }
                    ]
                }
            },

            _setContent: function (content) {
                localStorage.setItem('test', JSON.stringify(content));
            }
        })
    );

});
