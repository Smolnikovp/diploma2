modules.define('popup', ['i-bem__dom'], function(provide, BEMDOM, Popup) {

    provide(Popup.decl({ modName: 'add-block', modVal: true},
        {
            onSetMod :
                {
                    js: {
                        inited: function () {
                            this.__base.apply(this, arguments);

                            var _this = this,
                                button_cancel = this.findBlockInside('button__cancel'),
                                button_ok = this.findBlockInside('button__good'),
                                select = _this.findBlockInside({ blockName : 'select' });

                            button_cancel.bindTo('pointerclick', function () {
                                _this.setMod('visible', false);
                            });

                            button_ok.bindTo('pointerclick', function () {
                                var option = select.params.options[select.getVal() - 1];

                                if(option && option.code){
                                    _this.findBlocksInside('edit-input').map(function(input){
                                        var data = input.getData();
                                        option.code[data[0]] = data[1];
                                    });

                                    option.code.mods.edit = false;

                                    _this.domElem.trigger('close', option.code);
                                }

                                _this.setMod('visible', false);
                            });

                            select.on('change', function(e){
                                var option = this.params.options[this.getVal() - 1];

                                if(option && option.code){
                                    option.code.mods = option.code.mods || {};
                                    option.code.mods.edit = true;

                                    BEMDOM.update(
                                        _this.findBlockInside('preview').domElem,
                                        BEMHTML.apply(option.code)
                                    );
                                }
                            });
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
