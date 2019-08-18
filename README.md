
### `Intro`
Typescript interface to call the [nano rpc](https://docs.nano.org/commands/rpc-protocol/#block_info)

#### `Install`
``` bash
npm install --save git+https://git@github.com/anzerr/banano.rpc.git
```

### `Example`
``` javascript
import {Rpc} from 'banano.rpc';

let api = new Rpc(`http://localhost:7072`);
api.account('ban_1fundm3d7zritekc8bdt4oto5ut8begz6jnnt7n3tdxzjq3t46aiuse1h7gj').balance().then((res) => {
	console.log(res); // {balance: number, pending: number}
})
```