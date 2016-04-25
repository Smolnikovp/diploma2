modules.define('page', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited : function () {
                        BEMDOM.update(this.domElem,
                        BEMHTML.apply(1))
                    }
                }
            }
        },
        {

        }
    ));

});
