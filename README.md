
### `Intro`
![GitHub Actions status | linter](https://github.com/anzerr/ident.icon/workflows/linter/badge.svg)
![GitHub Actions status | publish](https://github.com/anzerr/ident.icon/workflows/publish/badge.svg)
![GitHub Actions status | test](https://github.com/anzerr/ident.icon/workflows/test/badge.svg)

Typescript interface to call the [nano rpc](https://docs.nano.org/commands/rpc-protocol/#block_info)

#### `Install`
``` bash
npm install --save git+https://git@github.com/anzerr/banano.rpc.git
npm install --save @anzerr/banano.rpc
```

### `Example`
``` javascript
import {Rpc} from 'banano.rpc';

let api = new Rpc(`http://localhost:7072`); // {number: 'bigInt|raw'} or {number: (n: string) => any}
api.account('ban_1fundm3d7zritekc8bdt4oto5ut8begz6jnnt7n3tdxzjq3t46aiuse1h7gj').balance().then((res) => {
	console.log(res); // {balance: number, pending: number}
})
```