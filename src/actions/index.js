export const REQUEST_HOME_PAGE = "REQUEST_HOME_PAGE";
export const RECEIVE_HELLO_WORLD = "RECEIVE_HELLO_WORLD";

export const requestHomePage = () => ({ type: REQUEST_HOME_PAGE });
export const receiveHelloWorld = text => ({ type: RECEIVE_HELLO_WORLD, text });