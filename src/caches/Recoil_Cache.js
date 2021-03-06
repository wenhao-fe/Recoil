/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * @flow strict
 * @format
 */
'use strict';

export type CacheImplementation<T> = {
  +get: mixed => T | void,
  +set: (mixed, T) => CacheImplementation<T>,
  ...
};

module.exports = ({}: {...});
