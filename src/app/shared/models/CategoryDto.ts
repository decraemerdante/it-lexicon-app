import {ArticleDto} from "./ArticleDto";

export interface CategoryDto {
  name?: string | undefined;
  maskId: string;
  articles?: ArticleDto[] | undefined;
}
