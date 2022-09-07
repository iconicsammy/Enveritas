import User from "application/models/User";

export default interface AuthLoginResponse {
    accessToken: string,
    user: Partial<User>
}