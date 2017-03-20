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
        "var foo, bar; if (foo || bar ) {}",
         "var foo, bar; foo || bar;",
         "var foo = 1; foo || 1;",
         "var foo, bar; foo && bar;",
         "var foo = 1; foo && 1;",
         "var x = {x: 1}; x.y || x.y"
    ],

    invalid: [
        {
            code: "1 || 1",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "1 && 1",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "'bar' || 'bar'",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "var bar = 1; bar || bar",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
        {
            code: "var bar = 1; bar && bar",
            errors: [{
                message: "Unneeded logical operator",
                type: "LogicalExpression"
            }]
        },
    ]
});
