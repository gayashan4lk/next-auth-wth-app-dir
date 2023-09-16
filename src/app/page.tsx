import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'
import Image from 'next/image'

export default async function Home() {
	const session = await getServerSession(options)

	console.log(session)

	if (!session) return <h1>This is a public page. Please sign in.</h1>

	return (
		<>
			{session.user && <UserElement user={session.user} />}
			{!session.user && <h1>Hi, Guest</h1>}

			{session.expires && <h4>Expires: {session.expires}</h4>}
		</>
	)
}

type userElementProps = {
	user: { name?: string | null; email?: string | null; imageUrl?: string | null }
}

function UserElement({ user }: userElementProps) {
	return (
		<div>
			<h1>Hi, {user.name ?? 'Guest'} </h1>
			<h4>{user.email ?? 'no email found'}</h4>
			<h4>{user.imageUrl ?? 'no imageUrl found'}</h4>
			{user.imageUrl && (
				<Image
					className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
					src={user.imageUrl}
					width={200}
					height={200}
					alt={user.name ?? 'avatar image'}
					priority={true}
				/>
			)}
		</div>
	)
}
