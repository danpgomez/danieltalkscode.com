import React from 'react'

import twitter from '../images/twitter-logo.png'
import youtube from '../images/youtube-logo.png'
import github from '../images/github-logo.png'

const links = [
    { url: 'https://twitter.com/danieltalkscode/', label: 'Twitter', icon: twitter },
    { url: 'https://www.youtube.com/channel/UClbv-gIWvuncgfd5umYL3mg', label: 'YouTube', icon: youtube },
    { url: 'https://github.com/danpgomez/', label: 'GitHub', icon: github }
]

export const Footer = () => {
    return (
        <footer className='footer'>
            <section>
                <span>
                © Daniel Perez-Gomez {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
                </span>
                <nav>
                    {links.map((link) => (
                        <a
                            href={link.url}
                            title={link.label}
                            target='_blank'
                            rel='noopener noreferrer'
                            key={link.url}
                            >
                            <span>{link.label}</span>
                            <img src={link.icon} alt={link.label} />
                            </a>
                    ))}
                </nav>
            </section>
        </footer>
    )
}