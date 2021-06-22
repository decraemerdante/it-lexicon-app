import {UrlHelper} from "../helpers/UrlHelper";

export class ArticleDto {
  title?: string | undefined;
  // tslint:disable-next-line:variable-name
  content?: string | undefined;
  maskId: string;
  categoryId?: number | undefined;
  categoryMaskId?: string | undefined;


  constructor(data?: any) {
    if (data) {
      this.title = data.title;
      this.content = data.content;
      this.maskId = data.maskId;
      this.categoryId = data.categoryId;
      this.categoryMaskId = data.categoryMaskId;
    }
  }

  toJson(): string {
    const obj = {
      title : this.title,
      content : UrlHelper.hideInternalUrls(this.content),
      maskId : this.maskId,
      categoryId : this.categoryId,
      categoryMaskId : this.categoryMaskId
    };
    return JSON.stringify(obj);
  }
}
