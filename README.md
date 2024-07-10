# livsey-finance-library
The Livesey Finance Library is a financial library designed for various financial calculations and data analysis. This library provides tools and functions essential for handling financial computations, making it easier for developers to implement financial logic in their projects. By integrating this library, users can efficiently manage and analyze financial data, leading to more productive and accurate financial software development.

<ol>
  <li>
    <a href="#getting-started">Getting Started</a>
    <ul>
      <li><a href="#installation">Installation</a></li>
    </ul>
  </li>
  <li>
    <a href="#features">Features</a>
    <ul>
      <li>
        <a href="#debt-ratios">Debt ratios</a>
        <ul>
          <li><a href="#debt-to-equity-ratio">Debt-to-Equity Ratio</a></li>
          <li><a href="#long-term-debt-to-equity-ratio">Long-term Debt to Equity Ratio</a></li>
        </ul>
      </li>
      <li><a href="#efficiency-ratios">Efficiency ratios</a></li>
      <li><a href="#liquidity-ratios">Liquidity ratios</a></li>
      <li><a href="#valuation-ratios">Valuation Ratios</a></li>
      <li><a href="#other-ratios">Other Ratios</a></li>
    </ul>
  </li>
  <li><a href="#errors">Errors</a></li>
  <ul>
    <li><a href="#zero-division-error">ZeroDivisionError</a></li>
  </ul>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#contact">Contact</a></li>
</ol>

<!-- GETTING STARTED -->
## Getting Started
### Installation

Here you can get in touch with installation and basic setup guide

Firstly, you should install a package from npm

* __npm (as a simple dependency):__

  ```sh
  npm i bonorm
  ```
* __npm (as a dev dependency):__
  
  ```sh
  npm install bonorm --save-dev
  ```
Secondly, you should import package in your project
* __using CommonJS:__

  ```js
  const { calculateLTDebtEquity } = require("livsey-finance-library");
  ```
* __using ES module:__
  
  ```js
  import { calculateLTDebtEquity } from "livsey-finance-library";
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FEATURES -->
## Features
### Debt ratios

* #### Debt-to-Equity Ratio

The debt-to-equity (D/E) ratio assesses a company's financial leverage by dividing its total liabilities by shareholder equity. This crucial metric in corporate finance indicates the extent to which a company relies on debt to fund its operations, as opposed to using its own resources.

$$
\text{Debt/Equity} = \frac{\text{Total Liabilities}}{\text{Total Shareholders' Equity}}
$$

####  Usage
```ts
import {calculateLTDebtEquity} from "livsey-finance-library"
const res = calculateLTDebtEquity(2000, 20)
console.log(res) // res: 100
```

* #### Long-term Debt to Equity Ratio



<p align="right">(<a href="#readme-top">back to top</a>)</p>




https://www.investopedia.com/