/**
 * Created by Chaker on 14/02/2017.
 */


export class Utils {
  static check(x: any): boolean {
    if (x === null || x === 'null' || x === '') {
      return false;
    } else if (typeof x === 'undefined') {
      return false;
    } else return true;
  }
}
