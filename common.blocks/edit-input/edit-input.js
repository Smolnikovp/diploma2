modules.define('edit-input', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl(this.name,
        {
            getData: function(){
                return [this.params.field, this.findBlockInside('input').getVal().slice(0, this.params.maxLength || 1000)];
            }
        }))
});
