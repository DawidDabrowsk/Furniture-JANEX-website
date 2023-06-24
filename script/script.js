document.addEventListener('DOMContentLoaded', () => {
	const showNav = document.querySelector('.navItemsMobile')
	const burgerIcn = document.querySelector('.burgerIcon')
	const navItemsArr = document.querySelectorAll('.navItemsMobile a')
	const nav = document.querySelector('nav')

	const shadow = () => {
		if (window.scrollY >= 500) {
			burgerIcn.style.backgroundColor = 'var(--infoColor)'
			navItemsArr.forEach(item => (item.style.backgroundColor = 'var(--infoColor)'))
			nav.style.backgroundColor = 'var(--infoColor)'
		} else if (window.scrollY < 500) {
			burgerIcn.style.background = 'none'
			navItemsArr.forEach(item => (item.style.background = 'none'))
			nav.style.background = 'none'
		}
	}

	const navActive = () => {
		showNav.classList.toggle('active')
	}

	window.addEventListener('scroll', shadow)
	navItemsArr.forEach(item => item.addEventListener('click', navActive))
	burgerIcn.addEventListener('click', navActive)
})
