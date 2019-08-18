
import {Rpc} from '../index';
import {util} from '../src/util/util';
import * as assert from 'assert';
import {Server} from 'http.server';

const port = Math.floor(3670 + (Math.random() * 3670)), s = new Server(port);

s.create((req, res) => {
	return req.data().then((data) => {
		if (data.action === 'account_balance' && util.valid.account(data.account)) {
			return res.status(200).json({
				"balance": "10000",
				"pending": "10000"
			});
		}
		if (data.action === 'account_history' && util.valid.account(data.account)) {
			return res.status(200).json({
				"account": data.account,
				"history": [
					{
						"type": "send",
						"account": "nano_38ztgpejb7yrm7rr586nenkn597s3a1sqiy3m3uyqjicht7kzuhnihdk6zpz",
						"amount": "80000000000000000000000000000000000",
						"local_timestamp": "1551532723",
						"height": "60",
						"hash": "80392607E85E73CC3E94B4126F24488EBDFEB174944B890C97E8F36D89591DC5"
					}
				],
				"previous": "8D3AB98B301224253750D448B4BD997132400CEDD0A8432F775724F2D9821C72"
			});
		}
		if (data.action === 'account_info' && util.valid.account(data.account)) {
			return res.status(200).json({
				"frontier": "FF84533A571D953A596EA401FD41743AC85D04F406E76FDE4408EAED50B473C5",
				"open_block": "991CF190094C00F0B68E2E5F75F6BEE95A2E0BD93CEAA4A6734DB9F19B728948",
				"representative_block": "991CF190094C00F0B68E2E5F75F6BEE95A2E0BD93CEAA4A6734DB9F19B728948",
				"balance": "235580100176034320859259343606608761791",
				"modified_timestamp": "1501793775",
				"block_count": "33",
				"confirmation_height" : "28",
				"account_version": "1"
			});
		}
		if (data.action === 'block_info' && util.valid.hash(data.hash)) {
			return res.status(200).json({
				"block_account": "nano_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est",
				"amount": "30000000000000000000000000000000000",
				"balance": "5606157000000000000000000000000000000",
				"height": "58",
				"local_timestamp": "0",
				"confirmed": "true",
				"contents": {
					"type": "state",
					"account": "nano_1ipx847tk8o46pwxt5qjdbncjqcbwcc1rrmqnkztrfjy5k7z4imsrata9est",
					"previous": "CE898C131AAEE25E05362F247760F8A3ACF34A9796A5AE0D9204E86B0637965E",
					"representative": "nano_1stofnrxuz3cai7ze75o174bpm7scwj9jn3nxsn8ntzg784jf1gzn1jjdkou",
					"balance": "5606157000000000000000000000000000000",
					"link": "5D1AA8A45F8736519D707FCB375976A7F9AF795091021D7E9C7548D6F45DD8D5",
					"link_as_account": "nano_1qato4k7z3spc8gq1zyd8xeqfbzsoxwo36a45ozbrxcatut7up8ohyardu1z",
					"signature": "82D41BC16F313E4B2243D14DFFA2FB04679C540C2095FEE7EAE0F2F26880AD56DD48D87A7CC5DD760C5B2D76EE2C205506AA557BF00B60D8DEE312EC7343A501",
					"work": "8a142e07a10996d5"
				},
				"subtype": "send"
			});
		}
		console.log('req', data);
		res.status(404).send(':)');
	}).catch((err) => {
		console.log(err);
		res.status(404).send(':)');
	});
}).then(() => {
	console.log('started server');
	let api = new Rpc(`http://localhost:${port}`), account = 'ban_1fundm3d7zritekc8bdt4oto5ut8begz6jnnt7n3tdxzjq3t46aiuse1h7gj';

	return api.account(account).balance().then((res) => {
		assert.equal(res.balance, 10000);
		assert.equal(res.pending, 10000);
		return api.account('wrong').balance();
	}).then(() => {
		throw new Error('balance should have failed used wrong account format');
	}).catch((err) => {
		assert.equal(err.toString(), 'Error: Invalid account format');
	}).then(() => {
		return api.account(account).history();
	}).then((res) => {
		assert.equal(res.history[0].local_timestamp, 1551532723);
		assert.equal(res.previous, '8D3AB98B301224253750D448B4BD997132400CEDD0A8432F775724F2D9821C72');
		return api.block('87434F8041869A01C8F6F263B87972D7BA443A72E0A97D7A3FD0CCC2358FD6F9').info();
	}).then((res) => {
		assert.equal(res.amount, 3e+34);
		assert.equal(res.height, 58);
		assert.equal(res.confirmed, true);
	});
}).then(() => {
	s.close();
}).catch((err) => {
	s.close();
	throw err;
})