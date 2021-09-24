class RetiredForagerBee extends ForagerBee {
    constructor() {
        super(40, 'gamble', false, 'grey');
    }

    forage (){
        return 'I am too old, let me play cards instead'
    }

    gamble (treasure){
        super.forage(treasure)
    }
    
    
  };