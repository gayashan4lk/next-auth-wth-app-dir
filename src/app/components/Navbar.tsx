import Link from 'next/link'

type NavbarProps = {
	user?: { name?: string | null; email?: string | null; imageUrl?: string | null }
}

export default function Navbar({ user }: NavbarProps) {
	return (
		<nav className="bg-slate-700 p-4">
			<ul className="flex justify-evenly ">
				{user ? (
					<li className="text-xl">
						<h1>Hi, {user?.name}</h1>
						<Link href="/api/auth/signout">Sign out</Link>
					</li>
				) : (
					<li>
						<h1>Hi, Guest</h1>
						<Link href="/api/auth/signin">Sign In</Link>
					</li>
				)}
				<li>
					<Link href="/about">About us</Link>
				</li>
				<li>
					<Link href="/extra">Extra Page</Link>
				</li>
			</ul>
		</nav>
	)
}
