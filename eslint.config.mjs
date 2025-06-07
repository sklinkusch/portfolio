import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier'; // <--- hinzufügen
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react,
      prettier: prettierPlugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      'prettier/prettier': 'warn',
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: { react },
    settings: {
      react: { version: 'detect' },
    },
  },
  prettier,
  {
    ignores: ['vite.config.ts', 'build/**/*'],
  },
];
