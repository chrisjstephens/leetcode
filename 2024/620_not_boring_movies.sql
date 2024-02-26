# 620. Not Boring Movies
# https://leetcode.com/problems/not-boring-movies
# Write your MySQL query statement below
select * from Cinema where id % 2 and description <> 'boring' order by rating desc
