modules.define('popup', ['i-bem__dom'], function(provide, BEMDOM, Popup) {

    provide(Popup.decl({ modName: 'add-block', modVal: true},
        {
            onSetMod :
                {
                    js: {
                        inited: function () {
                            this.__base.apply(this, arguments);

                            var button_cancel = this.findBlockInside('button__cancel'),
                                button_ok = this.findBlockInside('button__good'),
                                _this = this;

                            button_cancel.bindTo('pointerclick', function () {
                                _this.setMod('visible', false);
                            });

                            button_ok.bindTo('pointerclick', function () {
                                _this.domElem.trigger('close', _this.findBlockInside({ blockName : 'select' }).getVal());
                                _this.setMod('visible', false);
                            });

                            //_this.findBlockInside({ blockName : 'select' }).setVal([
                            //    { val : 1, text : '1' },
                            //    { val : 2, text : '2' },
                            //    { val : 3, text : '3' }
                            //]);

                            var select = _this.findBlockInside({ blockName : 'select' });

                            select.ctx.options = [
                                    { val : 1, text : '1' },
                                    { val : 2, text : '2' },
                                    { val : 3, text : '3' }
                            ]
                        }
                    },

                    visible : {
                        '' : function(){
                            this.__base.apply(this, arguments);
                            this.domElem.trigger('close');
                        }
                    }
                }
        },
        {}));
});
