// list of key:value objects as type
type Words = {
	[key: string]: string;
};

type Word = { term: string; definition: string };

class Dict {
	private words: Words;
	// initialize class
	constructor() {
		this.words = {};
	}

	add(word: Word) {
		if (!this.words[word.term]) {
			this.words[word.term] = word.definition;
		}
	}

	get(term: string): string {
		return this.words[term];
	}

	delete(term: string) {
		delete this.words[term];
	}

	update(word: Word, def: string) {
		if (this.words[word.term]) {
			this.words[word.term] = def;
		} else {
			this.add(word);
		}
	}

	showAll() {
		Object.keys(this.words).forEach((term) =>
			console.log(`${term} : ${this.words[term]}`)
		);
	}

	count() {
		return Object.keys(this.words).length;
	}
}

const dict = new Dict();
console.log(`add kimchi`);
dict.add({ term: "kimchi", definition: "한국음식" });
dict.showAll();
console.log(`add bulgogi`);
dict.add({ term: "bulgogi", definition: "한국고기음식" });
dict.showAll();
console.log(`update kimchi and get kimchi`);
dict.update({ term: "kimchi", definition: "한국음식" }, "한국야채음식");
console.log(dict.get("kimchi"));
console.log(`count no of dict`);
console.log(dict.count());
console.log(`delete bulgogi and count`);
dict.delete("bulgogi");
console.log(dict.count());
