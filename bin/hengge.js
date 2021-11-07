#!/usr/bin/env node
const inquirer = require('inquirer');
const generate = require('../src/generate');


const run = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        message: '设置文件名称:',
        name: 'name',
        default: 'index', // 默认值
      },
      {
        type: 'list',
        name: 'template',
        message: '请选择模版类型',
        choices: [
          'template',
          'html',
        ],
      },
      {
        type: 'list',
        name: 'type',
        message: '请选择H5框架',
        choices: [
          'umi-h5',
          'react-pc',
          'vue-h5(Bate)',
        ],
        when: function (answers) { // 当watch为true的时候才会提问当前问题
          return answers.template == 'html';
        },
      },
      {
        type: 'list',
        name: 'type',
        message: '请选择h5模版类型',
        choices: [
          'vue3-template-component',
          'vue3-template-page',
        ],
        when: function (answers) { // 当watch为true的时候才会提问当前问题
          return answers.template == 'template';
        },
      },
    ])
    .then((answers) => {
      let type = answers.template;

      if (answers.type) {
        type = answers.type;
      };

      generate.run(answers.name, type);
    });
};


run();

