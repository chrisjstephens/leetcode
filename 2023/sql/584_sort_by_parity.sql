# https://leetcode.com/problems/find-customer-referee
# 584. Find Customer Referee
# Write your MySQL query statement below
SELECT name FROM Customer WHERE referee_id is null OR referee_id != 2;
