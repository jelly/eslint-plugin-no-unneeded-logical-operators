/**
 * @fileoverview Detect unneeded logical operators
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
        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
                LogicalExpression(node) {
                  if (node.left.type === 'Literal' && node.right.type === 'Literal' && node.left.value === node.right.value) {
                        context.report({node, message: "Unneeded logical operator"});
                  }
                  if (node.left.type === 'Identifier' && node.right.type === 'Identifier' && node.left.name === node.right.name) {
                        context.report({node, message: "Unneeded logical operator"});
                  }
                }
        };
    }
};
