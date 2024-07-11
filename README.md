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
      <li>
      <a href="#liquidity-ratios">Liquidity ratios</a>
        <ul>
          <li><a href="#current-ratio">Current Ratio</a></li>
          <li><a href="#quick-ratio">Quick Ratio</a></li>
          <li><a href="#cash-ratio">Cash Ratio</a></li>
          <li><a href="#net-working-capital-to-revenue">Net Working Capital to Revenue</a></li>
          <li><a href="#net-debt">Net Debt</a></li>
        </ul>
      </li>
   <li>
    <a href="#valuation-ratios">Valuation ratios</a>
    <ul>
        <li><a href="#price-to-earnings">Price-to-Earnings</a></li>
        <li><a href="#forward-price-to-earnings">Forward Price-to-Earnings</a></li>
        <li><a href="#price-to-earnings-to-growth">Price-to-Earnings-to-Growth</a></li>
        <li><a href="#price-to-sales">Price-to-Sales</a></li>
        <li><a href="#price-to-book">Price-to-Book</a></li>
        <li><a href="#price-to-cash-flow">Price-to-Cash Flow</a></li>
        <li><a href="#price-to-free-cash-flow">Price to Free Cash Flow</a></li>
        <li><a href="#cape-ratio">CAPE Ratio</a></li>
    </ul>
</li>
      <li><a href="#other-ratios">Other Ratios</a></li>
    </ul>
  </li>
  <li><a href="#errors">Errors</a></li>
  <ul>
    <li><a href="#zero-division-error">ZeroDivisionError</a></li>
  </ul>
  <li><a href="#contributing">Contributing</a></li>
  <li><a href="#license">License</a></li>
  <li><a href="#sources">Sources</a></li>
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
import { calculateDebtEquity } from "livsey-finance-library"

const totalDebt = 2000;
const equity = 20;

const res = calculateDebtEquity(totalDebt, equity)
console.log(res) // res: 100
```

* #### Long-term Debt to Equity Ratio

The long-term debt to equity ratio indicates the proportion of a company's assets that are funded through long-term financial commitments, such as loans. This ratio is computed by dividing long-term debt by shareholders' equity.

$$
\text{Long-term D/E} = \frac{\text{Long-term Debt}}{\text{Equity}}
$$

####  Usage:
```ts
import { calculateLTDebtEquity } from "livsey-finance-library"

const longTermDebt = 2000;
const equity = 20;

const res = calculateLTDebtEquity(longTermDebt, equity)
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
```ts
import { calculateEPS } from "livsey-finance-library"

const netIncome = 1000000;
const preferredDividends = 50000;
const sharesOutstanding = 200000;

const eps = calculateEPS(netIncome, preferredDividends, sharesOutstanding);
console.log(eps); // Output: 20
```

* #### Return on Assets

The term "return on assets" (ROA) describes a financial ratio that measures a company's profitability relative to its total assets. Corporate management, analysts, and investors use ROA to assess how effectively a company utilizes its assets to produce profit.

$$
\text{ROA} = \frac{\text{Net Income}}{\text{Total Assets}}
$$

####  Usage:

```ts
import { calculateROA } from "livsey-finance-library"

const netIncome = 1000000;
const totalAssets = 5000000;

const roa = calculateROA(netIncome, totalAssets);
console.log(roa); // Output: 0.2
```

* #### Return on Equity

Return on equity (ROE) is a financial performance metric obtained by dividing net income by shareholders' equity. Since shareholders' equity equals a company's assets minus its debt, ROE is viewed as the return on net assets. ROE serves as an indicator of a corporation's profitability and efficiency in generating profits. A higher ROE signifies that the company's management is more effective at generating income and growth from its equity financing.

$$
\text{ROE} = \frac{\text{Net Income}}{\text{Shareholder's Equity}}
$$

####  Usage:

```ts
import { calculateROE } from "livsey-finance-library"

const netIncome = 1000000;
const shareholdersEquity = 3000000;

const roe = calculateROE(netIncome, shareholdersEquity);
console.log(roe); // Output: 0.3333333333333333
```

* #### Return on Investment

Return on investment (ROI) is a metric used to assess how efficiently or profitably an investment is performing, or to compare the effectiveness of multiple investments. It aims to quantify the return generated by a specific investment in relation to its cost.

$$
\text{ROI} = \frac{\text{Current Value of Investment} - \text{Cost of Investment}}{\text{Cost of Investment}}
$$

####  Usage:

```ts
import { calculateROI } from "livsey-finance-library"

const currentValue = 1500000;
const cost = 1000000;

const roi = calculateROI(currentValue, cost);
console.log(roi); // Output: 0.5
```

### Liquidity ratios

* #### Current Ratio

The current ratio is a liquidity metric that assesses a company’s capacity to meet its short-term liabilities, due within a year. It indicates to investors and analysts how effectively a company can utilize its current assets to cover its current debts and other payables.
A current ratio that matches or slightly exceeds the industry average is typically deemed acceptable. A ratio below the industry average may signal a higher risk of financial distress or default. Conversely, a significantly high current ratio compared to peers suggests that the company might not be using its assets efficiently.
This ratio is termed "current" because it includes all current assets and liabilities, unlike some other liquidity ratios. It is also known as the working capital ratio.

$$
\text{Current Ratio} = \frac{\text{Current Assets}}{\text{Current Liabilities}}
$$

####  Usage:

```ts
import { calculateCurrentRatio } from "livsey-finance-library";
  
const currentAssets = 600000;
const currentLiabilities = 300000;

const currentRatio = calculateCurrentRatio(currentAssets, currentLiabilities);
console.log(currentRatio); // Output: 2
```

* #### Quick Ratio

The quick ratio is an indicator of a company’s short-term liquidity position and measures a company’s ability to meet its short-term obligations with its most liquid assets.
Since it indicates the company’s ability to instantly use its near-cash assets (assets that can be converted quickly to cash) to pay down its current liabilities, it is also called the acid test ratio. An [“acid test”](https://www.investopedia.com/terms/a/acidtest.asp) is a slang term for a quick test designed to produce instant results.

$$
\text{Quick Ratio} = \frac{\text{Cash} + \text{Marketable Securities} + \text{Accounts Receivable}}{\text{Current Liabilities}}
$$

####  Usage:

```ts
import { calculateQuickRatio } from "livsey-finance-library";
  
const currentLiabilities = 300000;
const cash = 200000;
const marketableSecurities = 100000;
const accountsReceivable = 100000;
  
const quickRatio = calculateQuickRatio(cash, marketableSecurities, accountsReceivable, currentLiabilities);
console.log(quickRatio); // Output: 1.3333333333333333
```

* #### Cash Ratio
The cash ratio is a measurement of a company's [liquidity](https://www.investopedia.com/terms/l/liquidity.asp). It calculates the ratio of a company's total [cash and cash equivalents](https://www.investopedia.com/terms/c/cashandcashequivalents.asp) to its current liabilities. The metric evaluates a company's ability to repay its short-term debt with cash or near-cash resources such as easily [marketable securities](https://www.investopedia.com/terms/m/marketablesecurities.asp). This information is useful to creditors when they decide how much money, if any, they would be willing to loan to a company.

$$
\text{Cash Ratio} = \frac{\text{Cash}}{\text{Current Liabilities}}
$$

####  Usage:

```ts
import { calculateCashRatio } from "livsey-finance-library";
  
const currentLiabilities = 300000;
const cash = 200000;

const cashRatio = calculateCashRatio(cash, currentLiabilities);
console.log(cashRatio); // Output: 0.6666666666666666
```

* #### Net Working Capital to Revenue
Net Working Capital (NWC) % Revenue is a financial metric that measures the proportion of a company's net working capital relative to its total revenue. Net working capital is calculated as current assets minus current liabilities, and it represents the short-term liquidity and operational efficiency of a company. This ratio provides insights into how effectively a company is managing its working capital in relation to its revenue generation. A higher NWC % Revenue indicates that a larger portion of the company's revenue is tied up in working capital, which might affect its ability to invest in growth opportunities. Conversely, a lower ratio suggests more efficient working capital management, allowing more revenue to be available for other purposes such as reinvestment or debt repayment. This metric is particularly useful for investors and financial analysts in assessing a company's operational health and its ability to meet short-term obligations.

$$
\text{NWC % Revenue} = \frac{\text{Net Working Capital}}{\text{Revenue}}
$$

####  Usage:

```ts
import { calculateNWCPercentageRevenue } from "livsey-finance-library";
  
const netWorkingCapital = 300000;
const revenue = 2000000;

const nwcRevenue = calculateNWCPercentageRevenue(netWorkingCapital, revenue);
console.log(nwcRevenue); // Output: 0.15
```

* #### Net Debt
Net debt is a liquidity metric that's used to determine how well a company can pay all its debts if they come due immediately. Net debt shows how much debt a company has on its [balance sheet](https://www.investopedia.com/articles/04/031004.asp) compared to its liquid assets. It shows how much cash would remain if all debts were paid off and if a company has sufficient liquidity to meet its debt obligations.

$$
\text{Net Debt} = \text{Total Debt} - \text{Cash}
$$

####  Usage:

```ts
import { calculateNetDebt } from "livsey-finance-library";
  
const totalDebt = 500000;
const cash = 200000;

const netDebt = calculateNetDebt(totalDebt, cash);
console.log(netDebt); // Output: 300000
```

### Valuation ratios

* #### Price-to-Earnings
The price-to-earnings ratio (P/E) is one of the most widely used metrics for investors and analysts to determine stock valuation. It shows whether a company’s stock price is overvalued or undervalued and can reveal how a stock’s valuation compares with its industry group or a benchmark like the S&P 500 Index. A [good P/E for one group or sector](https://www.investopedia.com/ask/answers/012015/what-average-pricetoearnings-ratio-oil-gas-drilling-sector.asp) could be a poor P/E for another sector, so comparisons should compare similar companies.

The P/E ratio helps [investors](https://www.investopedia.com/terms/i/investor.asp) determine the [market value](https://www.investopedia.com/terms/m/marketvalue.asp) of a stock compared with the company’s [earnings](https://www.investopedia.com/terms/e/earnings.asp). It shows what the market is willing to pay for a stock based on its past or future earnings.

$$
\text{P/E} = \frac{\text{Price}}{\text{EPS}}
$$

####  Usage:

```ts

```

* #### Forward Price-to-Earnings
The forward P/E ratio (or forward price-to-earnings ratio) divides the current share price of a company by the estimated future (“forward”) [earnings per share (EPS)](https://corporatefinanceinstitute.com/resources/valuation/earnings-per-share-eps-formula/) of that company.  For [valuation purposes](https://corporatefinanceinstitute.com/resources/valuation/valuation/), a forward P/E ratio is typically considered more relevant than a historical P/E ratio.

$$
\text{Forward P/E} = \frac{\text{Price}}{\text{Forward EPS}}
$$

####  Usage:

```ts

```

* #### Price-to-Earnings-to-Growth

The price/earnings to growth ratio (PEG ratio) is a stock's [price-to-earnings](https://www.investopedia.com/terms/p/price-earningsratio.asp) (P/E) ratio divided by the growth rate of its earnings for a specified time period.

The PEG ratio is used to determine a stock's value while also factoring in the company's expected earnings growth, and it is thought to provide a more complete picture than the more standard P/E ratio.

$$
\text{PEG} = \frac{\text{Price/EPS}}{\text{EPS Growth}}
$$

####  Usage:

```ts

```

* #### Price-to-Sales

The price-to-sales (P/S) ratio is a valuation ratio that compares a company’s stock price to its [revenues](https://www.investopedia.com/terms/r/revenue.asp). It is an indicator of the value that financial markets have placed on each dollar of a company’s sales or revenues.

$$
\text{P/S} = \frac{\text{Market Value per Share}}{\text{Sales per Share}}
$$

####  Usage:

```ts

```

* #### Price-to-Book

A company's price-to-book ratio is the company's current stock price per [share](https://www.investopedia.com/terms/s/shares.asp) divided by its book value per share (BVPS). This shows the market valuation of a company compared to its book value.

If your goal as an investor is to unearth high-growth companies selling at low-growth prices, the [price-to-book ratio](https://www.investopedia.com/terms/p/price-to-bookratio.asp) (P/B) offers an effective approach to finding [undervalued](https://www.investopedia.com/terms/u/undervalued.asp) companies. The P/B ratio can also help investors identify and avoid [overvalued](https://www.investopedia.com/terms/o/overvalued.asp) companies.

However, this ratio has its limitations and there are circumstances where it may not be the most effective metric for valuation.

$$
\text{P/B} = \frac{\text{Market Price per Share}}{\text{Book Value per Share}}
$$

####  Usage:

```ts

```

* #### Price-to-Cash Flow

The price-to-cash flow (P/CF) ratio is a stock valuation indicator or multiple that measures the value of a stock’s price relative to its [operating cash flow](https://www.investopedia.com/terms/o/operatingcashflow.asp) per share. The ratio uses operating cash flow (OCF), which adds back non-cash expenses such as depreciation and amortization to net income.

P/CF is especially useful for valuing stocks that have positive cash flow but are not profitable because of large [non-cash charges](https://www.investopedia.com/terms/n/noncashcharge.asp).

$$
\text{P/CF} = \frac{\text{Share Price}}{\text{Operating Cash Flow per Share}}
$$

####  Usage:

```ts

```

* #### Price to Free Cash Flow

Price to free cash flow (P/FCF) is an equity [valuation](https://www.investopedia.com/terms/v/valuation.asp) metric that compares a company's per-share [market price](https://www.investopedia.com/terms/m/market-price.asp) to its [free cash flow](https://www.investopedia.com/terms/f/freecashflow.asp) (FCF). This metric is very similar to the valuation metric of price to cash flow but is considered a more exact measure because it uses free cash flow, which subtracts capital expenditures (CAPEX) from a company's total [operating cash flow](https://www.investopedia.com/terms/o/operatingcashflow.asp), thereby reflecting the actual cash flow available to fund non-asset-related growth.

Companies can use this metric to base growth decisions and maintain acceptable free cash flow levels.

$$
\text{P/FCF} = \frac{\text{Market Capitalization}}{\text{Free Cash Flow}}
$$

####  Usage:

```ts

```

* #### CAPE Ratio

The CAPE ratio is a valuation measure that uses real [earnings per share](https://www.investopedia.com/terms/e/eps.asp) (EPS) over a 10-year period to smooth out fluctuations in corporate profits that occur over different periods of a [business cycle](https://www.investopedia.com/terms/b/businesscycle.asp).

The CAPE ratio, an acronym for cyclically adjusted price-to-earnings ratio, was popularized by Yale University professor Robert Shiller. It is also known as the Shiller P/E ratio. The [P/E ratio](https://www.investopedia.com/terms/p/price-earningsratio.asp) is a valuation metric that measures a stock’s price relative to the company’s earnings per share. EPS is a [company](https://www.investopedia.com/terms/c/company.asp)’s profit divided by the outstanding equity shares.

The CAPE ratio is generally applied to broad [equity](https://www.investopedia.com/terms/e/equity.asp) indexes to assess whether the market is undervalued or overvalued. While it is a popular and widely followed measure, several leading [industry](https://www.investopedia.com/terms/i/industry.asp) practitioners have called into question its utility as a predictor of future stock market returns.

$$
\text{CAPE} = \frac{\text{Share Price}}{\text{Average, Inflation-Adjusted Earnings over 10 Years}}
$$

####  Usage:

```ts

```

<!-- SOURCES -->
## Sources:
* #### https://www.investopedia.com/
* #### https://corporatefinanceinstitute.com/