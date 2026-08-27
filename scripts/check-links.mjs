import { readFile } from 'node:fs/promises';

const files = ['README.md', 'METHODOLOGY.md', 'CONTRIBUTING.md'];
const urls = new Set();

for (const file of files) {
  const text = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
  for (const match of text.matchAll(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/g)) urls.add(match[1]);
}

const hardFailures = [];
const warnings = [];

for (const url of [...urls].sort()) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
      headers: { 'user-agent': 'practical-ai-tools-link-check/0.1' }
    });
    if (response.status === 404 || response.status === 410 || response.status >= 500) {
      hardFailures.push(`${response.status} ${url}`);
    } else if (!response.ok) {
      warnings.push(`${response.status} ${url}`);
    } else {
      console.log(`OK   ${response.status} ${url}`);
    }
  } catch (error) {
    warnings.push(`NETWORK ${url} (${error.message})`);
  }
}

for (const warning of warnings) console.warn(`WARN ${warning}`);
if (hardFailures.length) {
  for (const failure of hardFailures) console.error(`FAIL ${failure}`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${urls.size} external links: no 404, 410, or 5xx responses.`);
}
