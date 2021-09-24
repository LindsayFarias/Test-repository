class HoneyMakerBee extends Bee {
    constructor() {
        super(10, 'make honey');
        this.honeyPot = 0 ;
    }

    makeHoney(){
        this.honeyPot++;
    }

    giveHoney(){
        this.honeyPot--;
    }
    
  };
