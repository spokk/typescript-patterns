class BreadProvider {
	bread(): string {
		return 'bread';
	}
}

class MeatProvider {
	meat(): string {
		return 'meat';
	}
}

class SauseProvider {
	sause(): string {
		return 'sause';
	}
}

class FoodProvider {
	constructor(
		public breadProvider: BreadProvider,
		public meatProvider: MeatProvider,
		public sauseProvider: SauseProvider,
	) {}

	burger(): string {
		return this.breadProvider.bread() + ' ' + this.meatProvider.meat() + ' ' + this.sauseProvider.sause();
	}
}

const foodProvider = new FoodProvider(new BreadProvider(), new MeatProvider(), new SauseProvider());
console.log(foodProvider.burger());
