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
                  if (node.left.type === "CallExpression" && node.right.type === "CallExpression" && node.left.name === node.right.name) {
                    // Verify if arguments are the same
                    if (node.left.arguments.length !== node.right.arguments.length) {
                      return;
                    }

                    const equal = node.left.arguments.every((arg, index) => {
                      const right = node.right.arguments[index];
                      if (arg.type !== right.type) {
                        return false;
                      }

                      switch(arg.type) {
                        case "Literal":
                          return arg.value === right.value;
                        case "Identifier":
                          return arg.name === right.name;
                        default:
                          return false;
                      }
                    });

                    if (equal) {
                      reportNode(node);
                    }
                  }
               }
        };
    }
};
