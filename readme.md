# frequency-distribution

Given an array of numbers and range to split, returns frequency of numbers in that range

## Install

```bash
$ npm install frequency-distribution --save
```

## Usage

```js
import frequencyDistribution from 'frequency-distribution';

frequencyDistribution([1,1, 2, 3,3, 5,5,5,5]) // => { '1': 2, '2': 1, '3': 2, '5': 4 }
frequencyDistribution([1,1, 2, 3,3, 5,5,5,5], 2) // => { '1,2': 3, '3,4': 2, '5,6': 4 }
```

## API

#### array
Type: `Array<Number>`<br />
required

#### rangeLength

Type: `number`<br />
Default: 1

Length of array Items to split and group. For `[1,1,2,2,3,4,5]` length 2 becomes `[1,1,2,2], [3,4], [5]`
## License

MIT © [Amit Solanki](https://solankiamit.com)
