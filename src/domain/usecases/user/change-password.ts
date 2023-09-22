export interface ChangeUserPassword {
	perform(input: ChangeUserPassword.Input): Promise<ChangeUserPassword.Output>
}
export namespace ChangeUserPassword {
	export type Input = {
		id: string
		password: string
	}
	export type Output = {
		id: string
		username: string
		email: string
	}
}