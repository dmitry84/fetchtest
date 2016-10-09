/**
 * Return path to the gulp modules
 * 
 * @param {type} moduleName
 * @returns {unresolved}
 */
function requireFromCwd(moduleName) {
    return require([process.cwd(), '../node_modules', moduleName].join('/'));
}


module.exports.requireFromCwd = requireFromCwd;