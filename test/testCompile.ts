import test from 'ava';
import { compileFromFile } from '../src';
import { writeFileSync } from 'fs';

export function compile() {
	test.serial('test compile', async t => {
		const schemaCompiled = await compileFromFile(require('path').resolve(__dirname, './resouces/schema.json'));
		t.truthy(schemaCompiled! !== undefined);
	});

	test.serial('test write schema', async t => {
		const schemaCompiled = await compileFromFile(require('path').resolve(__dirname, './resouces/schema.json'));

		writeFileSync(require('path').resolve(__dirname, './resouces/schema.ts'), schemaCompiled);

		t.pass();
	});
}
