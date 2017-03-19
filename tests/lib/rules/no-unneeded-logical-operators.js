/**
 * @fileoverview Detect unneeded or if statements
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
         "var foo, bar; foo || bar;"
        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "var foo; if (foo || foo) { }",
            errors: [{
                message: "Unneeded logical operator",
                type: "IfStatement"
            }]
        }
    ]
});
