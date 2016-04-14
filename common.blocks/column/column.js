modules.define('column', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited : function () {
                        this.blocks = this.__self._getContent(this.params.id);
                        this.__self._normalize(this.params.id, this.blocks);
                        this.__self.render(this.domElem);
                    }
                }
            }
        },
        {
            content: [],
            normalizedContent: [],

            live : function() {
                var _this = this;

                this.liveInitOnBlockInsideEvent('click', 'button', function(e, data) {
                    _this.addBlock(e.target.params.column, e.target.params.block, this);
                });

                return false
            },

            render: function (dom) {
                BEMDOM.update(dom,
                    BEMHTML.apply(this.normalizedContent)
                );
            },

            addBlock: function (colId, b, _this) {
                var before = _this.blocks.slice(0, b),
                    after = _this.blocks.slice(b);

                before.push(
                    {
                        block: 'new-block',
                        content: Math.round(Math.random() * 100)
                    }
                );

                _this.blocks = before.concat(after);

                this._setContent(_this.blocks, _this.params.id);
                this._normalize(_this.params.id, _this.blocks);
                this.render(_this.domElem);
            },

            _normalize: function (id, content) {
                var _this = this;

                _this.normalizedContent = [];

                _this.normalizedContent.push(_this._getButton(id, 0));
                content.forEach(function (block, blockId) {
                    _this.normalizedContent.push(block, _this._getButton(id, blockId + 1));
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

            _getButton: function (id, block) {
                return {
                    block: 'button',
                    text: '+',
                    js: {column: id, 'block': block}
                }
            },

            _getContent: function (id) {
                var column = localStorage.getItem('column_' + id);
                if(column){
                    return JSON.parse(column);
                }
                return [];
            },

            _setContent: function (content, id) {
                localStorage.setItem('column_' + id, JSON.stringify(content));
            }
        })
    );

});
