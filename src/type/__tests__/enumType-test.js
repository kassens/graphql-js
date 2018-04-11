/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { describe, it } from 'mocha';
import { expect } from 'chai';
import { GraphQLEnumType } from '../../';

const Complex1 = { someRandomFunction: () => {} };
const Complex2 = { someRandomValue: 123 };

const ComplexEnum = new GraphQLEnumType({
  name: 'Complex',
  values: {
    ONE: { value: Complex1 },
    TWO: { value: Complex2 },
  },
});

describe('Type System: Enum Values', () => {
  it('presents a getValues() API for complex enums', () => {
    const values = ComplexEnum.getValues();
    expect(values.length).to.equal(2);
    expect(values[0].name).to.equal('ONE');
    expect(values[0].value).to.equal(Complex1);
    expect(values[1].name).to.equal('TWO');
    expect(values[1].value).to.equal(Complex2);
  });

  it('presents a getValue() API for complex enums', () => {
    const oneValue = ComplexEnum.getValue('ONE');
    expect(oneValue.name).to.equal('ONE');
    expect(oneValue.value).to.equal(Complex1);

    const badUsage = ComplexEnum.getValue(Complex1);
    expect(badUsage).to.equal(undefined);
  });
});
