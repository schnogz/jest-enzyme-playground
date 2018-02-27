export default {
	getPosts: () => { return new Promise((resolve, reject) => {
		process.nextTick(
			() => resolve({ data: {
				children: [
					{ name: 'child 1' },
					{ name: 'child 2' },
					{ name: 'child 3' }
				]
			}}),
			() => reject({ error: 'something went wrong' })
		);
	});
	}
};