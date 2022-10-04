# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
After dry running the code, and understanding how it works, the first thing I did is try to eliminate unnecessary control structures. For example, `partitionKey` (formally `candidate`, since this is the output and I'm expecting a partition key) is not created if the `event` parameter is empty or not valid. So I was able to return the `DEFAULT_PARTITION_KEY` (formally `TRIVIAL_PARTITION_KEY`, since it's the default key for no or empty parameters). The length is checked at the end, but "0" is less, except the value is changed later.  The function also do not need to check length from the output of `createHash` since it's always 128. What I have left is to check if there is a partitionKey existing in the parameter and if whether it's a string or not, stringify it if otherwise. This is the only place the function need to check for length greater than `MAX_PARTITION_KEY_LENGTH`.

