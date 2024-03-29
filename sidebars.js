/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const FEDocsSidebar = {
  '知识图谱': [
    'FE/intro',
    {
      type: 'category',
      label: '知识图谱',
      collapsed: false,
      items: [
        'FE/knowledge-graph/intro'
      ]
    },
    {
      type: 'category',
      label: 'UI Components Playground',
      collapsed: false,
      items: [
        'FE/ui-components/intro',
        'FE/ui-components/antd+cropper',
        'FE/ui-components/PictureViewer',
      ]
    }
  ]
}


module.exports = {
  ...FEDocsSidebar
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
