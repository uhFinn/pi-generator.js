[![N|Solid](https://cdn.discordapp.com/attachments/766720740677517332/787039404727599184/twitch-follow-us-on-twitch-BG_1.png)](https://twitch.tv/uhFinn)

# pigenerator
**_This NPM package generates infinite digits of pi for you!_**

Database Generate Example:
```js
const pi = require('pi-generator.js')

console.log(pi("database", 1000000))
```
Output:
> [1,000,000 Digits Of Pi]

<br /><br /><br />
If you wish to generate more than 1 Million Digits of pi you will need to compute it on your computer,
Luckily we have a tool that does just that for you!<br /><br />

__Compute Example 1__
```js
const pi = require('pi-generator.js')

//Without Progress Logging to show you how much has been computed so far
console.log(pi("compute", 100000))
```
Output:
> [100,000 Digits Of Pi]

<br />

__Compute Example 2__

```js
const pi = require('pi-generator.js')

//With Console Progress Logging to show you how much has been computed so far
console.log(pi("compute", 1000000, true))
```
Output:
> [1,000,000 Digits Of Pi]

<br /><br /><br />
*Our Other Projects:*
***https://www.npmjs.com/~uhfinn***