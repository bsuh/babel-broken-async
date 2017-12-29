async function hello() {
	async function hello2() {
		return true;
	}
	return hello2();
}

async function main() {
	try {
		await hello();
		console.log('success');
	} catch (e) {
		console.log(e);
	}
}

main();
