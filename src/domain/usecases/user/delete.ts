export interface DeleteUser {
	perform(input: DeleteUser.Input): Promise<void>
}

export namespace DeleteUser {
	export type Input = {
		id: string
		email: string
		password: string
	}
}