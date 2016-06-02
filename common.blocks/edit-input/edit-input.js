modules.define('edit-input', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name,
        {
            onSetMod : {
                js : function(){
                    //this.getData();
                }
            },

            getData: function(){
                var data = {},
                    edit_input = this.findBlockInside('input');

                data[this.params.field] = edit_input.getVal();
            }
        }))
});
