import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');

const tools = [
  'ChatGPT', 'Claude', 'Perplexity', 'GitHub Copilot', 'Cursor', 'Replit',
  'Canva Magic Studio', 'Adobe Firefly', 'Descript', 'Otter', 'Zapier', 'n8n'
];

test('launch directory contains exactly 12 named tool cards', () => {
  for (const tool of tools) {
    assert.match(readme, new RegExp(`^### ${tool.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')}$`, 'm'));
  }
  assert.equal((readme.match(/^### /gm) || []).length, tools.length);
});

test('every launch card is explicitly source-reviewed', () => {
  assert.equal((readme.match(/^- \*\*Status:\*\* Source-reviewed · 2026-08-27$/gm) || []).length, tools.length);
});

test('every launch card includes privacy and avoid-if guidance', () => {
  assert.equal((readme.match(/^- \*\*Privacy checkpoint:\*\*/gm) || []).length, tools.length);
  assert.equal((readme.match(/^- \*\*Avoid if:\*\*/gm) || []).length, tools.length);
});

test('README does not claim launch entries were hands-on tested', () => {
  assert.match(readme, /All launch entries are \*\*source-reviewed\*\*/);
  assert.match(readme, /different from claiming they were independently tested/);
});
