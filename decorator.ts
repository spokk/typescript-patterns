interface HotDog {
	sell(): number;
}

class PlainHotDog implements HotDog {
	public sell(): number {
		return 50;
	}
}

class HotDogDecorator implements HotDog {
	constructor(protected delegate: HotDog) {}

	public sell(): number {
		return this.delegate.sell();
	}
}

class Catchup extends HotDogDecorator {
	public sell(): number {
		return super.sell() + 15;
	}
}

class Mayo extends HotDogDecorator {
	public sell(): number {
		return super.sell() + 7;
	}
}

const myHotDogWithCatchup = new Catchup(new PlainHotDog());
const myHotDogWithMayo = new Mayo(new PlainHotDog());
const myHotDogWithCatchupAndMayo = new Catchup(myHotDogWithMayo);

console.log(myHotDogWithCatchup.sell()); // 50 + 15 = 65
console.log(myHotDogWithMayo.sell()); // 50 + 7 = 57
console.log(myHotDogWithCatchupAndMayo.sell()); // 50 + 7 + 15 = 72
