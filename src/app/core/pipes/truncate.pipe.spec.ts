import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should truncate a string when it exceeds the limit', () => {
    const value = 'This is a long string that needs to be truncated';
    const limit = 20;
    const result = pipe.transform(value, limit);
    expect(result).toBe('This is a long strin...');
  });

  it('should not truncate a string when it does not exceed the limit', () => {
    const value = 'Short string';
    const limit = 20;
    const result = pipe.transform(value, limit);
    expect(result).toBe(value);
  });

  it('should handle an empty string', () => {
    const value = '';
    const limit = 10;
    const result = pipe.transform(value, limit);
    expect(result).toBe(value);
  });

  it('should handle a limit of zero', () => {
    const value = 'This will be truncated';
    const limit = 0;
    const result = pipe.transform(value, limit);
    expect(result).toBe('...');
  });
});
