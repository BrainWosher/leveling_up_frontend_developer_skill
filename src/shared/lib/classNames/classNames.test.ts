import { classNames } from './classNames';

describe('classNames', () => {
  test('witch only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('witch additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('witch mods', () => {
    const expected = 'someClass class1 class2 hovered selected';
    expect(classNames('someClass', { hovered: true, selected: true }, ['class1', 'class2'])).toBe(
      expected,
    );
  });

  test('witch mods false', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames('someClass', { hovered: true, selected: false }, ['class1', 'class2'])).toBe(
      expected,
    );
  });

  test('witch mods undefined', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(
      classNames('someClass', { hovered: true, selected: undefined }, ['class1', 'class2']),
    ).toBe(expected);
  });
});
