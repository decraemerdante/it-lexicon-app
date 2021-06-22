export class StringHelper {

  static toGlobalRegExp(value: string): RegExp {
    return new RegExp(value, 'g');
  }

  static replaceAll(value: string, toReplace: string, replaceValue: string): string {
    return value.replace(StringHelper.toGlobalRegExp(toReplace), replaceValue);
  }

}
