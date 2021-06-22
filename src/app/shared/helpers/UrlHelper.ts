import {StringHelper} from "./StringHelper";

export class UrlHelper {
  static url = new URL(window.location.href);
  static startUrl = `<a href="`;
  static exposedUrl = `${UrlHelper.startUrl}${UrlHelper.url.protocol}//${UrlHelper.url.host}`;

  static hideInternalUrls(value: string | undefined): string | undefined {
    if (value) {
      value = StringHelper.replaceAll(value, UrlHelper.exposedUrl, UrlHelper.startUrl);
    }

    return value;
  }

}
