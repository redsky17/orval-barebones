import { defineConfig } from 'orval';

export default defineConfig({
  'oas2-form-data': {
    input: './openapi/oas2-form-data.yaml',
    output: {
      target: './src/generated/oas2-form-data.ts',
      client: 'fetch',
      mode: 'single'
    }
  },
  'oas3-form-data': {
    input: './openapi/oas3-form-data.yaml',
    output: {
      target: './src/generated/oas3-form-data.ts',
      client: 'fetch',
      mode: 'single'
    }
  }
});
