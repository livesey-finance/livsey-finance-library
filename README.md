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
      <li>
        <a href="#efficiency-ratios">Efficiency ratios</a>
        <ul>
          <li><a href="#earnings-per-share">Earnings Per Share</a></li>
          <li><a href="#return-on-assets">Return on Assets</a></li>
          <li><a href="#return-on-equity">Return on Equity</a></li>
          <li><a href="#return-on-investment">Return on Investment</a></li>
        </ul>
      </li>
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
  npm i livsey-finance-library
  ```
* __npm (as a dev dependency):__
  
  ```sh
  npm install livsey-finance-library --save-dev
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

####  Usage:
```ts
import {calculateDebtEquity} from "livsey-finance-library"
const res = calculateDebtEquity(2000, 20)
console.log(res) // res: 100
```

* #### Long-term Debt to Equity Ratio

The long-term debt to equity ratio indicates the proportion of a company's assets that are funded through long-term financial commitments, such as loans. This ratio is computed by dividing long-term debt by shareholders' equity.

$$
\text{Long-term D/E} = \frac{\text{Long-term Debt}}{\text{Equity}}
$$

####  Usage:
```ts
import {calculateLTDebtEquity} from "livsey-finance-library"
const res = calculateLTDebtEquity(2000, 20)
console.log(res) // res: 100
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Efficiency ratios
* #### Earnings Per Share

Earnings per share (EPS) measures a company's profitability by showing the profit earned on each outstanding share of common stock. It is calculated by dividing the company's net income by the number of outstanding shares.

$$
\text{EPS} = \frac{\text{Net Income - Preferred Dividents}}{\text{End-of-Period Common Shares Outstanding}}
$$

####  Usage:

* #### Return on Assets

The term "return on assets" (ROA) describes a financial ratio that measures a company's profitability relative to its total assets. Corporate management, analysts, and investors use ROA to assess how effectively a company utilizes its assets to produce profit.

$$
\text{ROA} = \frac{\text{Net Income}}{\text{Total Assets}}
$$

####  Usage:

* #### Return on Equity

Return on equity (ROE) is a financial performance metric obtained by dividing net income by shareholders' equity. Since shareholders' equity equals a company's assets minus its debt, ROE is viewed as the return on net assets. ROE serves as an indicator of a corporation's profitability and efficiency in generating profits. A higher ROE signifies that the company's management is more effective at generating income and growth from its equity financing.

$$
\text{ROE} = \frac{\text{Net Income}}{\text{Shareholder's Equity}}
$$

####  Usage:

* #### Return on Investment

Return on investment (ROI) is a metric used to assess how efficiently or profitably an investment is performing, or to compare the effectiveness of multiple investments. It aims to quantify the return generated by a specific investment in relation to its cost.

$$
\text{ROI} = \frac{\text{Current Value of Investment} - \text{Cost of Investment}}{\text{Cost of Investment}}
$$

####  Usage:

https://www.investopedia.com/