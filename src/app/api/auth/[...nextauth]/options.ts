import type { Awaitable, NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'Your Cool User Name' },
				password: { label: 'Password', type: 'password', placeholder: 'Your Super Secret Password' }
			},
			async authorize(credentials, req) {
				// const user = { id: 1, name: 'John Doe', password: '' }

				// if (credentials?.username === user.name && credentials?.password === 'password') {
				//   return user
				// } else {
				//   return null
				// }

				// You need to provide your own logic here that takes the credentials
				// submitted and returns either a object representing a user or value
				// that is false/null if the credentials are invalid.
				// e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
				// You can also use the `req` object to obtain additional parameters
				// (i.e., the request IP address)
				const res = await fetch('/your/endpoint', {
					method: 'POST',
					body: JSON.stringify(credentials),
					headers: { 'Content-Type': 'application/json' }
				})
				const user = await res.json()

				// If no error and we have user data, return it
				if (res.ok && user) {
					return user
				}
				// Return null if user data could not be retrieved
				return null
			}
		})
	]
}
