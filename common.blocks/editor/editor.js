modules.define('editor', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited:function () {

                        BEMDOM.update(this.domElem,
                            BEMHTML.apply(
                                {
                                    block: 'column',
                                    js: {id: 0},
                                    content: []
                                }
                            )
                        );
                    }
                }
            }
        },
        {})
    );

});
