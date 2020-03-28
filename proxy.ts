// Virtual Proxy example

interface Object {
	do(): void;
}

class ExpensiveObject implements Object {
	constructor() {
		console.log('5 sec');
	}
	do(): void {
		console.log('ExpensiveObject do');
	}
}

class ExpensiveObjectUser {
	public object;
	constructor(object: Object) {
		this.object = object;
	}

	do(): void {
		this.object.do();
	}
}

class MyProxy implements Object {
	public expObject: ExpensiveObject;

	do(): void {
		console.log('MyProxy');

		if (!this.expObject) {
			this.expObject = new ExpensiveObject();
		}

		this.expObject.do();
	}
}

const expObjectUser = new ExpensiveObjectUser(new MyProxy());

expObjectUser.do();
expObjectUser.do();
