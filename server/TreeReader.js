const fs = require('fs');
const path = require('path');

/**
 * Explores recursively a directory and returns all the filepaths and folderpaths in the callback.
 *
 * @see http://stackoverflow.com/a/5827895/4241030
 * @param {String} dir
 * @param {Function} done
 */
const Tree = (dir, done) => {
  let results = [];

  fs.readdir(dir, function(err, list) {
    if (err) return done(err);
    var pending = list.length;
    async function filter(str) {
      let filename = '';
      const i = str.search('pages');
      const path = str.substring(i);
      if (path.search('.js') >= 0) {
        const result = path.split('\\');
        if (path.search('.jsx') >= 0) {
          filename = await result[result.length - 1].replace('.jsx', '');
        } else {
          filename = await result[result.length - 1].replace('.js', '');
        }
        if (filename === 'index') {
          filename = result[result.length - 2];
        }
        return { filename, path: result };
      }
    }

    if (!pending) return done(null, results);

    list.forEach(function(file) {
      file = path.resolve(dir, file);
      filter(file).then((res) => {
        if (res) {
          results.push(res);
        }
      });
      fs.stat(file, function(err, stat) {
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          // Add directory to array [comment if you need to remove the directories from the array]

          Tree(file, function(err, res) {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (!--pending) done(null, results);
        }
      });
    });
  });
};
export default Tree;
