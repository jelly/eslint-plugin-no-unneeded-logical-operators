/**
 * @fileoverview Detect unneeded logical operators
 * @author Jelle van der Waa
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const RuleTester = require("eslint").RuleTester,
 rule = require("../../../lib/rules/no-unneeded-logical-operators");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run("no-unneeded-logical-operators", rule, {

    valid: [
        "var y, x; if (y || x ) {}",
         "var y, x; y || x;",
         "var y = 1; y || 1;",
         "var y, x; y && x;",
         "var y = 1; y && 1;",
         "var x = {y: 1}; x.y || x.y"
    ],

    invalid: [
        {
            code: "1 || 1",
            output: "",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "1 && 1",
            output: "",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "'x' || 'x'",
            output: "",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "var x = 1;x || x",
            output: "var x = 1;",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "var x = 1;x || x",
            output: "var x = 1;",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "var x = 1; var b = x || x",
            output: "var x = 1; var b = x",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "var b = 1 || 1",
            output: "var b = 1",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "let a = 1 || 1;",
            parserOptions: { ecmaVersion: 6 },
            output: "let a = 1;",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "if (1 || 1) {}",
            output: "if (1) {}",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "var x = 1; if (x || x) {}",
            output: "var x = 1; if (x) {}",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        }
    ]
});
