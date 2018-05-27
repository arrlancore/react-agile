const html = (body, styles, head, bundles) => `
<!DOCTYPE html>
<html>
  <head>
    ${styles}
    ${head.title && head.title.toString()}${head.meta &&
  head.meta.toString()}${head.link && head.link.toString()}${head.style &&
  head.style.toString()}
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div id="root">${body}</div>  
    <script src="http://localhost:3001/vendor.js"></script>    
    <script src="http://localhost:3001/main.js"></script>  
  </body>
</html>
`;
export default html;

// ${bundles &&
//   bundles[0] &&
//   bundles
//     .map((bundle) => {
//       return `<script src="/dist/${bundle.file}"></script>`;
//     })
//     .join('\n')}
