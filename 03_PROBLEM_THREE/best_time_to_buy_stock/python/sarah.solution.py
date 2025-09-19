# Approach — State Machine DP
# We track 4 states while scanning prices:
# buy1: max profit after first buy
# sell1: max profit after first sell
# buy2: max profit after second buy (after first sell)
# sell2: max profit after second sell
# At each price, update them:
# buy1 = max(buy1, -price)
# sell1 = max(sell1, buy1+price)
# buy2 = max(buy2, sell1-price)
# sell2 = max(sell2, buy2+price)


def maxProfit(prices):
    buy1 = buy2 = float('-inf')  # lowest possible to start
    sell1 = sell2 = 0

    for price in prices:
        # Either buy now (negative cash) or keep previous
        buy1 = max(buy1, -price)
        # Either sell now (add price to buy1) or keep previous
        sell1 = max(sell1, buy1 + price)
        # Second buy: either use profit from first sell - price
        buy2 = max(buy2, sell1 - price)
        # Second sell: either use profit from second buy + price
        sell2 = max(sell2, buy2 + price)

    return sell2
