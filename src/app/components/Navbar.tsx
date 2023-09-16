import Link from 'next/link'

export default function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/api/auth/signin">Sign In</Link>
				</li>
				<li>
					<Link href="/api/auth/signout">Sign out</Link>
				</li>
			</ul>
		</nav>
	)
}
