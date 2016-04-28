modules.define('popup', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod : {
                js : {
                    inited : function(){
                        var button = this.findBlockInside('button_cancel');
                        var select = this.findBlockInside('select');

                        console.log(button);
                        console.log(select);

                        //button.bindTo('pointerclick', function(){
                        //    console.log(1)
                        //})
                    }
                }
            }
        },
        {
            //live : function(){
            //    this.liveBindTo('button', 'pointerclick', function(){
            //        console.log(1)
            //    })
            //}
        }));
});
