/**
 * Class representing a user model.
 * @class
 * @public
 * @version 1.0.0
 * @since 1.0.0
 * @author Organisation_Name
 * @dev Devlopper_Name
 * @email Developper_contact
 * @description Description_File
 */

class UserModel {
  public readonly user_id: string;
  public readonly user_name: string;
  public readonly user_lastname: string;
  public readonly user_firstname: string;

  /**
   * Constructor for UserModel.
   *
   * @param {string} user_id - Identifier of the user.
   * @param {string} user_name - Name of the user.
   * @param {string} user_lastname - Lastname of the user.
   * @param {string} user_firstname - Firstname of the user.
   */
  constructor(
    user_id: string,
    user_name: string,
    user_lastname: string,
    user_firstname: string
  ) {
    this.user_id = user_id;
    this.user_name = user_name;
    this.user_lastname = user_lastname;
    this.user_firstname = user_firstname;
  }

  /**
   * Converts the current object into a plain JSON object.
   *
   * @return {Record<string, any>} The object converted to a plain JSON object.
   */
  public toJson(): Record<string, any> {
    return {
      user_id: this.user_id,
      user_name: this.user_name,
      user_lastname: this.user_lastname,
      user_firstname: this.user_firstname
    };
  }

  /**
   * Converts a plain JSON object into an instance of UserModel.
   *
   * @param {Record<string, any>} json - The JSON object to convert.
   * @return {UserModel} The converted object.
   */
  public static fromJson(json: Record<string, any>): UserModel {
    return new UserModel(
      json.user_id,
      json.user_name,
      json.user_lastname,
      json.user_firstname
    );
  }
}
export {UserModel};
