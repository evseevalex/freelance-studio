import { Dashboard } from './components/dashboard'

export class Router {
	constructor() {
		this.titlePageElement = document.getElementById('page-title')
		this.contentPageElement = document.getElementById('content')
		this.adminLteStyleElement = document.getElementById('admin_lte_style')

		this.initEvents()
		this.routes = [
			{
				route: '/',
				title: 'Дашборд',
				filePathTemplate: '/templates/dashboard.html',
				useLayout: '/templates/layout.html',
				load: () => {
					new Dashboard()
				},
				unload: () => {},
			},
			{
				route: '/login',
				title: 'Авторизация',
				filePathTemplate: '/templates/login.html',
				useLayout: false,
				load: () => {
					document.body.classList.add('login-page')
				},
				unload: () => {
					document.body.classList.remove('login-page')
				},
				styles: ['icheck-bootstrap.min.css'],
			},
			{
				route: '/logout',
				load: () => {},
				unload: () => {},
			},
			{
				route: '/signup',
				title: 'Регистрация',
				filePathTemplate: '/templates/sign-up.html',
				useLayout: false,
				load: () => {
					document.body.classList.add('register-page')
				},
				unload: () => {
					document.body.classList.remove('register-page')
				},
				styles: ['icheck-bootstrap.min.css'],
			},
			{
				route: '/refresh',
				load: () => {},
				unload: () => {},
			},
			{
				route: '/404',
				title: 'Страница не найдена',
				filePathTemplate: '/templates/404.html',
				useLayout: false,
				load: () => {},
			},
		]
	}

	initEvents() {
		window.addEventListener('DOMContentLoaded', this.activateRoute.bind(this))
		window.addEventListener('popstate', this.activateRoute.bind(this))
		document.addEventListener('click', this.openNewRoute.bind(this))
	}

	async openNewRoute(e) {
		let element = null
		if (e.target.nodeName === 'A') {
			element = e.target
		} else if (e.target.parentNode.nodeName === 'A') {
			element = e.target.parentNode
		}

		if (element) {
			e.preventDefault()
			const url = element.href.replace(window.location.origin, '')
			if (!url || url === '/#' || url.startsWith('javascript:void(0)')) {
				return
			}

			this.redirect(url)
		}
	}

	async activateRoute(e, oldRoute = null) {
		if (oldRoute) {
			const currentRoute = this.routes.find(item => item.route === oldRoute)
			if (currentRoute) {
				if (currentRoute.styles && currentRoute.styles.length > 0) {
					currentRoute.styles.forEach(style => {
						document.querySelector(`link[href='/css/${style}']`).remove()
					})
				}

				if (currentRoute.unload && typeof currentRoute.unload === 'function') {
					currentRoute.unload()
				}
			}
		}

		const urlRoute = window.location.pathname
		const newRoute = this.routes.find(item => item.route === urlRoute)

		if (newRoute) {
			if (newRoute.styles && newRoute.styles.length > 0) {
				newRoute.styles.forEach(style => {
					const link = document.createElement('link')
					link.rel = 'stylesheet'
					link.href = '/css/' + style
					document.head.insertBefore(link, this.adminLteStyleElement)
				})
			}
			if (newRoute.title) {
				this.titlePageElement.innerText = newRoute.title + ' | Freelance Studio'
			}

			if (newRoute.filePathTemplate) {
				let contentBlock = this.contentPageElement
				if (newRoute.useLayout) {
					this.contentPageElement.innerHTML = await fetch(newRoute.useLayout).then(result => result.text())
					contentBlock = document.getElementById('content-layout')
					document.body.classList.add('layout-fixed')
					document.body.classList.add('sidebar-mini')
				}
				document.body.classList.remove()
				contentBlock.innerHTML = await fetch(newRoute.filePathTemplate).then(result => result.text())
			}

			if (newRoute.load && typeof newRoute.load === 'function') {
				newRoute.load()
			}
		} else {
			this.redirect('/404')
		}
	}

	async redirect(route) {
		const currentRoute = window.location.pathname
		history.pushState({}, '', route)
		await this.activateRoute(null, currentRoute)
	}
}
