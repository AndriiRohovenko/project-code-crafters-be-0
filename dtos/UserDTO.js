export default class UserDTO {
  constructor(user) {
    /** @type {string} */
    this.id = user.id;
    /** @type {string} */
    this.username = user.username;
    /** @type {string} */
    this.email = user.email;
    /** @type {string} */
    this.avatar = user.avatar;
  }
}
