export default {
  getPosts: () => {
  	return fetch('https://www.reddit.com/r/bitcoin/hot.json').then(resp => resp.json())
	}
};