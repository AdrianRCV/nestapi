import { ProductsDto } from './product.dto';

describe('ProductsDto', () => {
  it('should be defined', () => {
    expect(new ProductsDto()).toBeDefined();
  });
});