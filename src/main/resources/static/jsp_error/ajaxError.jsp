<% 
out.println("<ajaxError>" +
                  "<tipoError>" + request.getAttribute("tipoError") + "</tipoError>" + 
                  "<descripcion>" + request.getAttribute("errorAcceso") + "</descripcion>" +
            "</ajaxError>");
%>