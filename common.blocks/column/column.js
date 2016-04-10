modules.define('column', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited:function () {
                        this.__self.content = this.__self._getContent();
                        this.__self.baseDom = this.domElem;
                        this.__self.id = this.params.id;
                        this.__self._normalize();
                        this.__self.render();
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
                    _this.addBlock(e.target.params.column, e.target.params.block)
                });

                return false
            },

            render: function () {
                BEMDOM.update(this.baseDom,
                    BEMHTML.apply(this.normalizedContent)
                );
            },

            addBlock: function (colId, b) {
                var before = this.content.slice(0, b),
                    after = this.content.slice(b);

                before.push(
                    {
                        block: 'new-block',
                        content: Math.round(Math.random() * 100)
                    }
                );

                this.content = before.concat(after);

                this._setContent(this.content);
                this._normalize();
                this.render();
            },

            _normalize: function () {
                var _this = this;

                _this.normalizedContent = [];

                _this.normalizedContent.push(_this._getButton(0));
                _this.content.forEach(function (block, blockId) {
                    _this.normalizedContent.push(block, _this._getButton(blockId + 1));
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

            _getButton: function (block) {
                return {
                    block: 'button',
                    text: '+',
                    js: {column: this.id, 'block': block}
                }
            },

            _getContent: function () {
                if(localStorage.getItem('test')){
                    return JSON.parse(localStorage.getItem('test'));
                }
                return [];
            },

            _setContent: function (content) {
                localStorage.setItem('test', JSON.stringify(content));
            }
        })
    );

});
