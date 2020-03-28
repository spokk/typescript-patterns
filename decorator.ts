interface Bulka {
	sell(): number;
}

class HotDog implements Bulka {
	public sell(): number {
		return 50;
	}
}

class HotDogDecorator implements Bulka {
	protected delegate: Bulka;

	constructor(delegate: Bulka) {
		this.delegate = delegate;
	}

	public sell(): number {
		return this.delegate.sell();
	}
}

class HotDogWithCatchup extends HotDogDecorator {
	public sell(): number {
		return super.sell() + 15;
	}
}

class HotDogWithMayo extends HotDogDecorator {
	public sell(): number {
		return super.sell() + 7;
	}
}

const myHotDogWithCatchup = new HotDogWithCatchup(new HotDog());
const myHotDogWithMayo = new HotDogWithMayo(new HotDog());
const myHotDogWithCatchupAndMayo = new HotDogWithCatchup(myHotDogWithMayo);

console.log(myHotDogWithCatchup.sell()); // 50 + 15 = 65
console.log(myHotDogWithMayo.sell()); // 50 + 7 = 57
console.log(myHotDogWithCatchupAndMayo.sell()); // 50 + 7 + 15 = 72
