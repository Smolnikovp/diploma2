modules.define('button', ['i-bem__dom', 'editor'], function (provide, BEMDOM, Editor) {
    provide(BEMDOM.decl(this.name,
        {
            onSetMod: {
                js: {
                    inited:function () {
                        this.bindTo('pointerclick', function(e) {
                            console.log()
                            Editor.addBlock(this.params.column, this.params.block)
                        });
                    }
                }
            }
        })
    );
});
