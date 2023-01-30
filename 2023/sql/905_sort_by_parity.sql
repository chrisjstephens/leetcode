# https://leetcode.com/problems/customers-who-never-order
# 183. Customers Who Never Order
# Write your MySQL query statement below
SELECT name AS Customers FROM Customers
WHERE id not in (SELECT customerId FROM Orders)
