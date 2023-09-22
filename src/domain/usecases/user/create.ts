export interface CreateUser {
	perform(input: CreateUser.Input): Promise<CreateUser.Output>
}
export namespace CreateUser {
	export type Input = {
		username: string
		password: string
		email: string
	}
	export type Output = {
		id: string
		username: string
		email: string
	}
}