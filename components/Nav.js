import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import Image from 'next/image'

function Nav({ showNavbar }) {
	const navRef = useRef()
	const [isDropdownVisible, setDropdownVisible] = useState(false)
	const [isDropdownVisible2, setDropdownVisible2] = useState(false)
	const [isDropdownVisible3, setDropdownVisible3] = useState(false)
	const isMobileDevice = useMediaQuery({ maxWidth: 1024 })
	const [isScrolled, setIsScrolled] = useState(false)
	const [lastScrollTop, setLastScrollTop] = useState(0)

	useEffect(() => {
		const onScroll = () => {
			const { pageYOffset } = window
			if (pageYOffset > lastScrollTop) {
				setIsScrolled(false)
			} else if (pageYOffset < lastScrollTop) {
				setIsScrolled(true)
			}
			setLastScrollTop(pageYOffset <= 0 ? 0 : pageYOffset)
		}

		window.addEventListener('scroll', onScroll, { passive: true })

		return () => {
			window.removeEventListener('scroll', onScroll)
		}
	}, [lastScrollTop])

	useEffect(() => {
		const scrollListener = () => {
			if (window.scrollY > 27) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}

		window.addEventListener('scroll', scrollListener)

		return () => {
			window.removeEventListener('scroll', scrollListener)
		}
	}, [])

	const handleDropdownToggle = () => {
		setDropdownVisible(!isDropdownVisible)
	}
	const handleDropdownToggle2 = () => {
		setDropdownVisible2(!isDropdownVisible2)
	}
	const handleDropdownToggle3 = () => {
		setDropdownVisible3(!isDropdownVisible3)
	}

	const handleMouseEnter = () => {
		if (!isMobileDevice) {
			setDropdownVisible(true)
		}
	}
	const handleMouseEnter2 = () => {
		if (!isMobileDevice) {
			setDropdownVisible2(true)
		}
	}
	const handleMouseEnter3 = () => {
		if (!isMobileDevice) {
			setDropdownVisible3(true)
		}
	}

	const handleMouseLeave = () => {
		if (!isMobileDevice) {
			setDropdownVisible(false)
		}
	}
	const handleMouseLeave2 = () => {
		if (!isMobileDevice) {
			setDropdownVisible2(false)
		}
	}
	const handleMouseLeave3 = () => {
		if (!isMobileDevice) {
			setDropdownVisible3(false)
		}
	}

	const showNavbarse = () => {
		navRef.current.classList.toggle('responsive_nav')
	}

	return (
		<div className='naviga'>
			<div
				className='pasek'
				style={{
					position: isScrolled ? 'fixed' : 'relative',
					top: isScrolled ? '0px' : '0px',
					transition: 'all .4s linear',
				}}>
				<div className='mailicon'>
					<AiOutlineMail className='iconm' />
					<a href='mailto:powpowriders@gmail.com'>powpow.riders@gmail.com</a>
				</div>
				<div className='telicon'>
					<BsTelephone className='icont' />
					<a href='tel:+48796200308'>+48796200308</a>
				</div>
			</div>
			<header
				style={{
					position: isScrolled ? 'fixed' : 'relative',
					top: isScrolled ? '35px' : '0px',
					transition: 'all .4s',
				}}>
				<Link href='/' aria-label='Strona główna'>
					<img src='/img/logo.webp' alt='logo firmy pow pow riders' className='navlogo' />
				</Link>
				<nav ref={navRef}>
					<div
						className='dropdown first'
						onClick={handleDropdownToggle}
						onMouseEnter={handleMouseEnter}
						onMouseLeave={handleMouseLeave}>
						<div className='paddleft'>
							<p className='two-twos'>Profesjonalne szkolenia snowboardowe</p>
						</div>
						{isDropdownVisible && (
							<div className='dropdown-content'>
								<Link href='/snow-pow-class-kursy-snowboardowe-indywidualne.html' onClick={showNavbarse}>
									Kursy indywidualne
								</Link>
								<Link href='/kurs-butteringowy-snowboard.html' onClick={showNavbarse}>
								freestyle z pow pow riders
								</Link>
								<Link href='/snowboardowa-polkolonia.html' onClick={showNavbarse}>
									Półkolonie snowboardowe
								</Link>
								<Link href='/szkolenia-sits.html' onClick={showNavbarse}>
									Szkolenia SITS
								</Link>
							</div>
						)}
					</div>
					<div
						className='dropdown'
						onClick={handleDropdownToggle2}
						onMouseEnter={handleMouseEnter2}
						onMouseLeave={handleMouseLeave2}>
						<p className='two-two' style={{ fontWeight: '700' }}>
							Sklep Ridera
						</p>
						{isDropdownVisible2 && (
							<div className='dropdown-content'>
								<Link href='/pow-store/' onClick={showNavbarse}>
									pow store
								</Link>
								<Link href='/pow-store/moje-konto/' onClick={showNavbarse}>
									moje konto
								</Link>
								<Link href='/pow-store/koszyk/' onClick={showNavbarse}>
									koszyk
								</Link>
								<Link href='/pow-store/privacy-policy/' onClick={showNavbarse}>
									informacje
								</Link>
								<Link href='/pow-store/rodo-_powpowriders_/' onClick={showNavbarse}>
									rodo
								</Link>
							</div>
						)}
					</div>
					<div
						className='dropdown'
						onClick={handleDropdownToggle3}
						onMouseEnter={handleMouseEnter3}
						onMouseLeave={handleMouseLeave3}>
						<p className='two-two'>Strefa Ridera</p>
						{isDropdownVisible3 && (
							<div className='dropdown-content'>
								<Link href='/oferta-pow-pow-riders.html' onClick={showNavbarse}>
									Odkryj, co oferujemy
								</Link>
								<Link href='/warsztaty-rozwojowe.html' onClick={showNavbarse}>
									Warsztaty rozwojowe
								</Link>
								<Link href='/#blog' onClick={showNavbarse}>
									Blog ridera
								</Link>
								<Link href='https://www.instagram.com/powpow_riders/' onClick={showNavbarse} target='_blank'>
									instagram for riders only
								</Link>
							</div>
						)}
					</div>
					<Link href='/kontakt.html' onClick={showNavbarse} className='two'>
						Kontakt
					</Link>
					<div onClick={showNavbarse} className='panel-mob'>
						<img src='/img/logo.webp' alt='' className='panel-mob-img' />
						<button className='nav-btn nav-close-btn' aria-label='menu'>
							<AiOutlineClose className='cls' />
						</button>
					</div>
					<div className='menu-sm-mobile'>
						<a href='https://www.tiktok.com/@powpow_riders' target='_blank' className='menu-sm'>
							<Image src='/img/tt.webp' alt='Description' width={40} height={40} />
						</a>
						<a href='https://www.instagram.com/powpow_riders/' target='_blank' className='menu-sm-two'>
							<Image src='/img/ig.webp' alt='Description' width={40} height={40} />
						</a>
						<a
							href='https://www.linkedin.com/in/kamila-%C5%9Bwi%C4%99czkowska-8aaab424a/?locale=es_ES'
							className='menu-sm-thr'
							target='_blank'>
							<Image src='/img/in.webp' alt='Description' width={40} height={40} />
						</a>
					</div>
				</nav>
				<button className='nav-btn' onClick={showNavbarse} aria-label='menu'>
					<AiOutlineMenu className='btn-burger' />
				</button>
			</header>
			{isScrolled && <div style={{ height: '125px' }}></div>}
		</div>
	)
}

export default Nav
