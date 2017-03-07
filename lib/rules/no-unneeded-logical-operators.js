/**
 * @fileoverview Detect unneeded or if statements
 * @author Jelle van der Waa
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Detect unneeded logical operators",
            category: "Stylistic Issues",
            recommended: false
        },
        fixable: "code",
        schema: []
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
                IfStatement(node) {
                    const test = node.test;
                    if (test.operator === "||" && test.left.name === test.right.name) {
                        context.report({node, message: "Unneeded logical operator"});
                    }
                }

            // give me methods

        };
    }
};
