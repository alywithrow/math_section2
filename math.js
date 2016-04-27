#!/usr/bin/env node

// get argument values
var op   =  process.argv[2], // the operator for the math
	num1 = +process.argv[3], // the first operand
	num2 = +process.argv[4]; // the second operand

if ("add" === op) {
	console.log(num1 + num2);
}

if ("subtract" === op || "-" === op) {
	console.log(num1 - num2);
}

// TODO: does NOT work with * on the command line
if ("multiply" === op || "*" === op) {
	console.log(num1 * num2);
}

// TODO: fix division by zero
if ("divide" === op || "/" === op) {
	console.log(num1 / num2);
}