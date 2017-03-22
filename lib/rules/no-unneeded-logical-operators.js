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

        /**
         * Helper for reporting warnings
         *
         * @param {ASTNode} node - The to be rported node
         * @return {void}
         */
        function reportNode(node) {
            context.report({
              node,
              fix(fixer) {
                if (node.parent.type === "IfStatement" || node.parent.type === "VariableDeclarator") {
                  return fixer.removeRange([node.left.end, node.right.end]);
                }

                return fixer.remove(node);
              },
              message: "Unneeded logical operator"
            });
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
                LogicalExpression(node) {
                  if (node.left.type === "Literal" && node.right.type === "Literal" && node.left.value === node.right.value) {
                    reportNode(node);
                  }
                  if (node.left.type === "Identifier" && node.right.type === "Identifier" && node.left.name === node.right.name) {
                    reportNode(node);
                  }
               }
        };
    }
};
