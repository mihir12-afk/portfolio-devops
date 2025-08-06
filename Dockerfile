# Use minimal nginx image
FROM nginx:alpine

# Clear default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy portfolio site files to nginx html directory
COPY . /usr/share/nginx/html

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]