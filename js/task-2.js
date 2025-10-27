class Storage{
    #items;
    constructor(params){
        this.#items = params;
    }
    
    getItems(){
        return this.#items;
    }
    
    addItem(item){
        this.#items.push(item);
    }
    
    removeItem(item){
        let stor = []
        stor = this.#items.filter(elem => elem != item);
        this.#items = stor;
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

storage.removeItem("Scaner");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

console.log("   АВТОР НАВЧАЛЬНОЇ ПРОГРАМИ ФАН КОСМІЧНИХ РЕЙНДЖЕРІВ.\n"+
"Я ТЕЖ З НИХ ТАЩИВСЯ, ТА Й ДОСІ, ХОЧА ВЖЕ ЗА 30, СІМ'Я І Т.Д..\n"+
"А ЩЕ Є ОКРЕМИЙ САЙТ З МІНІІГРАМИ З ОСНОВНОЇ ГРИ, ЯКИЙ МОЖЛИВО\n"+
"НАПИСАНИЙ НА JS. ЯКЩО ВАМ НЕ ЗАВАЖАЄ ЦЕЙ КОМЕНТ ТО НЕ ВРАХОВУЙТЕ\n"+
"ЙОГО ЯК ПОМИЛКУ");
