interface IUserData {
	name: string;
	id: number;
}

interface IUserService {
	userProfileData(): IUserData;
}

class UserService implements IUserService {
	public userProfileData(): IUserData {
		try {
			return {
				name: "MasterUser",
				id: 1,
			};
		} catch (e) {
			throw e;
		}
	}
}

export default new UserService();
