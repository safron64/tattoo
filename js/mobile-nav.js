!(function () {
	'use strict'
	!(function () {
		const o = document.querySelector('.mobile-nav-btn'),
			e = document.querySelector('.mobile-nav'),
			n = document.querySelector('.nav-icon')
		o.onclick = function () {
			e.classList.toggle('mobile-nav--open'),
				n.classList.toggle('nav-icon--active'),
				document.body.classList.toggle('no-scroll')
		}
	})()
})()