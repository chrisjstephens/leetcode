//https://leetcode.com/problems/create-hello-world-function
//2667. Create Hello World Function
function createHelloWorld() {

    return function(...args): string {
        return "Hello World";
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
