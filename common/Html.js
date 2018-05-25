const html = (body, styles, childhead) => `
<!DOCTYPE html>
<html>
  <head>
    ${childhead}
    ${styles}  
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    ${body}
    <script async defer src="http://localhost:3001/client.js"></script>
  </body>
</html>
`;
export default html;
