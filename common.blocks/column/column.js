modules.define('column', ['i-bem__dom', 'jquery', 'page'], function(provide, BEMDOM, $, Page) {

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
            _content: [],
            _normalizedContent: [],
            _popup: undefined,

            live : function() {
                this.liveBindTo('add-button', 'pointerclick', function(e){
                    var _this = this,
                        target = $(e.currentTarget),
                        targetBem = target.bem('button'),
                        params = targetBem.params;



                    this.__self._showPopup.call(this, function(block){
                        if(block){
                            _this.__self.addRemoveBlock(1, params.column, params.block, _this, block);
                        }
                    });
                });

                this.liveBindTo('remove-button', 'pointerclick', function(e){
                    var _this = this,
                        target = $(e.currentTarget),
                        targetBem = target.bem('button'),
                        params = targetBem.params;

                    _this.__self.addRemoveBlock(0, params.column, params.block, _this);

                });

                return false
            },

            render: function (dom) {
                BEMDOM.update(dom,
                    BEMHTML.apply(this._normalizedContent)
                );
            },

            addRemoveBlock: function (add, colId, b, _this, block) {
                var before = _this.blocks.slice(0, b - (add ? 0 : 1)),
                    after = _this.blocks.slice(b);

                if (add) {
                    before.push(block);
                }

                _this.blocks = before.concat(after);

                this._setContent(_this.blocks, _this.params.id);
                this._normalize(_this.params.id, _this.blocks);
                this.render(_this.domElem);
            },

            _normalize: function (id, content) {
                var _this = this;

                _this._normalizedContent = [];

                _this._normalizedContent.push(_this._getButton(1, id, 0));
                content.forEach(function (block, blockId) {
                    _this._normalizedContent.push(
                        {
                            block: 'column',
                            elem: 'column-wrapper',
                            content: [
                                _this._getButton(0, id, blockId + 1),
                                block
                            ]
                        },
                        _this._getButton(1, id, blockId + 1)
                    );
                });
            },

            _normalizeProd: function () {
                var _this = this;

                _this._normalizedContent = [];

                this._content.forEach(function (column, columnId) {
                    var columns = _this._normalizedContent[columnId] = { block: 'column', content: [] };

                    column._content.forEach(function (block) {
                        columns._content.push(block);
                    });
                });
            },

            _showPopup: function (callback) {
                if (!this.__self._popup) {
                    this.__self._popup = BEMDOM.init($(BEMHTML.apply({
                            block : 'popup',
                            mix : { block : 'test', elem : 'popup' },
                            mods : { 'add-block': true, target : 'position', theme : 'islands', autoclosable: true }
                        })).appendTo('body'))
                }

                var popup = this.__self._popup.bem('popup');

                popup.setPosition();

                popup.setMod('visible', true);

                popup.domElem.one('close', function(e, info){
                    callback(info);
                });
            },

            _getButton: function (add, id, block) {
                return {
                    block: 'button',
                    mix: {block: 'column', elem: (add ? 'add' : 'remove') + '-button'},
                    text: (add ? '+' : '-'),
                    js: {column: id, block: block}
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
