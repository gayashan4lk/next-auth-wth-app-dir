import { options } from './api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth/next'

export default async function Home() {
	const session = await getServerSession(options)

	console.log(session)

	return <h1>You shall not pass</h1>
}
