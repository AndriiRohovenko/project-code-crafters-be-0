/**
 * Data Transfer Object for User response.
 */
class UserDTO {
  /**
   * @param {Object} user - The user model instance or plain object.
   * @param {number} user.id
   * @param {string} user.name
   * @param {string} user.email
   * @param {string} [user.avatar]
   */
  constructor({ id, name, email, avatar }) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.avatar = avatar || null;
  }

  /**
   * Create a UserDTO from a Sequelize model instance.
   * @param {Object} userInstance
   * @returns {UserDTO}
   */
  static fromModel(userInstance) {
    return new UserDTO(userInstance);
  }
}

export default UserDTO;
