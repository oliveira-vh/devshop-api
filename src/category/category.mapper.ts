import { CategoryCreateInput } from './dto/category-create.input';
import { Category } from './category.entity';

export class CategoryMapper {
  public static toEntity(input: CategoryCreateInput): Category {
    const entity = new Category();
    entity.name = input.name;
    entity.slug = input.slug;
    return entity;
  }
}
