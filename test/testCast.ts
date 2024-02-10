import test from 'ava';
import { execSync } from 'child_process';

export function cast() {
	test.serial('test read schema', async t => {
		try {
			execSync(`tsc ${require('path').resolve(__dirname, './resouces/schema.ts')}`);
		} catch (err) {
			t.fail('could not compile ts file');
		}
		const schemaFile = require('path').resolve(__dirname, './resouces/schema.js');
		const dynamicImport = await import(schemaFile);
		const typedDefaultImport = dynamicImport.default;

		t.truthy(typedDefaultImport !== undefined);
	});
}
