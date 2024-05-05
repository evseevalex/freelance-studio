import { Dashboard } from './components/dashboard'

export class Router {
	constructor() {
		this.titlePageElement = document.getElementById('page-title')
		this.contentPageElement = document.getElementById('content')

		this.initEvents()
		this.routes = [
			{
				route: '/',
				title: 'Дашбоард',
				filePathTemplate: '/templates/dashboard.html',
				load: () => {
					new Dashboard()
				},
			},
			{
				route: '/login',
				title: 'Авторизация',
				filePathTemplate: '/templates/login.html',
				load: () => {},
			},
			{
				route: '/logout',
				load: () => {},
			},
			{
				route: '/signup',
				title: 'Регистрация',
				filePathTemplate: '/templates/sign-up.html',
				load: () => {},
			},
			{
				route: '/refresh',
				load: () => {},
			},
			{
				route: '/404',
				title: 'Страница не найдена',
				filePathTemplate: '/templates/404.html',
				load: () => {},
			},
		]
	}

	initEvents() {
		window.addEventListener(
			'DOMContentLoaded',
			this.activateRoute.bind(this)
		)
		window.addEventListener('popstate', this.activateRoute.bind(this))
	}

	async activateRoute() {
		const urlRoute = window.location.pathname
		const newRoute = this.routes.find(item => item.route === urlRoute)

		if (newRoute) {
			if (newRoute.title) {
				this.titlePageElement.innerText = newRoute.title + ' | Freelance Studio'
			}

			if (newRoute.filePathTemplate) {
				this.contentPageElement.innerHTML = await fetch(
					newRoute.filePathTemplate
				).then(result => result.text())
			}

			if (newRoute.load && typeof newRoute.load === 'function') {
				newRoute.load()
			}
		} else {
			this.redirect('/404')
		}
	}

	redirect(route) {
		window.location = route
	}
}
