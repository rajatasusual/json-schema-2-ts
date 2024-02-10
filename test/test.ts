import test from 'ava';
import { compileFromFile } from '../src';

test('test environment', async t => {
	await compileFromFile(require('path').resolve(__dirname, './resouces/schema.json')).then(() => t.pass());
});
