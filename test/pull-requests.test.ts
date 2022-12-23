import {expect, test} from 'vitest';
import {getTopPullRequests} from '../src/get-all';

test('JoshuaBehrens test case', () => {
	const res = getTopPullRequests([
		{
			"repository": {
				"name": "platform",
				"owner": {
					"login": "shopware"
				}
			},
			"contributions": {
				"totalCount": 46
			}
		},
		{
			"repository": {
				"name": "docs",
				"owner": {
					"login": "shopware"
				}
			},
			"contributions": {
				"totalCount": 7
			}
		},
		{
			"repository": {
				"name": "phpstorm-stubs",
				"owner": {
					"login": "JetBrains"
				}
			},
			"contributions": {
				"totalCount": 2
			}
		},
		{
			"repository": {
				"name": "Shopware6",
				"owner": {
					"login": "mollie"
				}
			},
			"contributions": {
				"totalCount": 2
			}
		},
		{
			"repository": {
				"name": "heptaconnect-playground",
				"owner": {
					"login": "jkrzefski"
				}
			},
			"contributions": {
				"totalCount": 1
			}
		},
		{
			"repository": {
				"name": "production",
				"owner": {
					"login": "shopware"
				}
			},
			"contributions": {
				"totalCount": 1
			}
		},
		{
			"repository": {
				"name": "phpmd",
				"owner": {
					"login": "phpmd"
				}
			},
			"contributions": {
				"totalCount": 1
			}
		},
		{
			"repository": {
				"name": "meteor-icon-kit",
				"owner": {
					"login": "shopware"
				}
			},
			"contributions": {
				"totalCount": 1
			}
		},
		{
			"repository": {
				"name": "paas",
				"owner": {
					"login": "shopware"
				}
			},
			"contributions": {
				"totalCount": 1
			}
		},
		{
			"repository": {
				"name": "puml-parser-php",
				"owner": {
					"login": "tasuku43"
				}
			},
			"contributions": {
				"totalCount": 1
			}
		},
		{
			"repository": {
				"name": "packeton",
				"owner": {
					"login": "vtsykun"
				}
			},
			"contributions": {
				"totalCount": 1
			}
		}
	]);

	expect(res?.length).toBe(3);

	expect(res?.[0].name).toBe('platform');
	expect(res?.[0].organization).toBe('shopware');

	expect(res?.[1].name).toBe('docs');
	expect(res?.[1].organization).toBe('shopware');

	expect(res?.[2].name).toBe('phpstorm-stubs');
	expect(res?.[2].organization).toBe('JetBrains');
});
