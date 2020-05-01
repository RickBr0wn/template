// REMEMBER: All of these methods return a promise, and are as such `then-able`
// with the callbacks single argument being the data
// eg:
//  AuthService.login({username:'x',password:'x'}).then(data => // do stuff with your data)
const header = (user) => ({
	method: 'post',
	body: JSON.stringify(user),
	headers: { 'Content-Type': 'application/json' }
})

export default {
	login: (user) =>
		fetch('/user/login', header(user)).then(
			(res) =>
				res.status !== 401
					? res.json().then((json) => json)
					: { isAuthenticated: false, user: { username: '', role: '' } }
		),

	register: (user) => fetch('/user/register', header(user)).then((res) => res.json()).then((json) => json),

	logout: () => fetch('/user/logout').then((res) => res.json()).then((json) => json),

	isAuthenticated: () =>
		fetch('/user/authenticated').then(
			(res) =>
				res.status !== 401
					? res.json().then((json) => json)
					: { isAuthenticated: false, user: { username: '', role: '' } }
		)
}
