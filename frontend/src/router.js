import { Dashboard } from './components/dashboard'

export class Router {
	constructor() {
		this.titlePageElement = document.getElementById('page-title')
		this.contentPageElement = document.getElementById('content')

		this.initEvents()
		this.routes = [
			{
				route: '/',
				title: 'Личный кабинет',
				filePathTemplate: './template/dashboard.html',
				load: () => {
					new Dashboard()
				},
			},
			{
				route: '/login',
				title: 'Авторизация',
				filePathTemplate: './template/login.html',
				load: () => {},
			},
			{
				route: '/logout',
				load: () => {},
			},
			{
				route: '/sign-up',
				title: 'Регистрация',
				filePathTemplate: './template/sign-up.html',
				load: () => {},
			},
			{
				route: '/refresh',
				load: () => {},
			},
			{
				route: '/404',
				title: 'Страница не найдена',
				filePathTemplate: './template/404.html',
				load: () => {},
			},
		]
	}

	initEvents() {
		document.addEventListener(
			'DOMContentLoaded',
			this.activateRouter.bind(this)
		)
		document.addEventListener('popstate', this.activateRouter.bind(this))
	}

	async activateRouter() {
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
			redirect('/404')
		}
	}

	redirect(route) {
		window.location.href = route
	}
}
