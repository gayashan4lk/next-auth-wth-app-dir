import Link from 'next/link'
import Image from 'next/image'

type NavbarProps = {
	user?: { name?: string | null; email?: string | null; image?: string | null }
}

export default function Navbar({ user }: NavbarProps) {
	console.log(user?.image)
	return (
		<nav className="bg-slate-700 p-4">
			<ul className="flex justify-evenly ">
				{user ? (
					<>
						<li>
							{user.image && (
								<Image
									className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto"
									src={user?.image}
									width={100}
									height={100}
									alt={user?.name ?? 'Profile Pic'}
									priority={true}
								/>
							)}
						</li>
						<li className="text-xl">
							<h1>Hi, {user?.name}</h1>
							<Link href="/api/auth/signout">Sign out</Link>
						</li>
					</>
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
