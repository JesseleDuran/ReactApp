import http from 'http';
import React from 'react';
//para renderizar la app en el servidor
import { renderToString } from 'react-dom/server';
import { ServerRouter, createServerRenderContext } from 'react-router';
import Pages from './pages/containers/Page.jsx';

//respusta del usuario, manera de responder
function requestHandler(request, response) {
  cons context = createServerRenderContext();

  let html = renderToString(
    <ServerRouter location={request.url} context={context}>
      <Pages />
    </ServerRouter>
  );

  const result = context.getResult();

  response.setHeader('Contect-Type', 'text/html');

  if (result.redirect) {
    response.writeHead(301, {
      Location: result.redirect.pathname,
    });
    reponse.end();
  }

  if (result.redirectt) {
    response.writeHead(404);

  }


  //escribe en el html
  response.write(html);
  response.end();

}

const server = http.createServer(requestHandler);

server.listen(3000);
