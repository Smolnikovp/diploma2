modules.define('popup', ['i-bem__dom', 'column'], function(provide, BEMDOM, Column) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod :
                {
                    js: {
                        inited: function () {
                            var button_cancel = this.findBlockInside('button_cancel'),
                                button_ok = this.findBlockInside('button_good'),
                                _this = this;

                            button_cancel.bindTo('pointerclick', function () {
                                _this.setMod('visible', false);
                            })
                        }
                    },
                    visible: {
                        '': function () {
                            console.log(this.findBlockInside('select__test'));
                            this.domElem.trigger('close', 'test Z')
                        }
                    }
                }

        },
        {

        }));
});
