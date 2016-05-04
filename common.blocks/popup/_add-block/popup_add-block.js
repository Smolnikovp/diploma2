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
                                var blockNum = _this.findBlockInside({ blockName : 'select'}).getVal(),
                                    addBlockName;

                                _this.setMod('visible', false);

                                _this.domElem.trigger('close', blockNum);

                                switch (blockNum){
                                    case 1: addBlockName = "latest news";
                                        break;
                                    case 2: addBlockName = "hey";
                                        break;
                                }

                                console.log('------------------------------------');
                                console.log(addBlockName);
                            });
                        }
                    }
                }

        },
        {

        }));
});
