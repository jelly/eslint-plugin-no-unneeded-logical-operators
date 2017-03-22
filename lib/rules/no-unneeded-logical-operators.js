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

        /**
         * General fixer helper
         *
         * @param {ASTNode} node - The node to fix
         * @param {fixer} fixer - The eslint fixer
         * @return {void}
        */
        function fixNode(node, fixer) {
          console.log(node);
          if (node.parent.type === "IfStatement" || node.parent.type === "VariableDeclarator") {
            return fixer.removeRange([node.left.end, node.right.end]);
          } else {
            return fixer.remove(node);
          }
        }

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
                LogicalExpression(node) {
                  if (node.left.type === "Literal" && node.right.type === "Literal" && node.left.value === node.right.value) {
                        context.report({
                          node,
                          fix(fixer) {
                            return fixNode(node, fixer);
                          },
                          message: "Unneeded logical operator"
                        });
                  }
                  if (node.left.type === "Identifier" && node.right.type === "Identifier" && node.left.name === node.right.name) {
                        context.report({
                          node,
                          fix(fixer) {
                            return fixNode(node, fixer);
                          },
                          message: "Unneeded logical operator"
                        });
                  }
                }
        };
    }
};
